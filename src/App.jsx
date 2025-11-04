import Hero from './components/Hero';
import Products from './components/Products';
import StoryTestimonials from './components/StoryTestimonials';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-rose-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-serif text-xl font-bold text-rose-700">Mithaas by Ritik</a>
          <nav className="hidden gap-6 text-sm text-rose-800/80 sm:flex">
            <a href="#menu" className="hover:text-rose-900">Menu</a>
            <a href="#contact" className="hover:text-rose-900">Order</a>
          </nav>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Products />
        <StoryTestimonials />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
