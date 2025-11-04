import { motion } from 'framer-motion';
import { Instagram, Phone } from 'lucide-react';
import { useMemo, useState } from 'react';

const ContactFooter = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('I would love to place an order for...');
  const [phone, setPhone] = useState('');

  const waLink = useMemo(() => {
    const text = encodeURIComponent(`Hello! My name is ${name || '—'}. ${message}\nPhone: ${phone || '—'}`);
    return `https://wa.me/?text=${text}`;
  }, [name, message, phone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-rose-700 sm:text-4xl">Order & Contact</h2>
          <p className="mt-3 text-rose-900/70">Reach out for fresh batches, gifting, or custom requests. We’d love to sweeten your day.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-6 shadow-xl shadow-rose-200/40 ring-1 ring-rose-100/70"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-rose-800">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-rose-200 bg-white/70 px-4 py-3 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 transition focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-rose-800">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-rose-200 bg-white/70 px-4 py-3 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 transition focus:ring-2"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-rose-800">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-rose-200 bg-white/70 px-4 py-3 text-rose-900 placeholder-rose-400 outline-none ring-rose-300 transition focus:ring-2"
                  placeholder="What would you like to order?"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition hover:scale-[1.02] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46.03.12 5.37.09 11.97a11.93 11.93 0 0 0 1.6 6.01L0 24l6.17-1.62a11.97 11.97 0 0 0 5.89 1.54h.01c6.6 0 11.97-5.34 12-11.94a11.92 11.92 0 0 0-3.55-8.5Zm-8.46 18.3a9.95 9.95 0 0 1-5.06-1.39l-.36-.21-3.66.96.98-3.57-.24-.37a9.93 9.93 0 0 1-1.54-5.33C2.2 6.83 6.64 2.4 12.06 2.4c2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 0 1 2.87 6.9c-.02 5.42-4.47 9.86-9.77 9.86Zm5.47-7.38c-.3-.16-1.77-.87-2.05-.97-.28-.1-.49-.16-.7.16-.2.3-.8.97-.98 1.18-.18.2-.36.22-.66.08-.3-.16-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.61.14-.14.3-.36.44-.54.14-.18.18-.3.28-.5.1-.2.06-.38-.02-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58 0 1.52 1.11 2.98 1.26 3.18.16.2 2.18 3.33 5.28 4.66.74.32 1.31.51 1.76.66.74.24 1.4.2 1.92.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.26-.2-.56-.36Z" />
                  </svg>
                  Send via WhatsApp
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-rose-300/60 bg-white/60 px-5 py-3 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur transition hover:scale-[1.02] hover:bg-white"
                >
                  Quick Chat
                </a>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50 p-6 ring-1 ring-rose-200/70"
          >
            <h3 className="text-xl font-semibold text-rose-800">Why choose us</h3>
            <ul className="mt-3 list-inside list-disc text-rose-900/80">
              <li>Home kitchen hygiene and small-batch freshness</li>
              <li>Pure ingredients: desi ghee, premium nuts, no shortcuts</li>
              <li>Customizable gift boxes for festivals and weddings</li>
            </ul>
            <div className="mt-6 flex items-center gap-4 text-rose-700">
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold ring-1 ring-rose-200 transition hover:bg-white">
                <Phone className="h-4 w-4" /> Call us
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold ring-1 ring-rose-200 transition hover:bg-white">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200" />
        <div className="relative mx-auto max-w-6xl px-6 py-8 text-white">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-center text-sm">© {new Date().getFullYear()} Mithaas by Ritik · Crafted with love</p>
            <div className="flex items-center gap-4">
              <a href={waLink} target="_blank" rel="noreferrer" className="rounded-full bg-white/20 p-2 transition hover:bg-white/30" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46.03.12 5.37.09 11.97a11.93 11.93 0 0 0 1.6 6.01L0 24l6.17-1.62a11.97 11.97 0 0 0 5.89 1.54h.01c6.6 0 11.97-5.34 12-11.94a11.92 11.92 0 0 0-3.55-8.5Zm-8.46 18.3a9.95 9.95 0 0 1-5.06-1.39l-.36-.21-3.66.96.98-3.57-.24-.37a9.93 9.93 0 0 1-1.54-5.33C2.2 6.83 6.64 2.4 12.06 2.4c2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 0 1 2.87 6.9c-.02 5.42-4.47 9.86-9.77 9.86Zm5.47-7.38c-.3-.16-1.77-.87-2.05-.97-.28-.1-.49-.16-.7.16-.2.3-.8.97-.98 1.18-.18.2-.36.22-.66.08-.3-.16-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.61.14-.14.3-.36.44-.54.14-.18.18-.3.28-.5.1-.2.06-.38-.02-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58 0 1.52 1.11 2.98 1.26 3.18.16.2 2.18 3.33 5.28 4.66.74.32 1.31.51 1.76.66.74.24 1.4.2 1.92.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.26-.2-.56-.36Z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/20 p-2 transition hover:bg-white/30" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="tel:+910000000000" className="rounded-full bg-white/20 p-2 transition hover:bg-white/30" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
