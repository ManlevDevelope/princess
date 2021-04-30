import { useState } from 'react';
import SeenSaleComponent from './SeenSaleComponent';

// 연관상품 컨테이너

const SeenSaleContainer = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: '벅스봇 12',
      rate: 5,
      price: 48000,
      sales: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esselibero Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse libero',
      imsiURL: 1,
    },
    {
      id: 1,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 2,
    },
    {
      id: 2,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 3,
    },
    {
      id: 3,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 4,
    },
  ]);
  return (
    <div className='shop-item-grp'>
      <div className='title'>
        <h1>내가 본 상품과 연관된 상품</h1>
        <span>최근 내가 본 상품과 관련된 상품이에요</span>
      </div>
      <SeenSaleComponent item={items} />
    </div>
  );
};

export default SeenSaleContainer;
