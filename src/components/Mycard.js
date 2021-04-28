import Layout from '../layouts';
import TextListSlider from './Slider/TextListSlider';

const Mycard = () => {
  return (
    <Layout>
      <section>
        <div className='container'>
          <div className='profile-info'>
            <span>Gildong-Hong</span>
          </div>
          <div className='profile'>
            <div className='thumb-mycard'>
              <div className='thumb-btn'>
                <div className='thumb'>
                  <img src='/img/shop-item-2.png' alt='' />
                </div>
                <button>
                  <img src='/img/icon-camera-white.svg' alt='' />
                </button>
              </div>
            </div>
            <div className='info-grp'>
              <div className='count'>
                <dt>
                  <a href='004_myCard_newsfeed.html'>123개</a>
                </dt>
                <dd>
                  <a href='004_myCard_newsfeed.html'>보유카드수</a>
                </dd>
              </div>
              <div className='assignment'>
                <dt>
                  <a href=''>10건</a>
                </dt>
                <dd>
                  <a href=''>소유권이전</a>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='menu'>
        <TextListSlider
          list={['전체', 'A시리즈', 'B시리즈', 'C시리즈', 'D시리즈', 'E시리즈']}
        />
      </section>

      <section>
        <div className='card-grp'>
          <div className='card-item'>
            <a href='004_myCard_newsfeed.html' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-2.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-2.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-2.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
          <div className='card-item'>
            <a href='' className='thumb'>
              <img src='/img/card-1.png' alt='' />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mycard;
