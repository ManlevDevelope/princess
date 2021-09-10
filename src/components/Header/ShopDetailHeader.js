import { useEffect } from 'react';
// eslint-disable-next-line
import { Link, useHistory } from 'react-router-dom';

const ShopDetailHeader = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const goback = () => history.goBack();
  return (
    <header>
      <div className='sub-nav-title'>
        <div className='container'>
          <nav>
            <button onClick={goback} className='btn-back'>
              <img src='/img/btn-back.svg' alt='' />
            </button>
            <div className='title'>
              <h1>제품상세</h1>
            </div>
            <button className='btn-search'>
              <img src='/img/icon-search-black.svg' alt='' />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ShopDetailHeader;
