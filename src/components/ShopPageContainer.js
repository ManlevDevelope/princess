import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopPageComponent from './ShopPageComponent';

const ShopPageContainer = ({ title, whole = false }) => {
  // 바꿔야됨
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className='shop-item-grp'>
      <div className='title'>
        <div>
          <h1>판매중인 상품</h1>
        </div>
        <span>현재 판매중인 상품입니다.</span>
        {whole && (
          <span>
            <Link className='shop-item-link' to='/shop'>
              전체보기
            </Link>
          </span>
        )}
      </div>
      <ShopPageComponent />
    </div>
  );
};

export default ShopPageContainer;
