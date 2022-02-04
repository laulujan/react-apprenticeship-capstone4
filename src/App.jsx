import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
