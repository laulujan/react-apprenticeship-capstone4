import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
