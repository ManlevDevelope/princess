import { Global, SlickImageContainer } from '../styled/SliderStyled';
import Slick from 'react-slick';
import { Container } from '../styled';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageSlider = ({ items,dots }) => {
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
          dots={dots}
          autoplay={true}
          autoplaySpeed={4000}
          cssEase={'linear'}
          pauseOnDotsHover={true}
        >
          {items.map((Content, i) => Content)}
        </Slick>
      </SlickImageContainer>
    </Container>
  );
};

export default memo(ImageSlider);
