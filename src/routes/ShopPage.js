import { useEffect } from 'react';
import ShopPageContainer from '../components/ShopPageContainer';
import { Container } from '../components/styled';
import Layout from '../layouts';

// 전체숍, 메인 상품더보기
const ShopPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <Layout>
      <Container>
        <div className='shop-item-wrap'>
          <ShopPageContainer />
        </div>
      </Container>
    </Layout>
  );
};

export default ShopPage;
