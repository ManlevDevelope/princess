import { Link } from 'react-router-dom';
import changer from '../../utils/moneyChanger';
import { ImgStar } from '../styled';

export const SingleItem = (props) => (
  <div className='one-item'>
    <ShopItem {...props} />
  </div>
);

// type: bargain, normal
const ItemHeader = (props) => {
  switch (props.type) {
    case 'seenSale':
      return (
        <div className='item-header'>
          <Link to='/shop/12'>{props.name}</Link>
          <div className='icon-grp'>
            <ImgStar className='' src='/img/icon-.star.svg' />
            <span className='review'>{props.rate}점</span>
            <button className='heart' onClick={props.onClickLike}>
              <img
                src={`/img/icon-heart${props.liked ? '-fill' : ''}.svg`}
                alt=''
              />
            </button>
          </div>
        </div>
      );
    case 'bargain':
      return (
        <div className='item-header'>
          <Link to={`/shop/${1}`}>{props.name}</Link>
          <button className='heart' onClick={props.onClickLike}>
            <img
              src={`/img/icon-heart${props.liked ? '-fill' : ''}.svg`}
              alt=''
            />
          </button>
        </div>
      );
    case 'normal':
    default:
      return (
        <>
          <div className='icon-grp'>
            <span className='review'>
              <ImgStar className='review-star' src='/img/icon-.star.svg' />
              {props.rate}점
            </span>
            <button className='heart' onClick={props.onClickLike}>
              <img
                src={`/img/icon-heart${props.liked ? '-fill' : ''}.svg`}
                alt=''
              />
            </button>
          </div>
          <div className='item-header'>
            <Link to='/shop/10'>{props.name}</Link>
          </div>
        </>
      );
  }
};

// content,
// rate,
// name,
// price,
// liked,
// onClickLike,
// type,
// src = 3,
// sale_percent = 0,
export const ShopItem = (props) => (
  <>
    <div className='thumb'>
      <Link to='/shop/10'>
        <img src={`/img/shop-item-${props.src}.png`} alt='' />
      </Link>
    </div>
    <div className='item-cont'>
      <ItemHeader {...props} />
      <div className='item-body'>
        <p>{props.content}</p>
      </div>
      <div className='item-footer'>
        {props.sale_percent > 0 ? (
          <>
            <div className='sale-price'>
              <span>{changer(props.price)}원</span>
            </div>
            <div className='price'>
              <span className='red'>{props.sale_percent}%</span>
              {changer(props.price * (100 - props.sale_percent) * 0.01)}원
            </div>
          </>
        ) : (
          <div className='price'>{changer(props.price)}원</div>
        )}
      </div>
    </div>
  </>
);
