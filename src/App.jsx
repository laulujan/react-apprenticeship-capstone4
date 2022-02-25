import React from 'react';
import ProductsProvider from './provider/Provider';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router />
      </ProductsProvider>
    </div>
  );
}

export default App;
