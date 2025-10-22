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
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar onHeightChange={(h) => setNavHeight(h)} />

      {/* Hero Section */}
      <section className="relative py-24 border-y-4 border-black" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFF 0 20px, #FFEDD5 20px 40px)', paddingTop: navHeight + 40 }}>
        <div className="absolute -top-6 left-6 rotate-6 bg-pink-500 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black text-white">ĐỘI NGŨ PHÁT TRIỂN</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-center mb-8" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
            GIỚI THIỆU VỀ CHÚNG TÔI
          </h1>
          <p className="text-2xl font-bold text-center max-w-4xl mx-auto">
            Chúng tôi là một đội ngũ đam mê công nghệ, tạo ra những ứng dụng di động tuyệt vời 
            để kết nối mọi người với ẩm thực và màu sắc.
          </p>
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
                  Mọi thứ bắt đầu từ một ý tưởng đơn giản: Tại sao không tạo ra một ứng dụng 
                  giúp mọi người khám phá màu sắc và ẩm thực một cách thú vị?
                </p>
                <p className="text-lg font-bold mb-4">
                  Chúng tôi tin rằng màu sắc và thức ăn có mối liên hệ mật thiết với nhau. 
                  Mỗi món ăn đều có màu sắc riêng, và mỗi màu sắc đều gợi lên những cảm xúc khác nhau.
                </p>
                <p className="text-lg font-bold">
                  Với sự hỗ trợ của AI, chúng tôi đã tạo ra một trải nghiệm độc đáo 
                  giúp người dùng khám phá thế giới ẩm thực qua lăng kính màu sắc.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-cyan-400 border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-white border-4 border-black p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-pink-500 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black text-white">2024</p>
                      <p className="text-sm font-bold text-white">Năm thành lập</p>
                    </div>
                    <div className="bg-yellow-400 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black">6+</p>
                      <p className="text-sm font-bold">Tháng phát triển</p>
                    </div>
                    <div className="bg-lime-300 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black">3</p>
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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-pink-500 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">NGUYỄN VĂN A</h3>
              <p className="text-lg font-bold text-center mb-4 text-pink-500">LEAD DEVELOPER</p>
              <p className="text-base font-bold text-center mb-6">
                Chuyên gia React Native với 5+ năm kinh nghiệm. 
                Đam mê tạo ra những ứng dụng di động mượt mà và thân thiện với người dùng.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="bg-black text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-red-500 text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-cyan-400 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Palette className="w-10 h-10" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">TRẦN THỊ B</h3>
              <p className="text-lg font-bold text-center mb-4 text-cyan-600">UI/UX DESIGNER</p>
              <p className="text-base font-bold text-center mb-6">
                Nhà thiết kế với con mắt thẩm mỹ tinh tế. 
                Chuyên về Neo Brutalism và tạo ra những giao diện độc đáo, thu hút.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="bg-black text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-red-500 text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-yellow-400 border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Code className="w-10 h-10" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">LÊ VĂN C</h3>
              <p className="text-lg font-bold text-center mb-4 text-yellow-600">BACKEND DEVELOPER</p>
              <p className="text-base font-bold text-center mb-6">
                Chuyên gia về AI và Machine Learning. 
                Phụ trách phát triển các thuật toán thông minh cho ứng dụng của chúng tôi.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="bg-black text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-red-500 text-white p-3 border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
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

