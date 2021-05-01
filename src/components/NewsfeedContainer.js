import CommentContainer from './CommentContainer';
import NewsfeedComponent from './NewsfeedComponent';
import { Container } from './styled';
import Layout from '../layouts';

const NewsfeedContainer = () => {
  return (
    <>
      <Container>
        <NewsfeedComponent wholeFeed={true} />
      </Container>
      <CommentContainer />
    </>
  );
};

export default NewsfeedContainer;
