import { useRouteMatch } from 'react-router';
import MainFooter from './MainFooter';
import ShopDetailFooter from './ShopDetailFooter';

const Footer = () => {
  const { path } = useRouteMatch();
  switch (path) {
    case '/shop/:id':
      return <ShopDetailFooter />;
    case '/shop':
    default:
      return <MainFooter />;
  }
};

export default Footer;
