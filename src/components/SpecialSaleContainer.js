import { useState } from 'react';
import SpecialSalesComponent from './SpecialSalesComponent';

//특가 컨테이너
const SpecialSaleContainer = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: '벅스봇1',
      liked: false,
      price: 48000,
      sales: 15,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero',
      imsiURL: 3,
    },
    {
      id: 1,
      name: '벅스봇2',
      liked: false,
      price: 48000,
      sales: 20,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero',
      imsiURL: 2,
    },
    {
      id: 2,
      name: '벅스봇3',
      liked: false,
      price: 70000,
      sales: 10,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero',
      imsiURL: 5,
    },
  ]);
  return (
    <div className='shop-item-grp'>
      {/* 세일 컨테이너 */}
      <div className='title'>
        <h1>이번주 특가 상품</h1>
      </div>
      <div className='vertical-item-grp'>
        {items.map((v, i) => (
          <SpecialSalesComponent key={v.id} item={v} />
        ))}
      </div>
    </div>
  );
};

export default SpecialSaleContainer;
