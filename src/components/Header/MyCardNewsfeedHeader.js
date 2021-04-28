import { Link } from 'react-router-dom';

const MyCardNewsfeedHeader = () => {
  return (
    <div className='sub-nav-title'>
      <div className='container'>
        <nav>
          <Link to='/mycard' className='btn-back'>
            <img src='/img/btn-back.svg' alt='' />
          </Link>
          <div className='title'>
            <h1>내 카드 뉴스피드</h1>
          </div>
          <Link to='004_myCard_write.html' className='btn-search'>
            <img src='/img/icon-plus.svg' alt='' />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MyCardNewsfeedHeader;
