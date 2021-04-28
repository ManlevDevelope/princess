import { Global, SlickTextContainer } from '../styled/SliderStyled';
import Slick from 'react-slick';
import { useCallback, useState } from 'react';
import { Container } from '../styled';

const TextListSlider = ({ list = [] }) => {
  const [choice, setChoice] = useState(0);
  const onClickMenu = useCallback(
    (c) => () => {
      setChoice(c);
    },
    []
  );
  return (
    <Container>
      <SlickTextContainer>
        <Global />
        <Slick
          initialSlide={0}
          infinite={false}
          arrows={false}
          dots={false}
          slidesToShow={4}
          slidesToScroll={4}
        >
          {list.map((value, i) => (
            <div
              key={i}
              onClick={onClickMenu(i)}
              className={`slide-item ${choice === i ? 'active' : ''}`}
            >
              <button>{value}</button>
            </div>
          ))}
        </Slick>
      </SlickTextContainer>
    </Container>
  );
};

export default TextListSlider;
