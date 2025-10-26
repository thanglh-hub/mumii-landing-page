import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onHeightChange?: (height: number) => void;
}

function Navbar({ onHeightChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY + 5 && currentY > 10) setIsNavHidden(true);
      else if (currentY < lastScrollY - 5) setIsNavHidden(false);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // report height to parent for padding adjustment if needed
    if (!onHeightChange) return;
    const el = document.getElementById('app-navbar');
    if (el) onHeightChange(el.offsetHeight);
  }, [onHeightChange, mobileMenuOpen]);

  const goToHash = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }
    // same page: smooth scroll
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav id="app-navbar" className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-yellow-400 transition-transform duration-300 ${isNavHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <Logo size="md" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/home" 
              className={`text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
                location.pathname === '/' || location.pathname === '/home' 
                  ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                  : ''
              }`}
            >
              Trang chủ
            </Link>
            <Link 
              to="/features" 
              className={`text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
                location.pathname === '/features' 
                  ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                  : ''
              }`}
            >
              Tính năng
            </Link>
            <Link 
              to="/blog" 
              className={`text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
                location.pathname === '/blog' 
                  ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                  : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
                location.pathname === '/about' 
                  ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                  : ''
              }`}
            >
              Về chúng tôi
            </Link>
            <Link 
              to="/careers" 
              className={`text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
                location.pathname === '/careers' 
                  ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                  : ''
              }`}
            >
              Tuyển dụng
            </Link>
            <button onClick={() => goToHash('#download')} className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-bounce">
              TẢI XUỐNG NGAY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-4 border-black bg-white hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-yellow-400 px-4 py-6 space-y-4">
          <Link 
            to="/home" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
              location.pathname === '/' || location.pathname === '/home' 
                ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : ''
            }`}
          >
            Trang chủ
          </Link>
          <Link 
            to="/features" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
              location.pathname === '/features' 
                ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : ''
            }`}
          >
            Tính năng
          </Link>
          <Link 
            to="/blog" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
              location.pathname === '/blog' 
                ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : ''
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
              location.pathname === '/about' 
                ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : ''
            }`}
          >
            Về chúng tôi
          </Link>
          <Link 
            to="/careers" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block text-lg font-bold hover:bg-black hover:text-yellow-400 hover:px-2 hover:py-1 hover:rounded transition-all duration-200 ${
              location.pathname === '/careers' 
                ? 'bg-black text-yellow-400 px-2 py-1 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : ''
            }`}
          >
            Tuyển dụng
          </Link>
          <button onClick={() => { setMobileMenuOpen(false); goToHash('#download'); }} className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-bounce">
            TẢI XUỐNG NGAY
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
