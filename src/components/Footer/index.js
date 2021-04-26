import { useRouteMatch } from 'react-router';
import MainFooter from './MainFooter';
import ShopDetailFooter from './ShopDetailFooter';

const Footer = () => {
  const match = useRouteMatch();
  switch (match.path) {
    case '/shop':
      return <ShopDetailFooter />;
    default:
      return <MainFooter />;
  }
};

export default Footer;
