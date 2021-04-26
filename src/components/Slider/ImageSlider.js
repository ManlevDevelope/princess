import { Global, SlickImageContainer } from '../styled/SliderStyled';
import Slick from 'react-slick';
import { Container } from '../styled';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageSlider = () => {
  const [cs, setCs] = useState([1, 2, 3]);
  return (
    <Container style={{ color: 'white' }}>
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
          {cs.map((v, i) => (
            <div key={i} className='slide-item'>
              <Link to='/'>
                <img src='img/banner-1.png' alt='' />
              </Link>
            </div>
          ))}
        </Slick>
      </SlickImageContainer>
    </Container>
  );
};

export default memo(ImageSlider);
