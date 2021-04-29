import { useState } from 'react';
import SpecialSalesComponent from './SpecialSalesComponent';

//특가 컨테이너
const SpecialSaleContainer = () => {
  const [cs, setCs] = useState([3, 2, 1]);

  return (
    <div className='shop-item-grp'>
      {/* 세일 컨테이너 */}
      <div className='title'>
        <h1>이번주 특가 상품</h1>
      </div>
      <div className='vertical-item-grp'>
        {cs.map((v, i) => (
          <SpecialSalesComponent key={v} />
        ))}
      </div>
    </div>
  );
};

export default SpecialSaleContainer;
