import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { SingleItem } from './Shop/ShopItem';
import ImageSlider from './Slider/ImageSlider';
import { ImgStar } from './styled';

// 연관상품 컴포넌트

const SeenSaleComponent = ({ item }) => {
  // 나중에 리덕스로 빼야됨, like unlike액션 둘다
  const [liked, setLiked] = useState(false);
  const onClickLike = useCallback(
    (id) => () => {
      setLiked((prev) => !prev);
      // dispatch('LIKE_REQUEST',id);
    },
    [item.id]
  );
  const { name, price, sales, content, imsiURL } = item[0];
  return (
    <>
      <div className='horizontal-item'>
        <SingleItem
          content={content}
          rate={5}
          name={name}
          price={price}
          liked={liked}
          onClickLike={onClickLike(item[0].id)}
          type='SeenSale'
          src={imsiURL}
          sale_percent={sales}
        />
      </div>
      <div style={{ marginTop: 32 }}>
        <ImageSlider
          dots={true}
          items={[
            <div key={1} className='swiper-slide'>
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
            <div key={2} className='swiper-slide'>
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
            <div key={3} className='swiper-slide'>
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
      </div>
    </>
  );
};

export default SeenSaleComponent;
