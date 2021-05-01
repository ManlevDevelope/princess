import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopPageComponent from './ShopPageComponent';

const ShopPageContainer = ({ whole = false }) => {
  // 바꿔야됨
  const [items, setItems] = useState([
    {
      id: 0,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 3,
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
    {
      id: 4,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 3,
    },
    {
      id: 5,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 2,
    },
    {
      id: 6,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 4,
    },
    {
      id: 7,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 2,
    },
    {
      id: 8,
      name: '벅스봇',
      rate: 5,
      price: 48000,
      sales: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse',
      imsiURL: 3,
    },
    {
      id: 9,
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

      <div className='horizontal-item'>
        <div className='two-item'>
          {items.map((v) => (
            <ShopPageComponent key={v.id} item={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPageContainer;
