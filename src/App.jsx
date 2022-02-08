import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';

function App() {
  const [homePage, setHomePage] = useState(true);

  const handleClick = () => {
    setHomePage(!homePage);
  };

  const handleReturn = () => {
    setHomePage(true);
  };

  return (
    <div className="App">
      <Header onClick={handleReturn} />
      {homePage ? <Home onClick={handleClick} /> : <ProductList />}
      <Footer />
    </div>
  );
}

export default App;
