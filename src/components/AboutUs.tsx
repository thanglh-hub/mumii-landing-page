import { Users, Lightbulb, Code, Palette, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function AboutUs() {
  const [navHeight, setNavHeight] = useState(80);

  useEffect(() => {
    const el = document.getElementById('app-navbar');
    if (el) setNavHeight(el.offsetHeight);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar onHeightChange={(h) => setNavHeight(h)} />

      {/* Hero Section */}
      <section className="relative py-12 border-y-4 border-black" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFF 0 20px, #FFEDD5 20px 40px)', paddingTop: navHeight + 20 }}>
        <div className="absolute -top-6 left-6 rotate-6 bg-pink-500 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black text-white">ĐỘI NGŨ PHÁT TRIỂN</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-center mb-4" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
            VỀ CHÚNG TÔI
          </h1>
        </div>
      </section>

      {/* FPT University Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/images/fptuhcm.jpg" 
                  alt="FPT University HCM Campus" 
                  className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 border-4 border-black px-4 py-2 rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black text-white text-sm">FPT UNIVERSITY</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg font-bold mb-4">
                  Chúng tôi là nhóm sinh viên đến từ <span className="text-orange-600 font-black">Đại học FPT – Cơ sở Hồ Chí Minh</span>, 
                  cùng nhau thực hiện dự án MUMII trong khuôn khổ học phần <span className="text-orange-700 font-black">Khởi nghiệp – EXE201</span>.
                </p>
                <p className="text-lg font-bold mb-4">
                  MUMII không chỉ là một bài tập lớn trên giảng đường, mà là bước khởi đầu cho một hành trình nghiêm túc – 
                  nơi chúng tôi thử sức với việc biến ý tưởng thành sản phẩm thực tế.
                </p>
                <p className="text-lg font-bold">
                  Chúng tôi tin rằng khởi nghiệp không chỉ bắt đầu từ vốn hay ý tưởng, mà từ tinh thần 
                  <span className="text-pink-600 font-black"> dám làm, dám thử, và dám thất bại</span> để tạo nên giá trị mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-lime-300 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8" strokeWidth={3} />
                </div>
                <h2 className="text-4xl font-black mb-6">Ý TƯỞNG PHÁT TRIỂN</h2>
                <p className="text-lg font-bold mb-4">
                Chúng tôi tin rằng ăn uống không chỉ là chuyện thưởng thức món ăn, mà còn là cách con người chia sẻ cảm xúc và kết nối với nhau.
                </p>
                <p className="text-lg font-bold mb-4">
                Mỗi người đều có sở thích, thói quen và những khoảnh khắc riêng quanh bàn ăn — và MUMII được tạo ra để giúp mọi người khám phá, lưu giữ và chia sẻ những điều đó một cách dễ dàng hơn.
                </p>
                <p className="text-lg font-bold">
                Dựa trên AI và công nghệ học máy, MUMII mang đến một trải nghiệm ẩm thực thông minh và gần gũi:
                nơi người dùng có thể tìm món ăn phù hợp, khám phá địa điểm mới, trò chuyện cùng cộng đồng và biến những lựa chọn nhỏ hằng ngày thành những trải nghiệm thú vị.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-cyan-400 border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-white border-4 border-black p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-pink-500 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black text-white">2025</p>
                      <p className="text-sm font-bold text-white">Năm thành lập</p>
                    </div>
                    <div className="bg-yellow-400 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black">6+</p>
                      <p className="text-sm font-bold">Tháng phát triển</p>
                    </div>
                    <div className="bg-lime-300 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black">6</p>
                      <p className="text-sm font-bold">Thành viên</p>
                    </div>
                    <div className="bg-pink-500 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black text-white">∞</p>
                      <p className="text-sm font-bold text-white">Đam mê</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-black">SÁNG TẠO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
            ĐỘI NGŨ PHÁT TRIỂN
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-pink-500 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black text-center mb-4">NGUYỄN HOÀNG NHẬT ÂN</h3>
              <p className="text-lg font-bold text-center mb-4 text-pink-500">BACKEND DEVELOPER</p>
              <p className="text-base font-bold text-center mb-6">
                Phụ trách thiết kế và phát triển hệ thống backend của ứng dụng. 
                Tập trung vào hiệu năng, bảo mật và khả năng mở rộng của nền tảng MUMII.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-cyan-400 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Palette className="w-10 h-10" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">LÊ HỮU THẮNG</h3>
              <p className="text-lg font-bold text-center mb-4 text-cyan-600">FRONTEND DEVELOPER</p>
              <p className="text-base font-bold text-center mb-6">
                Phụ trách xây dựng giao diện và logic hiển thị của ứng dụng. 
                Kết hợp cùng UI/UX team để đảm bảo sản phẩm hoàn thiện đúng định hướng thiết kế và trải nghiệm.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-yellow-400 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Code className="w-10 h-10" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">ĐẶNG PHƯƠNG NAM</h3>
              <p className="text-lg font-bold text-center mb-4 text-yellow-600">BACKEND DEVELOPER</p>
              <p className="text-base font-bold text-center mb-6">
                Phát triển và tối ưu các API, xử lý dữ liệu, và tích hợp các tính năng AI vào hệ thống. 
                Đảm bảo hoạt động ổn định và chính xác của nền tảng MUMII.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-lime-300 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-10 h-10" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black text-center mb-4">NGUYỄN THỊ THANH NGÂN</h3>
              <p className="text-lg font-bold text-center mb-4 text-lime-600">MARKETING & COMS</p>
              <p className="text-base font-bold text-center mb-6">
                Phụ trách truyền thông, lập kế hoạch marketing và định vị thương hiệu MUMII. 
                Quản lý nội dung, chiến dịch quảng bá và tương tác với người dùng.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-orange-500 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">PHẠM GIA KHIÊM</h3>
              <p className="text-lg font-bold text-center mb-4 text-orange-600">FINANCE & OPERATIONS MANAGER</p>
              <p className="text-base font-bold text-center mb-6">
                Quản lý kế hoạch tài chính, ngân sách và vận hành dự án. 
                Phụ trách phân bổ nguồn lực, dự trù chi phí và đảm bảo hiệu quả trong quá trình phát triển sản phẩm.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-purple-500 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">NGUYỄN THỊ THÙY NGÂN</h3>
              <p className="text-lg font-bold text-center mb-4 text-purple-600">FRONTEND DEVELOPER</p>
              <p className="text-base font-bold text-center mb-6">
                Phụ trách xây dựng giao diện và logic hiển thị của ứng dụng. 
                Kết hợp cùng UI/UX team để đảm bảo sản phẩm hoàn thiện đúng định hướng thiết kế và trải nghiệm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-400 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block">
              <div className="bg-pink-500 border-4 border-black w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h2 className="text-4xl font-black mb-6">SỨ MỆNH CỦA CHÚNG TÔI</h2>
              <p className="text-xl font-bold mb-6">
                Chúng tôi tin rằng công nghệ nên làm cho cuộc sống trở nên thú vị và dễ dàng hơn. 
                Mục tiêu của chúng tôi là tạo ra những ứng dụng không chỉ hữu ích mà còn mang lại niềm vui cho người dùng.
              </p>
              <p className="text-lg font-bold">
                Mỗi dòng code, mỗi pixel thiết kế đều được tạo ra với tình yêu và đam mê. 
                Chúng tôi không chỉ xây dựng ứng dụng, chúng tôi xây dựng trải nghiệm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;

