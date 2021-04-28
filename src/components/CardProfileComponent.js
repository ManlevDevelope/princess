import { Link } from 'react-router-dom';

// 내카드 프로파일

const CardProfileComponent = () => {
  return (
    <>
      <div className='profile-info'>
        <span>Gildong-Hong</span>
      </div>
      <div className='profile'>
        <div className='thumb-mycard'>
          <div className='thumb-btn'>
            <div className='thumb'>
              <img src='/img/shop-item-2.png' alt='' />
            </div>
            <button>
              <img src='/img/icon-camera-white.svg' alt='' />
            </button>
          </div>
        </div>
        <div className='info-grp'>
          <div className='count'>
            <dt>
              <Link to='004_myCard_newsfeed.html'>123개</Link>
            </dt>
            <dd>
              <Link to='004_myCard_newsfeed.html'>보유카드수</Link>
            </dd>
          </div>
          <div className='assignment'>
            <dt>
              <Link to=''>10건</Link>
            </dt>
            <dd>
              <Link to=''>소유권이전</Link>
            </dd>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfileComponent;
