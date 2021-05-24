import { Link } from 'react-router-dom';

// 이미지 카드

const CardComponent = ({ imageSource }) => {
  return (
    <div className='card-item'>
      <Link
        style={{ height: '100%' }}
        to='004_myCard_newsfeed.html'
        className='thumb'
      >
        <img
          style={{ height: '100%', objectFit: 'cover', position: 'absolute' }}
          src={`http://localhost:3080/${imageSource}`}
          alt=''
        />
      </Link>
    </div>
  );
};

export default CardComponent;
