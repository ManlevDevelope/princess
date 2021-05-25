import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useImageURI from './hooks/useImageURI';

// 이미지 카드

const CardComponent = ({ imageSource, onModalOpen }) => {
  const [uri, setUri] = useImageURI(imageSource);
  return (
    <div onClick={onModalOpen} className='card-item'>
      <div style={{ height: '100%' }} to='/' className='thumb'>
        <img
          style={{ height: '100%', objectFit: 'cover', position: 'absolute' }}
          src={`${uri}`}
          alt=''
        />
      </div>
    </div>
  );
};

export default CardComponent;
