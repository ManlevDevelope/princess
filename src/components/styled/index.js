import styled from 'styled-components';

export const ImgStar = styled.img`
  width: 16px;
  height: 16px;
  // position: absolute;
`;

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ScanContainer = styled.div`
  height: 100vh;

  .scan-header {
    position: fixed;
    top: 0;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: 44px;
    .title {
      text-align: center;
      height: 100%;
      line-height: 44px;
      color: white;
    }
    .btn-back {
      display: block;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      img {
        height: 24px;
      }
    }
  }
  .webcam {
    z-index: 0;

    height: 100vh;
  }
  .camera-bg {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #94268f;
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
`;
