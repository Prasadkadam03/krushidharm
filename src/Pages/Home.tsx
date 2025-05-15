import { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaLeaf,
  FaHandHolding,
  FaTruck,
  FaRupeeSign,
  FaLinkedin,
} from 'react-icons/fa';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const productsNow: Product[] = [
  { id: 1, name: 'Green Grapes', price: "155", image: '/assets/Green-Grapes.jpg' },
  { id: 2, name: 'Combo Grapes', price: "200", image: '/assets/Black-Green.jpg' },
  { id: 3, name: 'Red Grapes', price: "205", image: '/assets/Black-Grapes.jpg' },
  { id: 4, name: 'Onion', price: "200", image: '/assets/Onion.jpg' },
  { id: 5, name: 'Raisins yellow', price: "360", image: '/assets/Yellow-Raisins.jpg' },
  { id: 6, name: 'Raisins black', price: "420", image: '/assets/Black-Raisins.jpg' },
];

const productsSoon: Product[] = [
  { id: 1, name: 'Pomegranate', price: "160 - 190", image: '/assets/Pomogranate.jpg' },
  { id: 2, name: 'Dragon Fruit', price: "200", image: '/assets/Dragon-Fruit.jpg' },
  { id: 3, name: 'Chili', price: "200", image: '/assets/Chili.jpg' },
  { id: 4, name: 'Garlic', price: "60 - 90", image: '/assets/Garlic.jpg' },
];

const ProductCard = ({ product, available = true }: { product: Product; available?: boolean }) => (
  <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform">
    <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
    <div className="p-5 text-center">
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-green-700 text-lg font-medium mb-4">₹{product.price} / kg</p>
      {available ? (
        <a
          href={`https://wa.me/9665093085?text=Hello%20Krushidharm,%20I%20am%20interested%20in%20buying%201Kg%20of%20${encodeURIComponent(
            product.name
          )}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md"
        >
          Buy Now
        </a>
      ) : (
        <button
          disabled
          className="bg-gray-400 cursor-not-allowed text-white font-semibold py-2 px-6 rounded-full shadow-md"
          onClick={() => alert('Coming Soon!')}
        >
          Coming Soon
        </button>
      )}
    </div>
  </div>
);

const ProductSection = ({
  title,
  products,
  available = true,
  textColor = 'text-green-800',
}: {
  title: string;
  products: Product[];
  available?: boolean;
  textColor?: string;
}) => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <h2 className={`text-3xl font-bold text-center mb-10 ${textColor}`}>{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} available={available} />
      ))}
    </div>
  </section>
);

export const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-green-50 text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-10 py-1 px-4 sm:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-48 sm:w-60 aspect-[3/1] overflow-hidden">
            <img src="/assets/KRUSHIDHARM.svg" alt="Krushidharm Logo" className="w-full h-full object-cover" />
          </div>
          {/* Visible only on md+ */}
          <div
            className={`hidden md:block text-center sm:text-left transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
              }`}
          >
            <p className="text-md sm:text-lg font-bold text-green-900">Premium Fresh Grapes Delivered From Farm to You</p>
            <p className="text-sm sm:text-md text-green-800 italic">Organic | Handpicked | Farm Fresh</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 flex items-center justify-center">
        <img src="/assets/KRUSHIDHARM.png" alt="Krushidharm Banner" className="max-w-full h-auto" />
      </section>

      {/* Why Choose Section */}
      <section className="bg-green-800 text-white py-16 px-4 sm:px-8 rounded-xl shadow-md mx-4 sm:mx-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Why Choose Krushidharm?</h2>
          <p className="text-lg sm:text-xl mb-12 text-green-100">
            We're not just selling fruits — we’re delivering health, quality, and trust straight from our farms to your doorstep.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[{
              icon: FaLeaf,
              title: '100% Organic',
              desc: 'No chemicals, just pure nature in every bite.',
              color: 'text-lime-300',
            }, {
              icon: FaHandHolding,
              title: 'Handpicked',
              desc: 'Every grape is carefully selected for top quality.',
              color: 'text-yellow-200',
            }, {
              icon: FaTruck,
              title: 'Farm to Home',
              desc: 'Delivered fresh with care — always on time.',
              color: 'text-blue-200',
            }, {
              icon: FaRupeeSign,
              title: 'Export Quality',
              desc: 'Premium produce trusted by global buyers.',
              color: 'text-white',
            }].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <Icon className={`text-5xl mb-4 ${color}`} />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-green-100">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductSection title="Available Now" products={productsNow} />
      <ProductSection title="Coming Soon..." products={productsSoon} available={false} textColor="text-red-800" />

      {/* Footer */}

      <footer className="bg-white text-green-900 py-10 px-4 border-t border-green-200 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="w-60 aspect-[3/1]">
              <img
                src="/assets/KRUSHIDHARM.svg"
                alt="Krushidharm Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm mt-2">Your trusted source for farm-fresh grapes.</p>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <a
              href="#"
              aria-label="Facebook"
              className="text-2xl text-green-800 hover:text-green-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-2xl text-green-800 hover:text-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:+919665093085"
              aria-label="Call us"
              className="flex items-center gap-2 text-2xl text-green-800 hover:text-green-600"
            >
              <FaPhoneAlt />
              <span className="text-sm">+91 96650 93085</span>
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-green-700 mt-6">
          &copy; {new Date().getFullYear()} Krushidharm. All rights reserved.
        </p>

        <p className="text-center text-base font-semibold text-green-900 mt-4 flex items-center justify-center gap-2 animate-pulse">
          Developed by{' '}
          <a
            href="https://www.linkedin.com/in/prasadkadam03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-green-600 underline flex items-center gap-1 transition-colors duration-300"
          >
            <FaLinkedin className="inline" /> Prasad Kadam
          </a>
        </p>

      </footer>

    </div>
  );
};
