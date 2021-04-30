import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopItem } from './Shop/ShopItem';
import { ImgStar } from './styled';

// item으로 받아와야되는 애들 id, images, like, name, price, sales, content
const ShopPageComponent = ({ item }) => {
  const [liked, setLiked] = useState(false);

  const onClickLike = useCallback(
    (id) => () => {
      setLiked((prev) => !prev);
      // dispatch('LIKE_REQUEST',id);
    },
    [item.id]
  );
  const { name, rate, price, sales, content, imsiURL } = item;

  return (
    <div className='item'>
      <ShopItem
        content={content}
        rate={rate}
        name={name}
        price={price}
        liked={liked}
        onClickLike={onClickLike(item.id)}
        type='normal'
        src={imsiURL}
        sale_percent={sales}
      />
    </div>
  );
};

export default ShopPageComponent;
