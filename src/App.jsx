import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">

      {/* Header with Toggle */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-sm"
        >
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-5xl font-extrabold leading-tight">
          Sell Your Unused Software Licenses Easily 💻
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Turn unused software into cash in just a few clicks. Fast, secure, and hassle-free.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300">
          Get a Quote
        </button>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: "📤", title: "Upload License", desc: "Send us your unused software license in a few clicks." },
            { icon: "📈", title: "Get Valuation", desc: "We analyze and give you the best resale value." },
            { icon: "💰", title: "Get Paid", desc: "Receive instant payment upon license approval." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-full mb-4 text-3xl">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section with Scrolling Effect */}
      <section className="px-6 py-16 bg-white dark:bg-gray-900 text-center overflow-hidden">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <motion.div
          className="flex gap-8 md:gap-16 w-max"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          {[
            { icon: "⚡", title: "Instant Quotes", desc: "Get your license value in seconds." },
            { icon: "🔒", title: "Secure Process", desc: "Your data and licenses are 100% protected." },
            { icon: "💼", title: "Trusted Network", desc: "We work with verified software buyers." },
            { icon: "📞", title: "Support", desc: "Real humans to help when you need it." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center min-w-[250px]">
              <div className="text-4xl bg-blue-100 dark:bg-blue-800 p-4 rounded-full mb-4">{icon}</div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            {
              text: "“SoftSell made it super easy to sell unused licenses. Got paid within 24 hours!”",
              name: "Rohit Sharma",
              role: "IT Manager, ByteCorp",
            },
            {
              text: "“Wasn't sure it would work, but they nailed it. Simple process and great support.”",
              name: "Sneha Verma",
              role: "Founder, DevSimplify",
            },
          ].map(({ text, name, role }) => (
            <div key={name} className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6 max-w-sm w-full">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{text}</p>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                <p>{name}</p>
                <p>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
        <form className="max-w-2xl mx-auto space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "Name", type: "text", placeholder: "Your Name" },
            { label: "Email", type: "email", placeholder: "you@example.com" },
            { label: "Company", type: "text", placeholder: "Company Name" },
          ].map(({ label, type, placeholder }) => (
            <div key={label} className="flex flex-col">
              <label className="font-medium mb-1">{label}</label>
              <input
                type={type}
                required
                className="border dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder={placeholder}
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="font-medium mb-1">License Type</label>
            <select
              required
              className="border dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            >
              <option value="">Select a license</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="Office 365">Office 365</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Message</label>
            <textarea
              rows="4"
              required
              className="border dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
