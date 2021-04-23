import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/Slider/ImageSlider';
import TextListSlider from '../components/Slider/TextListSlider';
import { Container } from '../components/styled';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);
  return (
    <main>
      <TextListSlider />
      <section id='ad-banner'>
        <ImageSlider />
      </section>
      <Container>
        <div className='shop-item-wrap'>
          <div className='shop-item-grp'>
            <div className='title'>
              <h1>이번주 특가 상품</h1>
            </div>
            <div className='vertical-item-grp'>
              <div className='vertical-item'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='img/shop-item-2.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/'>벅스봇 1</Link>
                    <button className='heart'>
                      <img src='img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse libero
                    </p>
                  </div>
                  <div className='item-footer'>
                    <div className='sale-price'>
                      <span>480,000원</span>
                    </div>
                    <div className='price'>
                      <span className='red'>20%</span>
                      384,000원
                    </div>
                  </div>
                </div>
              </div>
              <div className='vertical-item'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='img/shop-item-3.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/'>벅스봇 2</Link>
                    <button className='heart'>
                      <img src='img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse libero
                    </p>
                  </div>
                  <div className='item-footer'>
                    <div className='sale-price'>
                      <span>480,000원</span>
                    </div>
                    <div className='price'>
                      <span className='red'>20%</span>
                      384,000원
                    </div>
                  </div>
                </div>
              </div>
              <div className='vertical-item'>
                <div className='thumb'>
                  <Link to='/'>
                    <img src='img/shop-item-2.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='item-header'>
                    <Link to='/'>벅스봇 1</Link>
                    <button className='heart'>
                      <img src='img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-body'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse libero
                    </p>
                  </div>
                  <div className='item-footer'>
                    <div className='sale-price'>
                      <span>480,000원</span>
                    </div>
                    <div className='price'>
                      <span className='red'>20%</span>
                      384,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse libero Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Esse libero
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse libero Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Esse libero
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse libero Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Esse libero
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
          <div className='shop-item-grp'>
            <div className='title'>
              <h1>전체 상품 보기</h1>
              <span>최신 상품들을 먼저 만나보세요.</span>
            </div>
            <div className='horizontal-item'>
              <div className='two-item'>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
                      </p>
                    </div>
                    <div className='item-footer'>
                      <div className='price'>384,000원</div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='thumb'>
                    <Link to='/'>
                      <img src='img/shop-item-4.png' alt='' />
                    </Link>
                  </div>
                  <div className='item-cont'>
                    <div className='icon-grp'>
                      <span className='review'>5점</span>
                      <button className='heart'>
                        <img src='img/icon-heart.svg' alt='' />
                      </button>
                    </div>
                    <div className='item-header'>
                      <Link to='/'>벅스봇 12</Link>
                    </div>
                    <div className='item-body'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse
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
      </Container>
    </main>
  );
};

export default Home;
