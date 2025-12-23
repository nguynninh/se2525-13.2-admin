import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Orders from './pages/Orders';
import QA from './pages/QA';
import Shipping from './pages/Shipping';
import Shop from './pages/Shop';
import Settings from './pages/Settings';

const AppContent = () => {
  const location = useLocation();
  let title = 'Dashboard';
  if (location.pathname === '/products' || location.pathname === '/product') {
    title = 'Products';
  } else if (location.pathname === '/orders') {
    title = 'Orders';
  } else if (location.pathname === '/qa') {
    title = 'Q&A';
  } else if (location.pathname === '/shipping') {
    title = 'Shipping';
  } else if (location.pathname === '/shop') {
    title = 'Shop';
  } else if (location.pathname === '/settings') {
    title = 'Settings';
  }

  return (
    <div className="flex h-screen bg-content-bg overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-3 lg:p-5 min-w-0 bg-content-bg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
