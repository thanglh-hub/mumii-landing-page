import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-black">MUMII</span>
            </div>
            <p className="font-bold">Định nghĩa lại trải nghiệm di động.</p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4">SẢN PHẨM</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="/#features" className="hover:underline">Tính năng</a></li>
              <li><a href="/#pricing" className="hover:underline">Bảng giá</a></li>
              <li><a href="/#download" className="hover:underline">Tải xuống</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4">START UP</h4>
            <ul className="space-y-2 font-bold">
              <li><Link to="/about" className="hover:underline">Về chúng tôi</Link></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Tuyển dụng</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4">HỖ TRỢ</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="/#faq" className="hover:underline">FAQs</a></li>
              <li><a href="/#contact" className="hover:underline">Liên hệ</a></li>
              <li><a href="#" className="hover:underline">Chính sách và điều khoản</a></li>
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
