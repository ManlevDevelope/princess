import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SeenSaleContainer from '../components/SeenSaleContainer';
import ImageSlider from '../components/Slider/ImageSlider';
import TextListSlider from '../components/Slider/TextListSlider';
import SpecialSaleContainer from '../components/SpecialSaleContainer';
import { Container } from '../components/styled';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);
  return (
    <main>
      <TextListSlider />
      <ImageSlider />
      <Container>
        <div className='shop-item-wrap'>
          <SpecialSaleContainer />
          <SeenSaleContainer />
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
