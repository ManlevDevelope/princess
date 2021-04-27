import { useRouteMatch } from 'react-router';
import MainHeader from './MainHeader';
import ShopDetailHeader from './ShopDetailHeader';
import NewsfeedHeader from './NewsfeedHeader';
import NewsfeedDetailHeader from './NewfeedDetailHeader';
import MyCardNewsfeed from './MyCardNewsfeed';

const Header = () => {
  const { path } = useRouteMatch();
  switch (path) {
    case '/card-newsfeed':
      return <MyCardNewsfeed />;
    case '/newsfeed':
      return <NewsfeedHeader />;
    case '/newsfeed/:id':
      return <NewsfeedDetailHeader />;
    case '/shop/:id':
      return <ShopDetailHeader />;
    default:
      return <MainHeader />;
  }
};

export default Header;
