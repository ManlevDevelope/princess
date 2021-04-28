import CommentComponent from './CommentComponent';

// 코멘트 컴포넌트

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
