import { useState } from 'react';
import { Shield, FileText, Lock, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function TermsAndConditions() {
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? '' : sectionId);
  };

  const sections = [
    {
      id: 'terms-of-use',
      title: 'ĐIỀU KHOẢN SỬ DỤNG',
      icon: <FileText className="w-8 h-8" strokeWidth={3} />,
      color: 'pink-500',
      content: {
        introduction: 'Chào mừng bạn đến với MUMII! Bằng việc sử dụng ứng dụng của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây.',
        sections: [
          {
            title: '1. Chấp nhận điều khoản',
            content: 'Khi bạn tải xuống, cài đặt hoặc sử dụng ứng dụng MUMII, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý bị ràng buộc bởi các điều khoản này.'
          },
          {
            title: '2. Mô tả dịch vụ',
            content: 'MUMII là ứng dụng ẩm thực thông minh giúp người dùng khám phá món ăn, quán ăn và chia sẻ trải nghiệm ẩm thực thông qua công nghệ AI và cộng đồng.'
          },
          {
            title: '3. Tài khoản người dùng',
            content: 'Bạn có trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu. Bạn đồng ý chấp nhận trách nhiệm cho tất cả các hoạt động xảy ra dưới tài khoản của bạn.'
          },
          {
            title: '4. Nội dung người dùng',
            content: 'Bạn giữ quyền sở hữu nội dung bạn tạo ra. Tuy nhiên, bằng cách chia sẻ nội dung trên MUMII, bạn cấp cho chúng tôi quyền sử dụng, hiển thị và phân phối nội dung đó.'
          },
          {
            title: '5. Cấm sử dụng',
            content: 'Bạn không được sử dụng MUMII để: vi phạm pháp luật, gửi spam, xâm phạm quyền của người khác, hoặc thực hiện bất kỳ hoạt động nào có thể gây hại cho ứng dụng hoặc người dùng khác.'
          }
        ]
      }
    },
    {
      id: 'privacy-policy',
      title: 'CHÍNH SÁCH BẢO MẬT',
      icon: <Lock className="w-8 h-8" strokeWidth={3} />,
      color: 'cyan-400',
      content: {
        introduction: 'Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.',
        sections: [
          {
            title: '1. Thông tin chúng tôi thu thập',
            content: 'Chúng tôi thu thập thông tin bạn cung cấp trực tiếp (tên, email, sở thích ẩm thực) và thông tin tự động (vị trí, thói quen sử dụng, dữ liệu thiết bị).'
          },
          {
            title: '2. Cách sử dụng thông tin',
            content: 'Thông tin được sử dụng để: cung cấp dịch vụ cá nhân hóa, cải thiện ứng dụng, gửi thông báo quan trọng, và phân tích xu hướng sử dụng.'
          },
          {
            title: '3. Chia sẻ thông tin',
            content: 'Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba, trừ khi có sự đồng ý của bạn hoặc yêu cầu pháp lý.'
          },
          {
            title: '4. Bảo mật dữ liệu',
            content: 'Chúng tôi sử dụng các biện pháp bảo mật tiên tiến như mã hóa SSL/TLS, xác thực đa yếu tố và kiểm tra bảo mật định kỳ để bảo vệ dữ liệu của bạn.'
          },
          {
            title: '5. Quyền của bạn',
            content: 'Bạn có quyền truy cập, chỉnh sửa, xóa dữ liệu cá nhân và rút lại sự đồng ý bất kỳ lúc nào thông qua cài đặt tài khoản.'
          }
        ]
      }
    },
    {
      id: 'intellectual-property',
      title: 'QUYỀN SỞ HỮU TRÍ TUỆ',
      icon: <Shield className="w-8 h-8" strokeWidth={3} />,
      color: 'yellow-400',
      content: {
        introduction: 'Tất cả nội dung, tính năng và công nghệ trong ứng dụng MUMII đều được bảo vệ bởi luật sở hữu trí tuệ.',
        sections: [
          {
            title: '1. Bản quyền',
            content: 'Ứng dụng MUMII, bao gồm giao diện, logo, nội dung và mã nguồn, đều thuộc sở hữu của MUMII và được bảo vệ bởi luật bản quyền.'
          },
          {
            title: '2. Thương hiệu',
            content: 'Tên "MUMII", logo và các nhãn hiệu khác là tài sản trí tuệ của chúng tôi. Bạn không được sử dụng chúng mà không có sự cho phép bằng văn bản.'
          },
          {
            title: '3. Nội dung người dùng',
            content: 'Bạn giữ quyền sở hữu nội dung bạn tạo ra. Tuy nhiên, bạn cấp cho MUMII giấy phép không độc quyền để sử dụng nội dung đó trong ứng dụng.'
          },
          {
            title: '4. Báo cáo vi phạm',
            content: 'Nếu bạn phát hiện vi phạm bản quyền hoặc sở hữu trí tuệ, vui lòng liên hệ với chúng tôi ngay lập tức để chúng tôi có thể xử lý.'
          }
        ]
      }
    },
    {
      id: 'user-responsibilities',
      title: 'TRÁCH NHIỆM NGƯỜI DÙNG',
      icon: <Users className="w-8 h-8" strokeWidth={3} />,
      color: 'lime-300',
      content: {
        introduction: 'Người dùng có trách nhiệm sử dụng ứng dụng một cách có trách nhiệm và tuân thủ các quy định.',
        sections: [
          {
            title: '1. Sử dụng hợp pháp',
            content: 'Bạn cam kết sử dụng MUMII chỉ cho mục đích hợp pháp và không vi phạm bất kỳ luật pháp nào của Việt Nam hoặc quốc tế.'
          },
          {
            title: '2. Nội dung phù hợp',
            content: 'Bạn không được đăng tải nội dung bất hợp pháp, có hại, đe dọa, lạm dụng, xúc phạm, hoặc vi phạm quyền riêng tư của người khác.'
          },
          {
            title: '3. Tương tác cộng đồng',
            content: 'Hãy tôn trọng các thành viên khác trong cộng đồng MUMII. Không spam, quấy rối hoặc có hành vi không phù hợp.'
          },
          {
            title: '4. Báo cáo vấn đề',
            content: 'Nếu bạn gặp phải nội dung hoặc hành vi không phù hợp, hãy sử dụng tính năng báo cáo của ứng dụng để chúng tôi có thể xử lý.'
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-8 md:pb-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 rotate-3 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-black text-2xl">CHÍNH SÁCH</p>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
            ĐIỀU KHOẢN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500" style={{ WebkitTextStroke: '2px black' }}>
              & CHÍNH SÁCH
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold mb-8 max-w-3xl mx-auto">
            Tìm hiểu về quyền lợi, trách nhiệm và cam kết của chúng tôi trong việc bảo vệ quyền riêng tư và cung cấp dịch vụ tốt nhất cho bạn.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-lime-300 border-4 border-black p-6 mb-6 md:mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="bg-yellow-400 border-4 border-black w-12 h-12 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-black">CẬP NHẬT LẦN CUỐI</h3>
          </div>
          <p className="text-lg font-bold">Ngày 23 tháng 10 năm 2025</p>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-20">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-8 text-left focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`bg-${section.color} border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                      {section.icon}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black">{section.title}</h2>
                  </div>
                  <div className={`bg-${section.color} border-4 border-black w-12 h-12 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform transition-transform ${openSection === section.id ? 'rotate-180' : ''}`}>
                    <span className="text-2xl font-black">+</span>
                  </div>
                </div>
              </button>

              {openSection === section.id && (
                <div className="border-t-4 border-black p-8 bg-gray-50">
                  <div className="max-w-4xl mx-auto">
                    <p className="text-xl font-bold mb-8 text-gray-800 leading-relaxed">
                      {section.content.introduction}
                    </p>
                    
                    <div className="space-y-6">
                      {section.content.sections.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                          <h3 className="text-2xl font-black mb-4 text-gray-900">{item.title}</h3>
                          <p className="text-lg font-bold text-gray-700 leading-relaxed">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-red-500 border-y-4 border-black py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-yellow-400 border-4 border-black w-12 h-12 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-black">THÔNG BÁO QUAN TRỌNG</h2>
            </div>
            <p className="text-lg font-bold mb-4">
              Chúng tôi có thể cập nhật các điều khoản này theo thời gian. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn qua email hoặc thông báo trong ứng dụng.
            </p>
            <p className="text-base font-bold">
              Việc tiếp tục sử dụng MUMII sau khi có thay đổi được coi là bạn đồng ý với các điều khoản mới.
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default TermsAndConditions;
