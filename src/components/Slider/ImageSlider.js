import { Global, SlickImageContainer } from '../styled/SliderStyled';
import Slick from 'react-slick';
import { Container } from '../styled';

const ImageSlider = () => (
  <Container>
    <SlickImageContainer>
      <Global />
      <Slick
        initialSlide={0}
        infinite
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        dots={true}
        autoplay={true}
        autoplaySpeed={4000}
        cssEase={'linear'}
        pauseOnDotsHover={true}
      >
        <div className='slide-item'>
          <a href='000_shap_detail.html'>
            <img src='img/banner-1.png' alt='' />
          </a>
        </div>
        <div className='slide-item'>
          <a href='000_shap_detail.html'>
            <img src='img/banner-1.png' alt='' />
          </a>
        </div>
        <div className='slide-item'>
          <a href='000_shap_detail.html'>
            <img src='img/banner-1.png' alt='' />
          </a>
        </div>
      </Slick>
    </SlickImageContainer>
  </Container>
);

export default ImageSlider;
