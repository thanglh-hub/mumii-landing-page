import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-black">MUMII</span>
            </div>
            <p className="font-bold">Định nghĩa lại trải nghiệm di động.</p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">SẢN PHẨM</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="/#features" className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Tính năng</a></li>
              <li><a href="/#pricing" className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Bảng giá</a></li>
              <li><a href="/#download" className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Tải xuống</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">START UP</h4>
            <ul className="space-y-2 font-bold">
              <li><Link to="/about" className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Về chúng tôi</Link></li>
              <li><a href="#" className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Blog</a></li>
              <li><Link to="/careers" className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Tuyển dụng</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">HỖ TRỢ</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="/#faq" className="hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">FAQs</a></li>
              <li><a href="/#contact" className="hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Liên hệ</a></li>
              <li><Link to="/terms" className="hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out">Chính sách và điều khoản</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">KẾT NỐI CHÚNG TÔI</h4>
            <ul className="space-y-2 font-bold">
              <li>
                <a 
                  href="https://www.facebook.com/app.mumii" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.threads.com/@formumii_corp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-600 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-300 ease-in-out"
                >
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-white pt-8 text-center font-bold">
          <p>© 2025 MUMII. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
