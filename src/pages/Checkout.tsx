import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useStripe,
  useElements,
  CardElement
} from '@stripe/react-stripe-js';

type Product = {
  id: string;
  name: string;
  price: number; // in cents
  description: string;
};

type ProductKey = 'webinar' | 'ebook' | 'mentorship';

const products: Record<ProductKey, Product> = {
  webinar: {
    id: 'webinar',
    name: 'Life Coaching Webinar',
    price: 1500,
    description: 'Life Coaching Webinar for Self-Discovery & Empowerment',
  },
  ebook: {
    id: 'ebook',
    name: 'Self-Discovery eBook',
    price: 600,
    description: 'A Life Coaching Companion for Healing & Growth',
  },
  mentorship: {
    id: 'mentorship',
    name: '1:1 Life Coaching Mentorship',
    price: 3500,
    description: 'Personalized life coaching for your journey',
  },
};

const isValidProductId = (id: string): id is ProductKey => {
  return ['webinar', 'ebook', 'mentorship'].includes(id);
};

const Checkout: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });

  const [product, setProduct] = useState<Product | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productId && isValidProductId(productId)) {
      setProduct(products[productId]);
    } else {
      navigate('/');
    }
  }, [productId, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    if (!stripe || !elements || !product) {
      setError('Payment service not ready.');
      setIsProcessing(false);
      return;
    }

    try {
const response = await fetch('https://project-backend-snowy-alpha.vercel.app/create-payment-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: product.price * 100 }), // convert dollars to cents here
});


      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message ?? 'Payment failed');
      } else if (result.paymentIntent.status === 'succeeded') {
        navigate('/thank-you');
      }
    } catch (err: any) {
      setError('Error processing payment.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!product) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="input mb-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input mb-4"
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input mb-4"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="input"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

          <div className="input p-2 border rounded mb-4">
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
  type="submit"
  className="btn btn-primary w-full"
  disabled={isProcessing}
>
  {isProcessing
    ? 'Processing...'
    : `Pay $${product.price.toFixed(2)}`}
</button>


          <p className="text-sm text-center text-gray-500 mt-4">
            By purchasing, you agree to our Terms & Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
