import CommentComponent from './CommentComponent';

// 코멘트 컴포넌트

const CommentContainer = ({ data }) => {
  //id, newsfeed_id, bundle_id, bundle_order, thumb, name, reply
  
  return (
    <div className='container'>
      <div className='comment-apply-bg'>
        {data.map((comment) => (
          <CommentComponent data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
