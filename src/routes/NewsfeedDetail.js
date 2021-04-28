import CommentContainer from '../components/CommentContainer';
import NewsfeedComponent from '../components/NewsfeedComponent';
import { Container } from '../components/styled';
import Layout from '../layouts';

const NewsfeedDetail = () => {
  return (
    <Layout>
      <Container>
        <NewsfeedComponent wholeFeed={true} />
      </Container>
      <CommentContainer />
    </Layout>
  );
};

export default NewsfeedDetail;
