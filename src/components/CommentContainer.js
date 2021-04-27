import { Link } from 'react-router-dom';
import CommentComponent from './CommentComponent';

const CommentContainer = () => {
  return (
    <div className='container'>
      <div className='comment-apply-bg'>
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
      </div>
    </div>
  );
};

export default CommentContainer;
