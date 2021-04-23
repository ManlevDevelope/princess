import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
.slick-slide {
  display: inline-block;
}
.slider-container {
  width: 100%;
  overflow: hidden;
}
`;

export const SlickImageContainer = styled.div`
  overflow: hidden;
  & .slide-item {
    text-align: center;
  }
  & img {
    width: 100%;
    margin: 0 auto;
  }
  & .slick-slider {
    position: relative;
  }
  & .slick-dots {
    display: flex !important;
    position: absolute;
    bottom: 10px;
    margin-left: 16px;
    li {
      margin: 0 4px;
      a {
        margin-bottom: -10px;
      }
    }
  }
`;

export const SlickTextContainer = styled.div`
  margin-top: 1px;
  background: white;
  overflow: hidden;
  & .slide-item {
    text-align: center;
  }

  & button {
    font-size: 12px;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    color: #cdcdcd;
  }
  & button:hover {
    cursor: pointer;
  }

  & .slide-item.active {
    border-bottom: 2px solid #1d1d1f;
    font-color: #1d1d1f;
    & button {
      color: #1d1d1f;
      font-weight: 700;
    }
  }
`;
