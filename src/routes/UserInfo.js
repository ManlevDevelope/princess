import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UPLOAD_REFRESH } from '../Actions';
import CardComponent from '../components/CardComponent';
import UserProfileComponent from '../components/UserProfileComponent';
import Layout from '../layouts';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { uploadItemDone } = useSelector((state) => state.item);
  const { Cards: item } = useSelector((state) => state.user.me);
  useEffect(() => {
    if (uploadItemDone) dispatch({ type: UPLOAD_REFRESH });
  }, [uploadItemDone]);
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
