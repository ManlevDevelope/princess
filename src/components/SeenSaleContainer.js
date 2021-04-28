import SeenSaleComponent from './SeenSaleComponent';

const SeenSaleContainer = () => {
  return (
    <div className='shop-item-grp'>
      <div className='title'>
        <h1>내가 본 상품과 연관된 상품</h1>
        <span>최근 내가 본 상품과 관련된 상품이에요</span>
      </div>
      <SeenSaleComponent />
    </div>
  );
};

export default SeenSaleContainer;
