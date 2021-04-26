import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SeenSaleContainer from '../components/SeenSaleContainer';
import ImageSlider from '../components/Slider/ImageSlider';
import TextListSlider from '../components/Slider/TextListSlider';
import SpecialSaleContainer from '../components/SpecialSaleContainer';
import { Container } from '../components/styled';
import Layout from '../layouts';
import ShopPage from './ShopPage';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);
  return (
    <Layout>
      <TextListSlider />
      <ImageSlider
        dots={true}
        items={[
          <div className='slide-item'>
            <Link to='/'>
              <img src='/img/banner-1.png' alt='' />
            </Link>
          </div>,
          <div className='slide-item'>
            <Link to='/'>
              <img src='/img/banner-1.png' alt='' />
            </Link>
          </div>,
          <div className='slide-item'>
            <Link to='/'>
              <img src='/img/banner-1.png' alt='' />
            </Link>
          </div>,
        ]}
      />
      <Container>
        <div className='shop-item-wrap'>
          <SpecialSaleContainer />
          <SeenSaleContainer />
          <ShopPage />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
