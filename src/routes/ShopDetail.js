import { useEffect } from 'react';
import { Link, useParams, useRouteMatch, withRouter } from 'react-router-dom';
import ImageSlider from '../components/Slider/ImageSlider';
import Layout from '../layouts';
// 헤로쿠 고
const ShopDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Layout>
      <section id='ad-banner'>
        <ImageSlider
          dots={true}
          items={[
            <div key={1} className='slide-item'>
              <Link to='/'>
                <img src='/img/banner-1.png' alt='' />
              </Link>
            </div>,
            <div key={2} className='slide-item'>
              <Link to='/'>
                <img src='/img/banner-1.png' alt='' />
              </Link>
            </div>,
            <div key={3} className='slide-item'>
              <Link to='/'>
                <img src='/img/banner-1.png' alt='' />
              </Link>
            </div>,
          ]}
        />
        <div className='container'>
          <div className='product-detail-grp'>
            <div className='product-header'>
              <div className='product-btn-grp'>
                <button>
                  <img src='/img/icon-heart.svg' alt='' />
                </button>
                <button>
                  <img src='/img/icon-share.svg' alt='' />
                </button>
              </div>
              <div className='title'>벅스봇 이그니션 1</div>
              <div className='category'>
                <span>카테고리{'>'}</span>
                <span>카테고리{'>'}</span>
                <span>카테고리{'>'}</span>
              </div>
              <div className='product-info'>
                <div className='info-code'>
                  <div className='title'>관리코드</div>
                  <div className='cont'>123123123123</div>
                </div>
                <div className='info-code'>
                  <div className='title'>상품아이디</div>
                  <div className='cont'>ASDF1234</div>
                </div>
              </div>
              <div className='product-price'>
                <span>380,000원</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='product-detail'>
            <img src='/img/shop-detail-1.png' alt='' />
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='inquery-btn'>
            <Link to=''>문의하기</Link>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='product-review'>
            <div className='review-count'>
              <h1>243개</h1>
            </div>
            <div className='star-grp'>
              <div className='star'>
                <span>
                  <img src='/img/icon-.star.svg' alt='' />
                </span>
                <span>
                  <img src='/img/icon-.star.svg' alt='' />
                </span>
                <span>
                  <img src='/img/icon-.star.svg' alt='' />
                </span>
                <span>
                  <img src='/img/icon-.star.svg' alt='' />
                </span>
                <span>
                  <img src='/img/icon-.star.svg' alt='' />
                </span>
              </div>
              <div className='star-score'>
                <span>
                  <strong>4</strong>
                </span>
                <span>/</span>
                <span>5</span>
              </div>
            </div>
            <div className='review-btn'>
              <Link to='000_shop_reviewWrite.html'>리뷰를 남겨주세요.</Link>
            </div>
          </div>
          <div className='review-comment'>
            <div className='comment'>
              <div className='comment-header'>
                <div className='user'>
                  <div className='thumb-user'>
                    <div className='thumb'>
                      <img src='/img/news-item-1.png' alt='' />
                    </div>
                  </div>
                  <div className='user-name'>1233123213</div>
                </div>
                <div className='star-grp'>
                  <div className='star'>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                  </div>
                  <div className='star-score'>
                    <span>
                      <strong>4</strong>
                    </span>
                    <span>/</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div className='comment-body'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore vero quo, at voluptates quibusdam modi ipsum totam
                  ratione obcaecati quasi sint repudiand
                </p>
              </div>
              <div className='comment-footer'>
                <button>좋아요 123개</button>
              </div>
            </div>
            <div className='comment'>
              <div className='comment-header'>
                <div className='user'>
                  <div className='thumb-user'>
                    <div className='thumb'>
                      <img src='/img/news-item-1.png' alt='' />
                    </div>
                  </div>
                  <div className='user-name'>1233123213</div>
                </div>
                <div className='star-grp'>
                  <div className='star'>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                    <span>
                      <img src='/img/icon-.star.svg' alt='' />
                    </span>
                  </div>
                  <div className='star-score'>
                    <span>
                      <strong>4</strong>
                    </span>
                    <span>/</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div className='comment-body'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className='comment-footer'>
                <button>좋아요 123개</button>
              </div>
            </div>
            <div className='comment-more'>
              <Link to='000_shop_review.html'>리뷰 전체 보기</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='shop-item-wrap'>
            <div className='shop-item-grp'>
              <div className='title'>
                <h1>이런 상품 어때요?</h1>
              </div>
              <div className='horizontal-item'>
                <div className='two-item'>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
                        </p>
                      </div>
                      <div className='item-footer'>
                        <div className='price'>384,000원</div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='thumb'>
                      <Link to=''>
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
                        <Link to=''>벅스봇 12</Link>
                      </div>
                      <div className='item-body'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse
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
      </section>
    </Layout>
  );
};

export default withRouter(ShopDetail);
