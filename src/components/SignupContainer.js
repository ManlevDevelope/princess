import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpRequestAction } from '../reducer/user';
import useInput from './hooks/useInput';
import { Container } from './styled';

const SignupContainer = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [username, onChangeUsername] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [number, onChangeNumber] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onDupleCheck = useCallback(
    (e) => {
      e.preventDefault();
      // dispatch({type:CHECK_NICKNAME,data:nickname});
    },
    [nickname]
  );
  const onCheckPhone = useCallback((e) => {
    e.preventDefault();

    alert('준비중 입니다.');
  }, []);
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    dispatch(
      signUpRequestAction({
        email,
        password,
        username,
        nickname,
      })
    );
  }, [email, password, nickname, passwordCheck, username]);
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
                value={username}
                onChange={onChangeUsername}
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
                <button onClick={onDupleCheck}>중복확인</button>
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
              <button>완료</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignupContainer;
