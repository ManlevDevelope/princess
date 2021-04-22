import Header from '../components/Header';
import Footer from '../components/Footer';
const AppLayout = ({ childComponent }) => {
  console.log(childComponent);
  return (
    <>
      <Header />
      {childComponent}
      <Footer />
    </>
  );
};

export default AppLayout;
