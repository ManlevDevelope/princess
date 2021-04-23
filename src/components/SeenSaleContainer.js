import { Link } from 'react-router-dom';

const SeenSaleContainer = () => {
  return (
    <div className='shop-item-grp'>
      <div className='title'>
        <h1>내가 본 상품과 연관된 상품</h1>
        <span>최근 내가 본 상품과 관련된 상품이에요</span>
      </div>
      <div className='horizontal-item'>
        <div className='one-item'>
          <div className='thumb'>
            <Link to='/'>
              <img src='img/shop-item-1.png' alt='' />
            </Link>
          </div>
          <div className='item-cont'>
            <div className='item-header'>
              <Link to='/'>벅스봇 12</Link>
              <div className='icon-grp'>
                <span className='review'>5점</span>
                <button className='heart'>
                  <img src='img/icon-heart.svg' alt='' />
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

      <div className='shopping-container '>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div className='horizontal-item'>
              <div className='one-item'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='img/shop-item-5.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/'>벅스봇 12</Link>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
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
          </div>
          <div className='swiper-slide'>
            <div className='horizontal-item'>
              <div className='one-item'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='img/shop-item-5.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/'>벅스봇 12</Link>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
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
          </div>
          <div className='swiper-slide'>
            <div className='horizontal-item'>
              <div className='one-item'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='img/shop-item-5.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/'>벅스봇 12</Link>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeenSaleContainer;
