import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Webinar from './pages/Webinar';
import Ebook from './pages/Ebook';
import Mentorship from './pages/Mentorship';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/checkout/:productId" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Layout>
  );
}

export default App;