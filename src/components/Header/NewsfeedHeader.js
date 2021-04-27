import { Link } from 'react-router-dom';

const NewsfeedHeader = () => {
  // footer는 메인
  return (
    <div className='nav-title'>
      <div className='container'>
        <nav>
          <div className='top'>
            <div className='logo'>
              <Link to=''>게시글</Link>
            </div>
            <div className='btn-grp'>
              <div className='btn'>
                <button>
                  <img src='/img/icon-search-black.svg' alt='' />
                </button>
              </div>
              <div className='btn'>
                <Link to='002_newsfeed_write.html'>
                  <img src='/img/icon-write.svg' alt='' />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className='search-bar'>
            <input type='text' placeholder='POCKETHIVE 검색' />
            <img src='/img/icon-search.svg' alt='' />
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default NewsfeedHeader;
