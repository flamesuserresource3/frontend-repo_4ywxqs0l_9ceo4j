import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha K.',
    text: 'Reminded me of festivals at nani’s home. Perfect sweetness and so fresh!'
  },
  {
    name: 'Rahul S.',
    text: 'You can taste the purity. My family finished the box in minutes.'
  },
  {
    name: 'Meera B.',
    text: 'Beautifully packed, rich flavor, and that homely touch — just lovely.'
  }
];

const StoryTestimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-serif text-3xl font-bold text-rose-700 sm:text-4xl">About Meera</h2>
          <p className="mt-4 text-rose-900/80">
            What began as a family tradition is now a promise I share with you — sweets made like at home, with patience and love. From slow-roasting besan in ghee to
            hand-rolling pedas, every batch is crafted in small quantities to keep the essence intact. My kitchen smells of cardamom and warm memories, and that’s exactly what I pack into every box of mithai.
          </p>
          <p className="mt-3 text-rose-900/80">
            Whether it’s a celebration or a quiet evening chai, I hope these sweets add a little warmth to your moments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=""
        >
          <div className="mb-4 text-center md:text-left">
            <h3 className="text-xl font-semibold text-rose-700">Customer Love</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-lg shadow-rose-200/40 ring-1 ring-rose-100/70 backdrop-blur">
                <Quote className="mb-2 h-5 w-5 text-rose-400" />
                <p className="text-sm text-rose-900/80">{t.text}</p>
                <p className="mt-3 text-sm font-semibold text-rose-700">{t.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryTestimonials;
