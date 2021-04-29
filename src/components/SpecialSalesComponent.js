import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import changer from '../utils/moneyChanger';
// 특가 컴포넌트

const SpecialSalesComponent = () => {
  const [liked, setLiked] = useState(false);
  const [price, setPrice] = useState(480000);
  const [sales, setSales] = useState(20);
  const [content, setContent] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero'
  );
  const [imsiURL, setImsiURL] = useState(1);

  const onClickLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, [liked]);
  return (
    <div className='vertical-item'>
      <div className='thumb'>
        <Link to={`/shop/${imsiURL}`}>
          <img src={`img/shop-item-1.png`} alt='' />
        </Link>
      </div>
      <div className='item-cont'>
        <div className='item-header'>
          <Link to={`/shop/${imsiURL}`}>벅스봇 1</Link>
          <button className='heart' onClick={onClickLike}>
            <img src={`/img/icon-heart${liked ? '-fill' : ''}.svg`} alt='' />
          </button>
        </div>
        <div className='item-body'>
          <p>{content}</p>
        </div>
        <div className='item-footer'>
          <div className='sale-price'>
            <span>{changer(price)}원</span>
          </div>
          <div className='price'>
            <span className='red'>{sales}%</span>
            {changer(price * (100 - sales) * 0.01)}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSalesComponent;
