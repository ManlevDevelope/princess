import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SpecialSalesComponent = () => {
  const [cs, setCs] = useState([3, 2, 1]);
  const [item, setItem] = useState();
  const [content, setContent] = useState();
  const [itemNumber, setItemNumber] = useState([1, 2, 3]);

  return (
    <div className='vertical-item-grp'>
      {cs.map((v, i) => (
        <div key={i} className='vertical-item'>
          <div className='thumb'>
            <Link to={`/shop/${itemNumber[i]}`}>
              <img src={`img/shop-item-${v}.png`} alt='' />
            </Link>
          </div>
          <div className='item-cont'>
            <div className='item-header'>
              <Link to={`/shop/${itemNumber[i]}`}>벅스봇 1</Link>
              <button className='heart'>
                <img src='/img/icon-heart.svg' alt='' />
              </button>
            </div>
            <div className='item-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                libero
              </p>
            </div>
            <div className='item-footer'>
              <div className='sale-price'>
                <span>480,000원</span>
              </div>
              <div className='price'>
                <span className='red'>20%</span>
                384,000원
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialSalesComponent;
