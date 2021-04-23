import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({ childComponent: Component }) => {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};

export default AppLayout;
