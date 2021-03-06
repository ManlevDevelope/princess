import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// 뉴스피드 컴포넌트
const NewsfeedComponent = ({ data, wholeFeed = false }) => {
  const { name, viewCnt, content, like, commentCnt } = data;

  const [more, setMore] = useState(false);
  useEffect(() => {
    setMore(wholeFeed ? false : true);
  }, []);
  const onToggleMoreContent = () => {
    setMore((prevState) => !prevState);
  };
  return (
    <div style={{ marginBottom: 2 }} className='horizontal-item'>
      <div className='one-item'>
        <div className='thumb'>
          <Link to='/newsfeed/1'>
            <img src='/img/news-item-2.png' alt='' />
          </Link>
        </div>
        <div className='item-cont'>
          <div className='item-header'>
            <Link to='/newsfeed/1'>
              <span className='user-thumb'></span>
              <span className='user-name'>{name}</span>
            </Link>
            <div className='icon-grp'>
              <img className='icon-view' src='/img/icon-view.svg' alt='' />
              <span className='view'>{viewCnt}</span>
            </div>
          </div>
          <div className='item-body'>
            <p className={`${more ? 'multiple-line-ellipsis' : ''}`}>
              {content}
            </p>
            {content.length > 94 && more && (
              <button onClick={onToggleMoreContent} className='more'>
                더보기
              </button>
            )}
          </div>
          <div className='item-footer'>
            <div className='icon-grp'>
              <button className='like'>
                <img
                  className='icon-like'
                  src='/img/icon-like.svg'
                  alt='good-icon'
                />
                좋아요 <span>{like}</span>
              </button>
              <button className='comment'>
                댓글보기 &nbsp;<span>{commentCnt}</span>
              </button>
            </div>
            <div className='review-form'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsfeedComponent;
