import { Link } from 'react-router-dom';

const RegistHeader = () => {
  return (
    <div class='sub-nav-title'>
      <div class='container'>
        <nav>
          <Link to='/recognition' class='btn-back'>
            <img src='img/btn-back.svg' alt='' />
          </Link>
          <div class='title'>
            <h1>카드스캔</h1>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default RegistHeader;
