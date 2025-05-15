import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const ProductsNow = [
  { id: 1, name: 'Green Grapes', price: 200, image: '/assets/Green-Grapes.jpg' },
  { id: 2, name: 'Combo Grapes', price: 200, image: '/assets/Black-Green.jpg' },
  { id: 3, name: 'Black Grapes', price: 200, image: '/assets/Black-Grapes.jpg' },
  { id: 4, name: 'Onion', price: 200, image: '/assets/Onion.jpg' },
  { id: 5, name: 'Raisins', price: 200, image: '/assets/Raisins.jpg' },
];

const ProductsSoon = [
  { id: 1, name: 'Pomegranate', price: 200, image: '/assets/Pomogranate.jpg' },
  { id: 2, name: 'Dragon Fruit', price: 200, image: '/assets/Dragon-Fruit.jpg' },
  { id: 3, name: 'Chili', price: 200, image: '/assets/Chili.jpg' },
  { id: 4, name: 'Garlic', price: 200, image: '/assets/Garlic.jpg' },
];

const ProductCard = ({ product, isAvailable = true }: any) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl">
    <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
    <div className="p-5 text-center flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-green-700 text-lg font-medium mb-4">₹{product.price} / kg</p>
      {isAvailable ? (
        <a
          href={`https://wa.me/9665093085?text=Hello%20Krushidharm,%20I%20am%20interested%20in%20buying%201Kg%20of%20${encodeURIComponent(product.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all"
        >
          Buy Now
        </a>
      ) : (
        <button
          onClick={() => alert('Coming Soon!')}
          className="bg-gray-400 cursor-not-allowed text-white font-semibold py-2 px-6 rounded-full shadow-md"
        >
          Coming Soon
        </button>
      )}
    </div>
  </div>
);

const ProductSection = ({ title, products, isAvailable = true, textColor = "text-green-800" }: any) => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <h2 className={`text-3xl font-bold text-center mb-10 ${textColor}`}>{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} isAvailable={isAvailable} />
      ))}
    </div>
  </section>
);

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-green-50 text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 py-1 px-4 sm:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-48 sm:w-60 aspect-[3/1] overflow-hidden">
            <img
              src="/assets/KRUSHIDHARM.svg"
              alt="Krushidharm Logo"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Hide text content on small screens when scrolled */}
          <div
            className={`text-center sm:text-left transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
              } md:opacity-100 md:h-auto`}
          >
            <p className="text-md sm:text-lg font-bold text-green-900">
              Premium Fresh Grapes Delivered From Farm to You
            </p>
            <p className="text-sm sm:text-md text-green-800 italic">
              Organic | Handpicked | Farm Fresh
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-28 flex items-center justify-center bg-cover bg-center">
        <img src="/assets/KRUSHIDHARM.png" alt="Krushidharm Banner" className="max-w-full h-auto" />
      </section>

      {/* Products Sections */}
      <ProductSection title="Available Now" products={ProductsNow} isAvailable />
      <ProductSection title="Coming Soon..." products={ProductsSoon} isAvailable={false} textColor="text-red-800" />

      {/* Footer */}
      <footer className="bg-white text-green-900 py-10 px-4 border-t border-green-200 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="w-60 aspect-[3/1]">
              <img src="/assets/KRUSHIDHARM.svg" alt="Krushidharm Logo" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm mt-2">Your trusted source for farm-fresh grapes.</p>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <a href="#" className="text-2xl text-green-800 hover:text-green-600" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="text-2xl text-green-800 hover:text-green-600" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="tel:+919665093085" className="flex items-center gap-2 text-2xl text-green-800 hover:text-green-600" aria-label="Call us">
              <FaPhoneAlt />
              <span className="text-sm">+91 96650 93085</span>
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-green-700 mt-6">&copy; {new Date().getFullYear()} Krushidharm. All rights reserved.</p>
      </footer>
    </div>
  );
};
