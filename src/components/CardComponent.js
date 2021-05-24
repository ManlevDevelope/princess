import { Link } from 'react-router-dom';
import useImageURI from './hooks/useImageURI';

// 이미지 카드

const CardComponent = ({ imageSource }) => {
  const [uri, setUri] = useImageURI(imageSource);
  return (
    <div className='card-item'>
      <Link style={{ height: '100%' }} to='/' className='thumb'>
        <img
          style={{ height: '100%', objectFit: 'cover', position: 'absolute' }}
          src={`${uri}`}
          alt=''
        />
      </Link>
    </div>
  );
};

export default CardComponent;
