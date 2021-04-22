import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='nav-menu'>
      <div className='container'>
        <nav>
          <div className='menu-btn active'>
            <div className='bottom-icon active'>
              <object
                type='image/svg+xml'
                data='img/icon-home.svg'
                className='icon'
              ></object>
              <span>홈</span>
            </div>
            <Link to='/'>홈</Link>
            {/* <a href='000_index.html'>홈</a> */}
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <object
                type='image/svg+xml'
                data='img/icon-newsfeed.svg'
                className='icon'
              ></object>
              <span>게시글</span>
            </div>
            <Link to='/'>뉴스피드</Link>
            {/* <a href='002_newsfeed.html'>뉴스피드</a> */}
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <object
                type='image/svg+xml'
                data='img/icon-scan.svg'
                className='icon'
              ></object>
              <span>스캔</span>
            </div>
            <Link href='/recognition'>스캔</Link>
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <object
                type='image/svg+xml'
                data='img/icon-card.svg'
                className='icon'
              ></object>
              <span>내 카드</span>
            </div>
            <Link to='/'>내카드</Link>
            {/* <a href='004_myCard.html'>내카드</a> */}
          </div>
          <div className='menu-btn'>
            <div className='bottom-icon'>
              <object
                type='image/svg+xml'
                data='img/icon-my.svg'
                className='icon'
              ></object>
              <span>내 정보</span>
            </div>
            <Link to='/'>프로필</Link>
            {/* <a href='005_myInfo.html'>프로필</a> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
