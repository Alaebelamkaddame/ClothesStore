'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect the form data
    const { firstName, lastName, email, message } = formData;

    // EmailJS setup
    const templateParams = {
      firstName,
      lastName,
      email,
      message
    };

    // Send email using EmailJS service
    emailjs.send('service_7b0mv0s', 'template_wsknfti', templateParams, '3CFJDEh2KsFGlfKxS')
      .then((response) => {
        console.log('Email successfully sent:', response);
        // Clear form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }, (err) => {
        console.error('Failed to send email:', err);
      });
  };

  return (
    <div className="bg-black text-white p-6 sm:p-8">
      <div className="max-w-2xl mx-auto font-serif">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name and Last Name Inputs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-full bg-transparent border-white rounded-md py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full bg-transparent border-white rounded-md py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-white rounded-md py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full bg-transparent border-white rounded-md py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-transparent hover:bg-white hover:text-black border-2 rounded-md font-medium cursor-pointer transition-all duration-300 ease-in-out transform"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
