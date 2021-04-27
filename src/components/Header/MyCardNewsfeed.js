import { Link } from 'react-router-dom';

const MyCardNewsfeed = () => {
  return (
    <div class='sub-nav-title'>
      <div class='container'>
        <nav>
          <Link to='004_myCard.html' class='btn-back'>
            <img src='/img/btn-back.svg' alt='' />
          </Link>
          <div class='title'>
            <h1>내 카드 뉴스피드</h1>
          </div>
          <Link to='004_myCard_write.html' class='btn-search'>
            <img src='/img/icon-plus.svg' alt='' />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MyCardNewsfeed;
