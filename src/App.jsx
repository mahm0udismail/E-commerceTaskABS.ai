import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import GoogleSignIn from './components/GoogleSignIn'; 

function App() {
  const user = localStorage.getItem('user'); 
  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<AllProducts />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </>
        ) : (
          <Route path="/" element={<GoogleSignIn />} />
        )}

        <Route path="/signup" element={<GoogleSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
