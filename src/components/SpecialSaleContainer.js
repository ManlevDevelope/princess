import SpecialSalesComponent from './SpecialSalesComponent';

const SpecialSaleContainer = () => {
  return (
    <div className='shop-item-grp'>
      {/* 세일 컨테이너 */}
      <div className='title'>
        <h1>이번주 특가 상품</h1>
      </div>
      <SpecialSalesComponent />
    </div>
  );
};

export default SpecialSaleContainer;
