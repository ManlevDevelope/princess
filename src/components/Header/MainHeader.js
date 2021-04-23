import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <div className='nav-title'>
        <div className='container'>
          <nav>
            <div className='top'>
              <div className='logo'>
                <Link to='/'>POCKETHIVE</Link>
              </div>
              <div className='btn-grp'>
                <div className='btn'></div>
                <div className='btn'>
                  <Link to='/'>
                    <img src='img/icon-bascket.svg' alt='' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='search-bar'>
              <input type='text' placeholder='POCKETHIVE 검색' />
              <img src='img/icon-search.svg' alt='' />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
