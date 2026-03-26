import { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
const allBlackEnsembleImg = 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1080';

const products = [
  {
    id: 1,
    name: 'Beige Sleeveless Dress',
    price: 49.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1620777888789-0ee95b57a277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Brown Coat',
    price: 89.99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1631363320585-06e91d54210e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Brown leather jacket',
    price: 129.99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1647613560966-3fc14d2e8225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Comfy Fit',
    price: 34.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1615013886166-efa008a98ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Red & White Outfit',
    price: 59.99,
    category: 'Women',
    image: 'https://imgs.search.brave.com/-eCCaFqtcPC6C_kol-VnYufPV6tfIq57gUzCbLr1Su8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYXNo/aW9uY2Fub25zLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOC9SZWQtQ29h/dC1BbmQtV2hpdGUt/UGFudHMtc3RyZWV0/LXN0eWxlLW91dGZp/dC04MDB4MTIwMC5q/cGcud2VicA',
  },
  {
    id: 6,
    name: 'Casual Dress',
    price: 44.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1635913640742-6c49c7d2ce8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    name: 'Elegant Long Dress',
    price: 79.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1649420325318-3f5d589aaf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    name: 'Green Tee & Shorts',
    price: 39.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1600328784656-83c7bc673061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 9,
    name: 'Streetwear Collection',
    price: 99.99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1724184888148-066743334522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzQ1MDU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 10,
    name: 'Black & White Outfit',
    price: 54.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1619326512511-c525c47d5acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8ZmFzaGlvbiUyMG1vZGVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc0NTA1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 11,
    name: 'Urban Streetwear',
    price: 119.99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1724184888112-0fb91fefacc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMXx8ZmFzaGlvbiUyMG1vZGVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc0NTA1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 12,
    name: 'All Black Ensemble',
    price: 109.99,
    category: 'Men',
    image: allBlackEnsembleImg
  },
  {
    id: 13,
    name: 'Modern Urban Look',
    price: 94.99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1724184888106-8053f3bf43aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxM3x8ZmFzaGlvbiUyMG1vZGVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc0NTA1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 14,
    name: 'Casual Street Style',
    price: 84.99,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1724184888075-99af09dfa57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNHx8ZmFzaGlvbiUyMG1vZGVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc0NTA1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 15,
    name: 'Street Fashion',
    price: 74.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1724184888115-e76e42f53dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8ZmFzaGlvbiUyMG1vZGVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc0NTA1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 16,
    name: 'Green Dress',
    price: 69.99,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1655576751811-ec945b9e023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8ZmFzaGlvbiUyMG1vZGVsJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzc0NTA1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['All', 'Women', 'Men', 'Divided', 'Baby', 'Kids', 'Sport'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-md">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-3 px-4">
          <p className="text-sm">✨ Free shipping on orders over $50 | Student discount 20% ✨</p>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-900 hover:text-blue-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl tracking-wider bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-[Aboreto] font-bold"><span className="italic">Soul.co</span></h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`hover:text-blue-600 transition-colors ${
                    selectedCategory === category ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4 text-blue-900">
              <button className="hover:text-blue-600 transition-colors">
                <Search size={20} />
              </button>
              <button className="hover:text-blue-600 transition-colors">
                <User size={20} />
              </button>
              <button className="hover:text-blue-600 transition-colors">
                <Heart size={20} />
              </button>
              <button className="relative hover:text-blue-600 transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-200 bg-white">
            <nav className="flex flex-col space-y-4 p-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left hover:text-blue-600 transition-colors ${
                    selectedCategory === category ? 'font-semibold text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-blue-100 to-blue-50">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705675451868-014a161e591b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NzQ1MDU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Fashion store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-6xl mb-4 drop-shadow-lg">Spring Collection 2026</h2>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">✨ Fresh styles for the new season ✨</p>
            <button className="bg-white text-blue-900 px-10 py-4 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Category Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl text-center mb-8 text-blue-900">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-80 overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1627342229908-71efbac25f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NzQ1MDU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Women's Fashion"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-3xl mb-2">Women 👗</h3>
                <p className="text-sm mb-2">Explore collection</p>
                <div className="w-12 h-1 bg-white"></div>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1599012307530-d163bd04ecab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NzQ1MDU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Men's Fashion"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-3xl mb-2">Men 👔</h3>
                <p className="text-sm mb-2">Explore collection</p>
                <div className="w-12 h-1 bg-white"></div>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NzQ1MDU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sport Collection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-3xl mb-2">Sport ⚡</h3>
                <p className="text-sm mb-2">Explore collection</p>
                <div className="w-12 h-1 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-4xl text-blue-900">
            {selectedCategory === 'All' ? '🔥 Trending Now' : selectedCategory}
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-blue-700 px-4 py-2 bg-blue-100 rounded-full">{filteredProducts.length} items</span>
            <select className="border-2 border-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 text-blue-900">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-blue-50 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={handleAddToCart}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-blue-800 hover:to-blue-600 shadow-lg"
                >
                  Add to Cart
                </button>
                <button className="absolute top-4 right-4 bg-white text-blue-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-100 shadow-lg">
                  <Heart size={18} />
                </button>
              </div>
              <h3 className="mb-1 text-gray-800 group-hover:text-blue-900">{product.name}</h3>
              <p className="text-sm text-blue-600 mb-1">{product.category}</p>
              <p className="text-blue-900">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4 text-white">💎 Become a Member</h2>
          <p className="text-blue-100 mb-8 text-lg">Sign up for free and get exclusive offers, early access to sales, and more</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-white"
            />
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-50 to-white border-t-4 border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4 text-blue-900">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Women</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Men</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Baby</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Kids</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Sport</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-blue-900">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-blue-900">Company</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-blue-900">Follow Us</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#" className="hover:text-blue-600 transition-colors">📸 Instagram</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">👍 Facebook</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">🐦 Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">📌 Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-blue-200 text-center text-sm text-blue-900">
            <p>&copy; 2026 H&M Fashion Store. All rights reserved. 💙</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
