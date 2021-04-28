import { Link } from 'react-router-dom';

// 코멘트 컴포넌트

const CommentComponent = () => {
  return (
    <div className='comment-apply'>
      <div className='thumbnail'>
        <div className='thumb'>
          <Link to=''>
            <img src='/img/news-item-2.png' alt='' />
          </Link>
        </div>
      </div>
      <div className='apply-cont'>
        <div className='apply-header'>
          <Link to=''>sangschicom</Link>
        </div>
        <div className='apply-body'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, odit
            perspiciatis est atque pariatur accusantium esse dolorem omnis
            tenetur quo quibusdam veritatis adipisci error,
          </p>
        </div>
        <div className='apply-footer'>
          <button>댓글달기</button>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
