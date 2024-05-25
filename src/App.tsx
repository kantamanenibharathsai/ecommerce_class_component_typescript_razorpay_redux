import React from 'react';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Todo from './components/home/Home';
import EcommerceHome from './components/ecommerce-home/EcommerceHome';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<EcommerceHome />} />
        <Route path="/cart" element={<Cart />}
        />
      </Routes>
    </Router>
  );
}

export default App;
