import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import CustomNavbar from './components/CustomNavbar';
import GoogleSignIn from './components/GoogleSignIn'; // Import the Google sign-in component

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/signup" element={<GoogleSignIn />} /> {/* Add route for Google sign-up */}
      </Routes>
    </Router>
  );
}

export default App;
