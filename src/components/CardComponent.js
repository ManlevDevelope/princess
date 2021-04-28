import { Link } from 'react-router-dom';

// 이미지 카드

const CardComponent = () => {
  return (
    <div className='card-item'>
      <Link to='004_myCard_newsfeed.html' className='thumb'>
        <img src='/img/card-1.png' alt='' />
      </Link>
    </div>
  );
};

export default CardComponent;
