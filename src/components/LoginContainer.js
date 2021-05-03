import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../components/hooks/useInput';
import { loginRequestAction } from '../reducer/user';
import { Container } from './styled';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
    history.replace('/');
  }, [email, password]);
  return (
    <Container>
      <div className='login-form-grp'>
        <div className='login-grp'>
          <div className='title'>
            <Link to=''>POCKETHIVE</Link>
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
              <div className='login-btn'>
                <button>로그인</button>
              </div>
              <div className='create-account-btn'>
                <Link to='/signup' replace>
                  <button>회원가입</button>
                </Link>
              </div>
              <div className='btn-etc'>
                <Link to='/'>아이디 찾기</Link>
                <Link to='/'>비밀번호 찾기</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginContainer;
