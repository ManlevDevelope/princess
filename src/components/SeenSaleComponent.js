import { Link } from 'react-router-dom';
import ImageSlider from './Slider/ImageSlider';

const SeenSaleComponent = () => {
  return (
    <>
      <div className='horizontal-item'>
        <div className='one-item'>
          <div className='thumb'>
            <Link to='/shop/13'>
              <img src='/img/shop-item-1.png' alt='' />
            </Link>
          </div>
          <div className='item-cont'>
            <div className='item-header'>
              <Link to='/shop/12'>벅스봇 12</Link>
              <div className='icon-grp'>
                <span className='review'>5점</span>
                <button className='heart'>
                  <img src='/img/icon-heart.svg' alt='' />
                </button>
              </div>
            </div>
            <div className='item-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                libero Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse libero
              </p>
            </div>
            <div className='item-footer'>
              <div className='price'>384,000원</div>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider
        dots={false}
        items={[
          <div className='swiper-slide'>
            <div className='horizontal-item'>
              <div className='one-item'>
                <div className='thumb'>
                  <Link to='/shop/5'>
                    <img src='/img/shop-item-5.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/shop/5'>벅스봇 12</Link>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='/img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                  </div>
                  <div className='item-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse libero Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Esse libero
                    </p>
                  </div>
                  <div className='item-footer'>
                    <div className='price'>384,000원</div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          <div className='swiper-slide'>
            <div className='horizontal-item'>
              <div className='one-item'>
                <div className='thumb'>
                  <Link to='/shop/5'>
                    <img src='/img/shop-item-5.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/shop/5'>벅스봇 12</Link>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='/img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                  </div>
                  <div className='item-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse libero Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Esse libero
                    </p>
                  </div>
                  <div className='item-footer'>
                    <div className='price'>384,000원</div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          <div className='swiper-slide'>
            <div className='horizontal-item'>
              <div className='one-item'>
                <div className='thumb'>
                  <Link to='/shop/5'>
                    <img src='/img/shop-item-5.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/shop/5'>벅스봇 12</Link>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='/img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                  </div>
                  <div className='item-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse libero Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Esse libero
                    </p>
                  </div>
                  <div className='item-footer'>
                    <div className='price'>384,000원</div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
        ]}
      />
    </>
  );
};

export default SeenSaleComponent;
