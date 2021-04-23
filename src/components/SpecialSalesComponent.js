import { Link } from 'react-router-dom';

const SpecialSalesComponent = () => {
  return (
    <div className='vertical-item-grp'>
      <div className='vertical-item'>
        <div className='thumb'>
          <Link to='/'>
            <img src='img/shop-item-2.png' alt='' />
          </Link>
        </div>
        <div className='item-cont'>
          <div className='item-header'>
            <Link to='/'>벅스봇 1</Link>
            <button className='heart'>
              <img src='img/icon-heart.svg' alt='' />
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
      <div className='vertical-item'>
        <div className='thumb'>
          <Link to='/'>
            <img src='img/shop-item-3.png' alt='' />
          </Link>
        </div>
        <div className='item-cont'>
          <div className='item-header'>
            <Link to='/'>벅스봇 2</Link>
            <button className='heart'>
              <img src='img/icon-heart.svg' alt='' />
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
      <div className='vertical-item'>
        <div className='thumb'>
          <Link to='/'>
            <img src='img/shop-item-2.png' alt='' />
          </Link>
        </div>
        <div className='item-cont'>
          <div className='item-header'>
            <Link to='/'>벅스봇 1</Link>
            <button className='heart'>
              <img src='img/icon-heart.svg' alt='' />
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
    </div>
  );
};

export default SpecialSalesComponent;
