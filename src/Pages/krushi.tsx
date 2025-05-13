import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const grapes = [
  {
    id: 1,
    name: 'Thompson Seedless',
    price: 120,
    image: 'src/assets/Black-Grapes-1.jpg',
  },
  {
    id: 2,
    name: 'Sharad Seedless',
    price: 150,
    image: 'src/assets/Black-Grapes-3.jpg',
  },
  {
    id: 3,
    name: 'Sonaka',
    price: 130,
    image: 'src/assets/Black-Grapes-2.jpg',
  },
];

export const Krushi = () => {
  return (
    <div className="bg-green-50 text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold">Krushidharm</h1>
        <p className="text-xl mt-4">Premium Fresh Grapes Delivered From Farm to You</p>
        <p className="mt-2 text-green-200 italic">Organic | Handpicked | Farm Fresh</p>
      </section>

      {/* Grapes Listing */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Grape Varieties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {grapes.map((grape) => (
            <div
              key={grape.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={grape.image} alt={grape.name} className="w-full h-60 object-cover" />
              <div className="p-5 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{grape.name}</h3>
                <p className="text-green-700 text-lg font-medium mb-4">₹{grape.price} / kg</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-lg font-semibold">Krushidharm</p>
            <p className="text-sm text-green-200">Your trusted source for farm-fresh grapes.</p>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-300">
              <FaInstagram />
            </a>
            <a href="tel:+918888888888" className="hover:text-green-300 flex items-center gap-1">
              <FaPhoneAlt />
              <span className="text-sm">+91 88888 88888</span>
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-green-300 mt-6">
          &copy; {new Date().getFullYear()} Krushidharm. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
