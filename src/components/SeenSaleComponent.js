import { useCallback, useState } from 'react';
import { SingleItem } from './Shop/ShopItem';

// 연관상품 컴포넌트
const SeenSaleComponent = ({ item }) => {
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
    <SingleItem
      content={content}
      rate={5}
      name={name}
      price={price}
      liked={liked}
      onClickLike={onClickLike(item.id)}
      type='seenSale'
      src={imsiURL}
      sale_percent={sales}
    />
  );
};

export default SeenSaleComponent;
