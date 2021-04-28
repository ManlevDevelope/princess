import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// 유저 프로필 컴포넌트

const UserProfileComponent = () => {
  const [post, setPost] = useState([1, 2, 3, 4, 5]);
  const [like, setLike] = useState([1, 2, 3, 4]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    for (let val of imageFormData.values()) console.log(val);
    // dispatch images
  }, []);
  return (
    <div className='container'>
      <div className='profile'>
        <div className='thumb-mycard'>
          <div className='thumb-btn'>
            <div className='thumb'></div>
            <button onClick={onClickImageUpload}>
              <img src='/img/icon-camera-white.svg' alt='' />
            </button>
            <input
              type='file'
              name='image'
              multiple
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
          </div>
        </div>
        <div className='info-grp'>
          <div className='profile-item'>
            <dt>
              <Link to='/'>{post.length}개</Link>
            </dt>
            <dd>
              <Link to='/'>게시글</Link>
            </dd>
          </div>
          <div className='profile-item'>
            <dt>
              <Link to='/'>{like.length}건</Link>
            </dt>
            <dd>
              <Link to='/'>찜목록</Link>
            </dd>
          </div>
          <div className='profile-item'>
            <dt>
              <Link to='/'>0건</Link>
            </dt>
            <dd>
              <Link to='/'>결제내역</Link>
            </dd>
          </div>
        </div>
      </div>
      <div className='profile-edit'>
        <Link to=''>프로필 편집</Link>
      </div>
    </div>
  );
};

export default UserProfileComponent;
