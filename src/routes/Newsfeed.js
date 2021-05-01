import NewsfeedComponent from '../components/NewsfeedComponent';
import NewsfeedContainer from '../components/NewsfeedContainer';
import Layout from '../layouts';

const Newsfeed = () => {
  const data = {
    name: 'Lorem',
    viewCnt: 200,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esselibero Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse libero',
    like: 200,
    commentCnt: 200,
  };

  return (
    <Layout>
      <NewsfeedComponent data={data} />
      <NewsfeedComponent data={data} />
      <NewsfeedComponent data={data} />
      <NewsfeedComponent data={data} />
    </Layout>
  );
};

export default Newsfeed;
