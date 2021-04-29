import { Link } from 'react-router-dom';
import changer from '../../utils/moneyChanger';
import { ImgStar } from '../styled';

export const SingleItem = (props) => (
  <div className='one-item'>
    <ShopItem {...props} />
  </div>
);
export const DualItem = (props) => (
  <div className='two-item'>
    {props.data.map((Child, i) => (
      <div key={i} className='item'>
        <ShopItem {...props} />
      </div>
    ))}
  </div>
);

const ShopItem = ({ rate, itm_name, price, sale_percent = 0 }) => (
  <>
    <div className='thumb'>
      <Link to='/shop/10'>
        <img src='/img/shop-item-4.png' alt='' />
      </Link>
    </div>
    <div className='item-cont'>
      <div className='icon-grp'>
        <ImgStar className='' src='/img/icon-.star.svg' />
        <span className='review'>{rate}점</span>
        <button className='heart'>
          <img src='/img/icon-heart.svg' alt='' />
        </button>
      </div>
      <div className='item-header'>
        <Link to='/shop/10'>{itm_name}</Link>
      </div>
      <div className='item-body'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse</p>
      </div>
      <div className='item-footer'>
        {sale_percent > 0 ? (
          <>
            <div className='sale-price'>
              <span>{changer(price)}원</span>
            </div>
            <div className='price'>
              <span className='red'>{sale_percent}%</span>
              {changer(price * (100 - sale_percent) * 0.01)}원
            </div>
          </>
        ) : (
          <div className='price'>{changer(price)}원</div>
        )}
      </div>
    </div>
  </>
);
