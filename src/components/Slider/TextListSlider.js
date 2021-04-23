import { Global, SlickTextContainer } from '../styled/SliderStyled';
import Slick from 'react-slick';
import { useCallback, useState } from 'react';
import { Container } from '../styled';

const TextListSlider = () => {
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
          <div
            onClick={onClickMenu(0)}
            className={`slide-item ${choice === 0 ? 'active' : ''}`}
          >
            <button>전체</button>
          </div>
          <div
            onClick={onClickMenu(1)}
            className={`slide-item ${choice === 1 ? 'active' : ''}`}
          >
            <button>A 시리즈</button>
          </div>
          <div
            onClick={onClickMenu(2)}
            className={`slide-item ${choice === 2 ? 'active' : ''}`}
          >
            <button>B 시리즈</button>
          </div>
          <div
            onClick={onClickMenu(3)}
            className={`slide-item ${choice === 3 ? 'active' : ''}`}
          >
            <button>C 시리즈</button>
          </div>
          <div
            onClick={onClickMenu(4)}
            className={`slide-item ${choice === 4 ? 'active' : ''}`}
          >
            <button>D 시리즈</button>
          </div>
          <div
            onClick={onClickMenu(5)}
            className={`slide-item ${choice === 5 ? 'active' : ''}`}
          >
            <button>E 시리즈</button>
          </div>
        </Slick>
      </SlickTextContainer>
    </Container>
  );
};

export default TextListSlider;
