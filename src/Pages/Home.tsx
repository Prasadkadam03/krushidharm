import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const ProductsNow = [
  { id: 1, name: 'Green Grapes', price: 200, image: 'src/assets/Green-Grapes.jpg' },
  { id: 2, name: 'Combo Grapes', price: 200, image: 'src/assets/Black+Green.jpg' },
  { id: 3, name: 'Black Grapes', price: 200, image: 'src/assets/Black-Grapes.jpg' },
  { id: 4, name: 'Onion', price: 200, image: 'src/assets/onion.jpg' },
];

const ProductsSoon = [
  { id: 1, name: 'Pomegranate', price: 200, image: 'src/assets/Pomogranate.jpg' },
  { id: 2, name: 'Dragon fruit', price: 200, image: 'src/assets/Dragon_fruit.jpg' },
  { id: 3, name: 'Chili', price: 200, image: 'src/assets/Chili.jpg' },
];

export const Home = () => {
  return (
    <div className="bg-green-50 text-gray-800 min-h-screen font-sans">

      {/* Hero/Header Section */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 py-1  px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-70 aspect-[3/1] overflow-hidden">
            <img
              src="src/assets/KRUSHIDHARM.png"
              alt="KRUSHIDHARM"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-md sm:text-lg font-bold text-green-900">Premium Fresh Grapes Delivered From Farm to You</p>
            <p className="text-sm sm:text-md text-green-800 italic">Organic | Handpicked | Farm Fresh</p>
          </div>
        </div>
      </header>

      {/* Products Now */}
      <section className="max-w-7xl mx-auto pt-40 px-4 py-2 sm:py-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-800 pt-2">Available Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProductsNow.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-5 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-green-700 text-lg font-medium mb-4">₹{product.price} / kg</p>
                <a
                  href="https://wa.me/9665093085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-800">Coming Soon...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProductsSoon.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-5 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-green-700 text-lg font-medium mb-4">₹{product.price} / kg</p>
                <a
                  onClick={() => alert('Coming Soon!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-green-900 py-8 px-4 border-t border-green-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="w-70 aspect-[3/1] overflow-hidden">
              <img
                src="src/assets/KRUSHIDHARM.png"
                alt="KRUSHIDHARM"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-sm mt-2">Your trusted source for farm-fresh grapes.</p>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <a href="#" className="text-2xl text-green-800 hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-2xl text-green-800 hover:text-green-600">
              <FaInstagram />
            </a>
            <a
              href="tel:+918888888888"
              className="text-2xl text-green-800 hover:text-green-600 flex items-center gap-2"
            >
              <FaPhoneAlt />
              <span className="text-sm">+91 88888 88888</span>
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-green-700 mt-6">
          &copy; {new Date().getFullYear()} Krushidharm. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
