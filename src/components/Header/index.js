import { useRouteMatch } from 'react-router';
import MainHeader from './MainHeader';
import ShopDetailHeader from './ShopDetailHeader';

const Header = () => {
  const match = useRouteMatch();
  switch (match.path) {
    case '/shop-details':
      return <ShopDetailHeader />;
    default:
      return <MainHeader />;
  }
};

export default Header;
