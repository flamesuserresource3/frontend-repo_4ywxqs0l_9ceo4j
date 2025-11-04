import { motion } from 'framer-motion';

const products = [
  {
    name: 'Besan Laddoo',
    img: 'https://images.unsplash.com/photo-1573814385151-b1e1a9a6feba?q=80&w=1200&auto=format&fit=crop',
    desc: 'Melt-in-mouth laddoos roasted in desi ghee',
    price: '₹450 / 500g',
  },
  {
    name: 'Kaju Katli',
    img: 'https://images.unsplash.com/photo-1601050690597-9fd642b8cf15?q=80&w=1200&auto=format&fit=crop',
    desc: 'Silky cashew diamond with delicate sweetness',
    price: '₹700 / 500g',
  },
  {
    name: 'Mawa Peda',
    img: 'https://images.unsplash.com/photo-1604908176997-43162d034beb?q=80&w=1200&auto=format&fit=crop',
    desc: 'Slow-cooked khoya with saffron & cardamom',
    price: '₹500 / 500g',
  },
  {
    name: 'Gujiya',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop',
    desc: 'Crisp shells with rich mawa-nuts filling',
    price: '₹600 / 6 pcs',
  },
];

const Products = () => {
  return (
    <section id="menu" className="relative bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,231,243,0.6),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(254,215,170,0.35),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-rose-700 sm:text-4xl">Our Specials</h2>
          <p className="mt-3 text-rose-900/70">Crafted fresh in small batches — purity you can taste.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl shadow-rose-200/40 ring-1 ring-rose-100/70"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent" />
                <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-amber-200/80 px-3 py-1 text-xs font-semibold text-rose-800 shadow">
                  {p.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-rose-800">{p.name}</h3>
                <p className="mt-1 text-sm text-rose-900/70">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
