import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  NICK_CHANGED,
  UPLOAD_REFRESH,
  WHO_REQUEST,
  GIVE_ITEM_REQUEST,
  GIVE_REFRESH,
} from '../Actions';
import Modal from 'react-modal';
import CardComponent from '../components/CardComponent';
import UserProfileComponent from '../components/UserProfileComponent';
import Layout from '../layouts';
import { useCallback } from 'react';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    width: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UserInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nextModalPage, setNextModalPage] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [userNick, setUserNickname] = useState('');
  const [selectedItemName, setSelectedItemName] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const { uploadItemDone, giveItemDone } = useSelector((state) => state.item);

  const { who, whoError } = useSelector((state) => state.user);
  const { Cards: item, nickname } = useSelector((state) => state.user.me);

  const onClickItem = useCallback(
    ({ id, name }) =>
      () => {
        console.log('selected', id);
        setSelectedId(id);
        setSelectedItemName(name);
        setIsOpen(true);
      },
    [item, selectedItemName, modalIsOpen]
  );

  const onCloseModal = useCallback(() => {
    if (nextModalPage) setNextModalPage(false);
    setIsOpen(false);
  }, [nextModalPage]);
  //다음장 모달
  const onChangeItemPage = useCallback(() => {
    setNextModalPage(true);
  }, []);
  //닉네임 체크
  const onNicknameCheck = useCallback(
    (e) => {
      e.preventDefault();
      if (nickname === '') {
        alert('닉네임을 입력해주세요');
        return;
      }
      dispatch({ type: WHO_REQUEST, data: userNick });
    },
    [userNick]
  );
  const onChangeNickname = useCallback(
    (e) => {
      e.preventDefault();
      if (who) {
        dispatch({ type: NICK_CHANGED });
      }
      setUserNickname(e.target.value);
    },
    [who, userNick]
  );
  const onGiveItem = useCallback(
    (e) => {
      e.preventDefault();
      if (!userNick) {
        alert('대상을 입력하지 않았습니다');
        return;
      }
      if (!who) {
        alert('닉네임체크를 해주세요');
        return;
      }
      dispatch({
        type: GIVE_ITEM_REQUEST,
        data: { nickname: userNick, itemId: selectedId },
      });
    },
    [who, selectedId, userNick]
  );
  useEffect(() => {
    if (uploadItemDone) dispatch({ type: UPLOAD_REFRESH });
  }, [uploadItemDone]);

  useEffect(() => {
    if (whoError) alert(whoError);
  }, [whoError]);
  useEffect(() => {
    if (giveItemDone) {
      dispatch({ type: GIVE_REFRESH });
      history.go(0);
    }
  }, [giveItemDone]);
  return (
    <Layout>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        {!nextModalPage ? (
          <>
            <p>제품명: {selectedItemName}</p>
            <p>소유자: {nickname}</p>
            <button
              style={{
                background: '#94268f',
                width: '100%',
                height: 48,
                borderRadius: 4,
                color: 'white',
                marginTop: 8,
              }}
              onClick={onChangeItemPage}
            >
              소유권이전
            </button>
            <button
              onClick={onCloseModal}
              style={{
                background: '#1d1d1f',
                width: '100%',
                height: 48,
                borderRadius: 4,
                color: 'white',
                marginTop: 8,
              }}
            >
              확인
            </button>
          </>
        ) : (
          <>
            <div>
              <p>아이디를 확인해주세요</p>
              <div
                style={{
                  marginTop: 8,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <input
                  style={{
                    height: 42,
                    width: '80%',
                    marginRight: 2,
                    borderRadius: 4,
                  }}
                  onChange={onChangeNickname}
                  placeholder='아이디 검색'
                />
                <button
                  onClick={onNicknameCheck}
                  style={{
                    alignItems: 'middle',
                    height: 42,
                    color: 'white',
                    background: '#1d1d1f',
                    width: '19%',
                    borderRadius: 4,
                  }}
                >
                  {who ? '성공' : '확인'}
                </button>
              </div>
            </div>
            <button
              onClick={onGiveItem}
              style={{
                background: '#94268f',
                width: '100%',
                height: 48,
                borderRadius: 4,
                color: 'white',
                marginTop: 8,
              }}
            >
              이전진행
            </button>
            <button
              onClick={onCloseModal}
              style={{
                background: '#1d1d1f',
                width: '100%',
                height: 48,
                borderRadius: 4,
                color: 'white',
                marginTop: 8,
              }}
            >
              취소
            </button>
          </>
        )}
      </Modal>
      <UserProfileComponent />
      <div className='card-grp'>
        {Array.isArray(item)
          ? item.map((itm) => (
              <CardComponent
                onModalOpen={onClickItem({ id: itm.id, name: itm.name })}
                key={itm.id}
                imageSource={itm.Image.src}
              />
            ))
          : null}
      </div>
    </Layout>
  );
};

export default UserInfo;
