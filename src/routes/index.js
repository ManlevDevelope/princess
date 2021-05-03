import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SeenSaleContainer from '../components/SeenSaleContainer';
import ImageSlider from '../components/Slider/ImageSlider';
import TextListSlider from '../components/Slider/TextListSlider';
import SpecialSaleContainer from '../components/SpecialSaleContainer';
import { Container } from '../components/styled';
import Layout from '../layouts';
import ShopPage from '../components/ShopPageContainer';

const Home = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: 'INIT' });
  // }, []);
  return (
    <Layout>
      <TextListSlider
        list={['전체', 'A시리즈', 'B시리즈', 'C시리즈', 'D시리즈', 'E시리즈']}
      />
      <ImageSlider
        dots={true}
        items={[
          <div key={1} className='slide-item'>
            <Link to='/'>
              <img src='/img/banner-1.png' alt='' />
            </Link>
          </div>,
          <div key={2} className='slide-item'>
            <Link to='/'>
              <img src='/img/banner-1.png' alt='' />
            </Link>
          </div>,
          <div key={3} className='slide-item'>
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
          <ShopPage whole={true} />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
