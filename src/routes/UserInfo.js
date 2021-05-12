import CardComponent from '../components/CardComponent';
import UserProfileComponent from '../components/UserProfileComponent';
import Layout from '../layouts';

const UserInfo = () => {
  return (
    <Layout>
      <UserProfileComponent />
      <div className='card-grp'>
        <CardComponent imageSource={'pd1.jpg'} />
        <CardComponent imageSource={'pd2.jpg'} />
        <CardComponent imageSource={'pd3.jpg'} />
        <CardComponent imageSource={'sb1.jpg'} />
        <CardComponent imageSource={'sb2.jpg'} />
        <CardComponent imageSource={'sb3.jpg'} />
        <CardComponent imageSource={'sb4.jpg'} />
        <CardComponent imageSource={'sb5.jpg'} />
        <CardComponent imageSource={'sb6.jpg'} />
      </div>
    </Layout>
  );
};

export default UserInfo;
