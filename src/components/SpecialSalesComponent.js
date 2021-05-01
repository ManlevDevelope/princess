import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import changer from '../utils/moneyChanger';
import { BargainItem, ShopItem, SingleItem } from './Shop/ShopItem';
// 특가 컴포넌트

const SpecialSalesComponent = ({ item }) => {
  // 나중에 리덕스로 빼야됨, like unlike액션 둘다
  const [liked, setLiked] = useState(false);
  const onClickLike = useCallback(
    (id) => () => {
      setLiked((prev) => !prev);
      // dispatch('LIKE_REQUEST',id);
    },
    [item.id]
  );
  const { name, price, sales, content, imsiURL } = item;

  return (
    <div className='vertical-item'>
      <ShopItem
        onClickLike={onClickLike(item.id)}
        content={content}
        name={name}
        price={price}
        sale_percent={sales}
        liked={liked}
        src={imsiURL}
        type='bargain'
      />
    </div>
  );
};

export default SpecialSalesComponent;
