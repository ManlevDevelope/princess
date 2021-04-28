import { Link } from 'react-router-dom';
import Layout from '../layouts';
import CardComponent from '../components/CardComponent';
import CardProfileComponent from '../components/CardProfileComponent';
import TextListSlider from '../components/Slider/TextListSlider';

const Mycard = () => {
  return (
    <Layout>
      <div className='container'>
        <CardProfileComponent />
      </div>
      <TextListSlider
        list={['전체', 'A시리즈', 'B시리즈', 'C시리즈', 'D시리즈', 'E시리즈']}
      />
      <div className='card-grp'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </Layout>
  );
};

export default Mycard;
