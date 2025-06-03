import React, { useState } from 'react';
import { toast } from 'react-toastify';  // Assuming you are using react-toastify for notifications

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `;

      // Send the form data to the backend to send the email
      const result = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'recipient@example.com',  // Replace with actual recipient email
          subject: `New Contact Form: ${formData.subject}`,
          html: emailHtml,
        }),
      });

      const data = await result.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message. Please try again.');
        setSubmitStatus({
          success: false,
          message: 'There was an error sending your message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending message. Please try again.');
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-700 mb-8">We'd love to hear from you. Please fill out the form below, and we will get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit}>
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-primary-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-primary-500"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-primary-500"
              placeholder="Subject of your message"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-primary-500"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status Message */}
          {isSubmitting && (
            <div className="text-center text-gray-500">
              <p>Sending your message...</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
