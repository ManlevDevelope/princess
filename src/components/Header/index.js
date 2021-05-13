import { useRouteMatch } from 'react-router';
import MainHeader from './MainHeader';
import ShopDetailHeader from './ShopDetailHeader';
import NewsfeedHeader from './NewsfeedHeader';
import NewsfeedDetailHeader from './NewfeedDetailHeader';
import MyCardHeader from './MyCardHeader';
import MyCardNewsfeedHeader from './MyCardNewsfeedHeader';
import UserInfoHeader from './UserInfoHeader';
import RegistHeader from './RegistHeader';
const Header = () => {
  const { path } = useRouteMatch();
  switch (path) {
    case '/regist':
      return <RegistHeader />;
    case '/mycard':
      return <MyCardHeader />;
    case '/card-newsfeed':
      return <MyCardNewsfeedHeader />;
    case '/newsfeed':
      return <NewsfeedHeader />;
    case '/newsfeed/:id':
      return <NewsfeedDetailHeader />;
    case '/shop/:id':
      return <ShopDetailHeader />;
    case '/info':
      return <UserInfoHeader />;
    default:
      return <MainHeader />;
  }
};

export default Header;
