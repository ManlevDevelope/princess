import { Link } from 'react-router-dom';
import changer from '../../utils/moneyChanger';
import { ImgStar } from '../styled';

export const SingleItem = (props) => (
  <div className='one-item'>
    <ShopItem {...props} />
  </div>
);

// type: bargain, normal
export const ShopItem = ({
  content,
  rate,
  name,
  price,
  liked,
  onClickLike,
  type,
  src = 3,
  sale_percent = 0,
}) => (
  <>
    <div className='thumb'>
      <Link to='/shop/10'>
        <img src={`/img/shop-item-${src}.png`} alt='' />
      </Link>
    </div>
    <div className='item-cont'>
      {type === 'bargain' ? (
        <div className='item-header'>
          <Link to={`/shop/${1}`}>{name}</Link>
          <button className='heart' onClick={onClickLike}>
            <img src={`/img/icon-heart${liked ? '-fill' : ''}.svg`} alt='' />
          </button>
        </div>
      ) : (
        <>
          <div className='icon-grp'>
            <ImgStar className='' src='/img/icon-.star.svg' />
            <span className='review'>{rate}점</span>
            <button className='heart' onClick={onClickLike}>
              <img src={`/img/icon-heart${liked ? '-fill' : ''}.svg`} alt='' />
            </button>
          </div>
          <div className='item-header'>
            <Link to='/shop/10'>{name}</Link>
          </div>
        </>
      )}
      <div className='item-body'>
        <p>{content}</p>
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
