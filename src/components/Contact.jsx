import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
  };

  // Styled Responsive Success State
  if (submitted) {
    return (
      <section className="w-full bg-white dark:bg-neutral-950 py-16 px-4 transition-colors duration-300">
        <div className="max-w-md mx-auto bg-amber-50 dark:bg-neutral-900 border border-amber-200/50 dark:border-neutral-800 p-8 rounded-xl text-center shadow-lg space-y-4">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/50 rounded-full flex items-center justify-center text-2xl mx-auto">
            ☕
          </div>
          <h3 className="text-2xl font-bold font-jost text-[#422006] dark:text-amber-500">Thank you!</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Your message has been sent successfully. We'll get back to you soon over a hot cup of coffee.
          </p>
          <button 
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
            className="mt-2 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="w-full bg-white dark:bg-neutral-950 py-16 px-6 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Title */}
        <h2 className="text-3xl sm:text-4xl text-center mb-12 font-lobster text-[#422006] dark:text-amber-500 tracking-wide">
          Contact Us
        </h2>
        
        {/* Split container: Columns shift smoothly on md layout break point */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
          
          {/* Left Block: Map / Image Element */}
          <div className="w-full md:w-1/2 max-w-md lg:max-w-xl">
            <img 
              src="/images/map.jpg" 
              alt="Our coffee shop location map" 
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md border border-gray-100 dark:border-neutral-800" 
            />
          </div>
          
          {/* Right Block: Input Form fields */}
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md space-y-5">
            
            <div className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-neutral-800 px-4 py-3 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-lg text-sm sm:text-base transition-all"
              />
            </div>

            <div className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-neutral-800 px-4 py-3 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-lg text-sm sm:text-base transition-all"
              />
            </div>

            <div className="w-full">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-neutral-800 px-4 py-3 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-lg text-sm sm:text-base transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-amber-700 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold rounded-lg font-jost text-base shadow-md transition-colors cursor-pointer active:scale-[0.99]"
            >
              Send Message
            </button>
            
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;