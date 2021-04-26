import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <div className='nav-menu'>
      <div className='container'>
        <nav>
          <div className='menu-btn active'>
            <div className='bottom-icon active'>
              <img alt='icon-home' className='icon' src='/img/icon-home.svg' />
              <span>홈</span>
            </div>
            <Link to='/'>홈</Link>
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <img
                alt='icon-newsfeed'
                className='icon'
                src='/img/icon-newsfeed.svg'
              />
              <span>게시글</span>
            </div>
            <Link to='/'>뉴스피드</Link>
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <img alt='icon-scan' className='icon' src='/img/icon-scan.svg' />
              <span>스캔</span>
            </div>
            <Link to='/recognition'>스캔</Link>
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <img alt='icon-card' className='icon' src='/img/icon-card.svg' />
              <span>내 카드</span>
            </div>
            <Link to='/'>내카드</Link>
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <img alt='icon-my' className='icon' src='/img/icon-my.svg' />
              <span>내 정보</span>
            </div>
            <Link to='/'>프로필</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainFooter;
