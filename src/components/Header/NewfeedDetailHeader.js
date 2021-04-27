import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NewsfeedDetailHeader = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const goback = () => {
    history.goBack();
  };
  return (
    <div className='sub-nav-title'>
      <div className='container'>
        <nav>
          <button onClick={goback} className='btn-back'>
            <img src='/img/btn-back.svg' alt='' />
          </button>
          <div className='title'>
            <h1>게시글 상세</h1>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NewsfeedDetailHeader;
