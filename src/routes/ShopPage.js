import { Link } from 'react-router-dom';
import { Container } from '../components/styled';

const ShopPage = ({ whole = false }) => {
  return (
    <Container>
      <div className='shop-item-wrap'>
        <div className='shop-item-grp'>
          <div className='title'>
            <div>
              <h1>판매중인 상품</h1>
            </div>
            <span>현재 판매중인 상품입니다.</span>
            {whole && (
              <span>
                <Link className='shop-item-link' to='/shop'>
                  전체보기
                </Link>
              </span>
            )}
          </div>
          <div className='horizontal-item'>
            <div className='two-item'>
              <div className='item'>
                <div className='thumb'>
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
                  <Link to='/shop/10'>
                    <img src='/img/shop-item-4.png' alt='' />
                  </Link>
                </div>
                <div className='item-cont'>
                  <div className='icon-grp'>
                    <span className='review'>5점</span>
                    <button className='heart'>
                      <img src='/img/icon-heart.svg' alt='' />
                    </button>
                  </div>
                  <div className='item-header'>
                    <Link to='/shop/10'>벅스봇 12</Link>
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
  );
};

export default ShopPage;
