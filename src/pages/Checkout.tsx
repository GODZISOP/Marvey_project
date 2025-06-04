import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
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
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  
  const [product, setProduct] = useState<{
    id: string;
    name: string;
    price: number;
    description: string;
  } | null>(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Get product details based on the productId
    const products = {
      webinar: {
        id: 'webinar',
        name: 'Life Coaching Webinar',
        price: 1500,
        description: 'I Know What\'s Right With Met:he June 21st 5pm Eastern is a Life Coaching Webinar for Self-Discovery & Empowerment'
      },
      ebook: {
        id: 'ebook',
        name: 'Self-Discovery eBook',
        price: 600,
        description: 'I Know What\'s Right With Me: A Life Coaching Companion for Healing, Growth & Self-Truth'
      },
      mentorship: {
        id: 'mentorship',
        name: '1:1 Life Coaching Mentorship',
        price: 3500,
        description: 'Walk in What\'s Right With You: Personalized life coaching designed just for you'
      }
    };
    
    if (productId && productId in products) {
      setProduct(products[productId as keyof typeof products]);
    } else {
      navigate('/');
    }
  }, [productId, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to thank you page
      navigate('/thank-you');
    } catch (err) {
      setError('There was an error processing your payment. Please try again.');
      setIsProcessing(false);
    }
  };

  if (!product) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
          
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Order Summary */}
              <div className="lg:col-span-1 bg-primary-50 p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                  <div className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 mt-2 font-semibold">
                    <span>Total</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    Your purchase is secure and encrypted. We use industry standard encryption to protect your personal information.
                  </p>
                </div>
              </div>
              
              {/* Checkout Form */}
              <div className="lg:col-span-2 p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                
                {error && (
                  <div className="bg-error-50 text-error-700 p-4 rounded-md mb-6">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <hr className="my-6" />
                    
                    <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                    
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className="input"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cardCvc"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          placeholder="123"
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary w-full flex items-center justify-center"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          `Complete Purchase - $${product.price.toFixed(2)}`
                        )}
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;