import CardComponent from '../components/CardComponent';
import UserProfileComponent from '../components/UserProfileComponent';
import Layout from '../layouts';

const UserInfo = () => {
  return (
    <Layout>
      <UserProfileComponent />
      <div className='card-grp'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </Layout>
  );
};

export default UserInfo;
