import CardComponent from '../components/CardComponent';
import UserProfileComponent from '../components/UserProfileComponent';
import Layout from '../layouts';

const UserInfo = () => {
  return (
    <Layout>
      <UserProfileComponent />
      <div className='card-grp'>
        <CardComponent imageSource={'pd1'} />
        <CardComponent imageSource={'pd2'} />
        <CardComponent imageSource={'pd3'} />
        <CardComponent imageSource={'sb1'} />
        <CardComponent imageSource={'sb2'} />
        <CardComponent imageSource={'sb3'} />
        <CardComponent imageSource={'sb4'} />
        <CardComponent imageSource={'sb5'} />
        <CardComponent imageSource={'sb6'} />
      </div>
    </Layout>
  );
};

export default UserInfo;
