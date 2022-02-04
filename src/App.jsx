import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import CategorySlider from './components/CategorySlider/CategorySlider';
import CardContainer from './components/CardContainer/CardContainer';
//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Slider />
      <CategorySlider />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
