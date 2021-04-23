import { Link } from 'react-router-dom';

const ShopDetailHeader = () => {
  return (
    <header>
      <div className='sub-nav-title'>
        <div className='container'>
          <nav>
            <Link to='000_index.html' className='btn-back'>
              <img src='img/btn-back.svg' alt='' />
            </Link>
            <div className='title'>
              <h1>제품상세</h1>
            </div>
            <button className='btn-search'>
              <img src='img/icon-search-black.svg' alt='' />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ShopDetailHeader;
