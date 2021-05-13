import { Link } from 'react-router-dom';

const RegistHeader = () => {
  return (
    <div className='sub-nav-title'>
      <div className='container'>
        <nav>
          <Link to='/recognition' className='btn-back'>
            <img src='img/btn-back.svg' alt='' />
          </Link>
          <div className='title'>
            <h1>카드스캔</h1>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default RegistHeader;
