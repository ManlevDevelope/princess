import { Link } from 'react-router-dom';

const UserInfoHeader = () => {
  return (
    <div className='nav-title'>
      <div className='container'>
        <nav>
          <div className='top'>
            <div className='logo'>
              <Link to=''>Gildong-Hong</Link>
            </div>
            <div className='btn-grp'>
              <div className='btn'>
                <Link to=''>
                  <img src='/img/icon-plus.svg' alt='' />
                </Link>
              </div>
              <div className='btn'>
                <button className='menu'>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserInfoHeader;
