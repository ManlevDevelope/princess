import { useSelector } from 'react-redux';
import CardComponent from '../components/CardComponent';
import UserProfileComponent from '../components/UserProfileComponent';
import Layout from '../layouts';

const UserInfo = () => {
  const { Cards: item } = useSelector((state) => state.user.me);
  return (
    <Layout>
      <UserProfileComponent />
      <div className='card-grp'>
        {Array.isArray(item)
          ? item.map((itm) => (
              <CardComponent key={itm.id} imageSource={itm.Image.src} />
            ))
          : null}
      </div>
    </Layout>
  );
};

export default UserInfo;
