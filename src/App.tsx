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

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51RWJ9NFFeuybIhUXREt1kTRI7ck9KbS6H4HPzVK4z2g99YSRtHslBOLXd1mtUfBna3whW9aXKucUDgfv0h89RnHW00O1uobtP9'); // Replace with your real Stripe public key

function App() {
  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route
          path="/checkout/:productId"
          element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Layout>
  );
}

export default App;
