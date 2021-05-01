import {
  Global,
  SlickImageContainer,
  SlickItemContainer,
} from '../styled/SliderStyled';
import Slick from 'react-slick';
import { Container } from '../styled';
import { memo } from 'react';

const ItemSlider = ({
  items,
  dots,
  slidesToShow = 1,
  auto = true,
  responsive = [],
}) => {
  return (
    <Container style={{ color: 'white' }}>
      <SlickItemContainer>
        <Global />
        <Slick
          initialSlide={0}
          infinite
          arrows={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          dots={dots}
          autoplay={auto}
          autoplaySpeed={4000}
          cssEase={'linear'}
          pauseOnDotsHover={true}
          responsive={responsive}
        >
          {items.map((Content, i) => Content)}
        </Slick>
      </SlickItemContainer>
    </Container>
  );
};

export default memo(ItemSlider);
