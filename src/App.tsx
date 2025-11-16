import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import { Skins } from './components/Skins';
import { Partners } from './components/Partners';
import { Guides } from './components/Guides';
import { GuideDetail } from './components/GuideDetail';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white">CS</span>
              </div>
              <span className="text-white">CS:GO Wiki</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/') 
                    ? 'bg-orange-600 text-white' 
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                Главная
              </Link>
              <Link
                to="/skins"
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/skins') 
                    ? 'bg-orange-600 text-white' 
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                Скины
              </Link>
              <Link
                to="/partners"
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/partners') 
                    ? 'bg-orange-600 text-white' 
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                Партнёры
              </Link>
              <Link
                to="/guides"
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/guides') 
                    ? 'bg-orange-600 text-white' 
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                Гайды
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/') 
                  ? 'bg-orange-600 text-white' 
                  : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/skins"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/skins') 
                  ? 'bg-orange-600 text-white' 
                  : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              Скины
            </Link>
            <Link
              to="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/partners') 
                  ? 'bg-orange-600 text-white' 
                  : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              Партнёры
            </Link>
            <Link
              to="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/guides') 
                  ? 'bg-orange-600 text-white' 
                  : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              Гайды
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<GuideDetail />} />
        </Routes>
      </div>
    </Router>
  );
}