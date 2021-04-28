import { Link } from 'react-router-dom';

const MyCardHeader = () => {
  return (
    <div className='nav-title'>
      <div className='container'>
        <nav>
          <div className='top'>
            <div className='logo'>
              <Link to='/'>내 카드</Link>
            </div>
            <div className='btn-grp'>
              <div className='btn'>
                {/* <button>
                                    <img src="/img/icon-search.svg" alt="" />
                                </button>  */}
              </div>
              <div className='btn'>
                <Link to='/004_myCard_write.html'>
                  <img src='/img/icon-plus.svg' alt='' />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MyCardHeader;
