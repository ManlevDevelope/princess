import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { NICK_CHANGED, NICK_CHECK_REQUEST } from '../Actions';
import { signUpRequestAction } from '../reducer/user';
import Button from './common/Button';
import useInput from './hooks/useInput';
import { Container } from './styled';

const SignupContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { signUpLoading, signUpError, signUpDone, nickCheck, nickCheckError } =
    useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');
  const [nickname, setNickname] = useState('');
  const [number, onChangeNumber] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (nickCheckError) alert(nickCheckError);
  }, [nickCheckError]);
  useEffect(() => {
    if (signUpError) alert(signUpError);
  }, [signUpError]);
  useEffect(() => {
    if (signUpDone) history.replace('/login');
  }, [signUpDone]);

  const onChangeNickname = useCallback(
    (e) => {
      e.preventDefault();
      if (nickCheck) {
        dispatch({ type: NICK_CHANGED });
      }
      setNickname(e.target.value);
    },
    [nickname, nickCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      e.preventDefault();
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onNicknameCheck = useCallback(
    (e) => {
      e.preventDefault();
      if (nickname === '') {
        alert('닉네임을 입력해주세요');
        return;
      }
      dispatch({ type: NICK_CHECK_REQUEST, data: nickname });
    },
    [nickname]
  );
  const onCheckPhone = useCallback((e) => {
    e.preventDefault();

    alert('준비중 입니다.');
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        alert('비밀번호가 일치하지 않습니다');
        return;
      }
      if (!nickCheck) {
        alert('닉네임체크를 다시해주세요');
        return;
      }
      dispatch(
        signUpRequestAction({
          email,
          password,
          name,
          nickname,
        })
      );
    },
    [email, password, nickname, passwordCheck, name, nickCheck]
  );
  return (
    <Container>
      <div className='create-account-grp'>
        <div className='create-header'>
          <div className='title'>
            <h1>회원가입</h1>
          </div>
          <div className='btn-login-grp'>
            <Link to='/login' replace>
              로그인
            </Link>
            <Link to='/'>아이디 찾기</Link>
            <Link to='/'>비밀번호 찾기</Link>
          </div>
        </div>
        <div className='login-form'>
          <form onSubmit={onSubmit}>
            <div className='form-grp'>
              <label htmlFor='email'>이메일</label>
              <input
                value={email}
                onChange={onChangeEmail}
                type='text'
                id='email'
                required
              />
            </div>
            <div className='form-grp'>
              <label htmlFor='password'>비밀번호</label>
              <input
                value={password}
                onChange={onChangePassword}
                type='password'
                id='password'
                required
              />
            </div>
            <div className='form-grp'>
              <label htmlFor='passwordConfirm'>비밀번호 확인</label>
              <input
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                type='password'
                id='passwordConfirm'
                required
              />
              {passwordError && <p>비밀번호가 일치하지 않습니다</p>}
            </div>
            <div className='form-grp'>
              <label htmlFor='name'>이름</label>
              <input
                value={name}
                onChange={onChangeName}
                type='text'
                id='name'
                required
              />
            </div>
            <div className='form-grp'>
              <label htmlFor='nick'>닉네임</label>
              <div className='input-grp'>
                <input
                  value={nickname}
                  onChange={onChangeNickname}
                  type='text'
                  id='nick'
                  required
                />
                <button onClick={onNicknameCheck}>
                  {nickCheck ? '성공' : '중복확인'}
                </button>
              </div>
            </div>
            <div className='form-grp'>
              <label htmlFor='phonenum'>전화번호</label>
              <div className='input-grp'>
                <input
                  value={number}
                  onChange={onChangeNumber}
                  type='text'
                  id='phonenum'
                />
                <button onClick={onCheckPhone}>인증요청</button>
              </div>
            </div>
            <div className='complete-btn'>
              <Button loading={signUpLoading}>완료</Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignupContainer;
