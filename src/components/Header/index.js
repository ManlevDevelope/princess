import {  useRouteMatch } from 'react-router';
import MainHeader from './MainHeader';
import ShopDetailHeader from './ShopDetailHeader';

const Header = () => {
  const { path } = useRouteMatch();
  switch (path) {
    case '/shop/:id':
      return <ShopDetailHeader />;
    default:
      return <MainHeader />;
  }
};

export default Header;
