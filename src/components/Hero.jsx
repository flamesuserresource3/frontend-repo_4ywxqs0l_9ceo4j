import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100" />

      {/* Soft gold shimmer overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="mb-2 inline-block rounded-full bg-white/50 px-4 py-1 text-xs font-semibold tracking-wide text-rose-600 shadow-sm">
            Handcrafted Indian Mithai
          </p>
          <h1 className="mt-2 bg-gradient-to-b from-rose-700 to-rose-500 bg-clip-text font-serif text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Mithaas by Ritik
          </h1>
          <p className="mt-4 text-base leading-relaxed text-rose-800/80 sm:text-lg">
            Tradition served fresh with love. Authentic, home-cooked Indian sweets made with pure ingredients, a touch of nostalgia, and a whole lot of heart.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="https://wa.me/" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition hover:scale-[1.02] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {/* WhatsApp icon (inline) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46.03.12 5.37.09 11.97a11.93 11.93 0 0 0 1.6 6.01L0 24l6.17-1.62a11.97 11.97 0 0 0 5.89 1.54h.01c6.6 0 11.97-5.34 12-11.94a11.92 11.92 0 0 0-3.55-8.5Zm-8.46 18.3a9.95 9.95 0 0 1-5.06-1.39l-.36-.21-3.66.96.98-3.57-.24-.37a9.93 9.93 0 0 1-1.54-5.33C2.2 6.83 6.64 2.4 12.06 2.4c2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 0 1 2.87 6.9c-.02 5.42-4.47 9.86-9.77 9.86Zm5.47-7.38c-.3-.16-1.77-.87-2.05-.97-.28-.1-.49-.16-.7.16-.2.3-.8.97-.98 1.18-.18.2-.36.22-.66.08-.3-.16-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.61.14-.14.3-.36.44-.54.14-.18.18-.3.28-.5.1-.2.06-.38-.02-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58 0 1.52 1.11 2.98 1.26 3.18.16.2 2.18 3.33 5.28 4.66.74.32 1.31.51 1.76.66.74.24 1.4.2 1.92.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.26-.2-.56-.36Z" />
              </svg>
              Order on WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center rounded-full border border-rose-300/60 bg-white/60 px-5 py-3 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur transition hover:scale-[1.02] hover:bg-white"
            >
              View Menu
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-rose-300/40 ring-1 ring-rose-200">
            <img
              src="https://images.unsplash.com/photo-1647784375245-7e9ed6a1b923?q=80&w=1600&auto=format&fit=crop"
              alt="Warm assortment of homemade Indian sweets"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-rose-700 shadow">
              Tradition served fresh with love
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
