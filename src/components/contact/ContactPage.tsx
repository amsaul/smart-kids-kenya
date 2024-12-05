import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Toast from '../shared/Toast';
import { ContactFormData } from '../../types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyboMA8PwznmsL95cM0J0g01bPodNDjkFxPpV0cqTHiksdYTLzJeRQLJ-lHqjUylEq2rw/exec'; // Replace with your actual URL

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!formData.email.includes('@')) {
      setToast({
        show: true,
        message: 'Please enter a valid email address.',
        type: 'error',
      });
      return;
    }

    try {
      // Prepare form data
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

      // Send data to Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Clear form fields
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Show success toast
        setToast({
          show: true,
          message: 'Thank you! Your message has been sent successfully.',
          type: 'success',
        });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error('Submission Error:', error);

      // Show error toast
      setToast({
        show: true,
        message: `Submission Error: ${error}`,
        type: 'error',
      });
    }
  };

  // Handles input change for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-500 mr-4" />
                  <span>info@smartkidskenya.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-500 mr-4" />
                  <span>+254 790 223 386</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891888283!2d36.70730744863281!3d-1.3028617999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
