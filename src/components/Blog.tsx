import { useState } from 'react';
import { Search, User, ArrowRight, Star, TrendingUp, Lightbulb, Megaphone, ChefHat } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// Empty data structure - ready for content updates

const categories = [
  { name: "Tất Cả", color: "bg-gray-500", count: 0 },
  { name: "Tips & Tricks", color: "bg-pink-500", count: 0 },
  { name: "Công Thức", color: "bg-orange-500", count: 0 },
  { name: "Thông Báo", color: "bg-yellow-500", count: 0 },
  { name: "Cảm Hứng", color: "bg-cyan-500", count: 0 },
  { name: "Hướng Dẫn", color: "bg-lime-500", count: 0 },
  { name: "Cộng Đồng", color: "bg-purple-500", count: 0 }
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Empty state - ready for content

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      // Reset notification after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-400 border-b-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl sm:text-7xl font-black text-white mb-6" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
              MUMII BLOG
            </h1>
            <p className="text-2xl font-bold text-white mb-8 max-w-3xl mx-auto">
              Khám phá mẹo hay, công thức ngon, và những câu chuyện ẩm thực đầy cảm hứng từ cộng đồng MUMII
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết, công thức, mẹo hay..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 text-lg font-bold border-4 border-black rounded-none focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-black text-black">BLOG</p>
        </div>
        <div className="absolute -bottom-4 -left-4 bg-pink-500 border-4 border-black px-4 py-2 -rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-black text-white text-sm">INSPIRATION</p>
        </div>
      </section>

      {/* Featured Posts Section - Coming Soon */}
      <section className="py-16 bg-lime-300 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Star className="w-8 h-8 text-black" />
            <h2 className="text-4xl font-black">BÀI VIẾT NỔI BẬT</h2>
          </div>
          
          {/* Coming Soon Message */}
          <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-yellow-400 border-4 border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Lightbulb className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black">ĐANG CHUẨN BỊ NỘI DUNG</h3>
              <p className="text-xl font-bold text-gray-700 mb-6 max-w-2xl">
                Team phát triển đang chuẩn bị những bài viết nổi bật về mẹo hay, công thức ngon và câu chuyện ẩm thực thú vị
              </p>
              <div className="flex items-center gap-4">
                <div className="px-6 py-3 bg-pink-500 text-white font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  SẮP RA MẮT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter - Professional Design */}
      <section className="bg-white border-b-4 border-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black mb-2">LỌC THEO DANH MỤC</h3>
            <p className="text-lg font-bold text-gray-600">Chọn chủ đề bạn quan tâm</p>
          </div>
          
          {/* Filter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative p-4 font-black border-4 border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
                  category.name === "Tất Cả"
                    ? selectedCategory === category.name
                      ? 'bg-gradient-to-br from-pink-500 to-orange-500 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-gradient-to-br from-pink-100 to-orange-100 text-black hover:from-pink-200 hover:to-orange-200'
                    : selectedCategory === category.name
                      ? `${category.color} text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
                      : 'bg-white text-black hover:bg-gray-50'
                }`}
              >
                {/* Category Icon */}
                <div className="flex items-center justify-center mb-3">
                  <div className={`w-12 h-12 border-4 border-black flex items-center justify-center ${
                    category.name === "Tất Cả"
                      ? selectedCategory === category.name ? 'bg-white' : 'bg-gradient-to-br from-pink-500 to-orange-500'
                      : selectedCategory === category.name ? 'bg-white' : category.color
                  }`}>
                    {category.name === "Tất Cả" && <TrendingUp className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                    {category.name === "Tips & Tricks" && <Lightbulb className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                    {category.name === "Công Thức" && <ChefHat className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                    {category.name === "Thông Báo" && <Megaphone className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                    {category.name === "Cảm Hứng" && <Star className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                    {category.name === "Hướng Dẫn" && <ArrowRight className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                    {category.name === "Cộng Đồng" && <User className={`w-6 h-6 ${selectedCategory === category.name ? 'text-black' : 'text-white'}`} />}
                  </div>
                </div>
                
                {/* Category Name */}
                <div className="text-center">
                  <div className="text-sm font-black mb-1">{category.name}</div>
                  <div className={`text-xs font-bold ${
                    selectedCategory === category.name ? 'text-white' : 'text-gray-500'
                  }`}>
                    {category.count} bài viết
                  </div>
                </div>
                
                {/* Active Indicator */}
                {selectedCategory === category.name && (
                  <div className={`absolute -top-2 -right-2 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center ${
                    category.name === "Tất Cả" ? 'bg-yellow-400' : 'bg-yellow-400'
                  }`}>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                )}
                
                {/* Special indicator for "Tất Cả" */}
                {category.name === "Tất Cả" && (
                  <div className="absolute -top-1 -left-1 bg-yellow-400 border-2 border-black px-2 py-1 text-xs font-black text-black rotate-12">
                    ALL
                  </div>
                )}
              </button>
            ))}
          </div>
          
        </div>
      </section>

      {/* Dynamic Posts Section based on filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <TrendingUp className="w-8 h-8 text-black" />
            <h2 className="text-4xl font-black">
              {selectedCategory === "Tất Cả" ? "TẤT CẢ BÀI VIẾT" : `BÀI VIẾT ${selectedCategory.toUpperCase()}`}
            </h2>
          </div>
          
          {/* Dynamic Content based on selected category */}
          {selectedCategory === "Tất Cả" ? (
            /* General Coming Soon Message */
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 border-4 border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                 <h3 className="text-3xl font-black mb-4 text-black">CHƯA CÓ BÀI VIẾT NÀO</h3>
                 <p className="text-xl font-bold text-gray-700 max-w-2xl">
                   Hãy quay lại sau nhé!
                 </p>
              </div>
            </div>
          ) : (
            /* Category-specific Coming Soon Message */
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className={`${categories.find(cat => cat.name === selectedCategory)?.color || 'bg-gray-500'} border-4 border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
                  {selectedCategory === "Tips & Tricks" && <Lightbulb className="w-10 h-10 text-white" />}
                  {selectedCategory === "Công Thức" && <ChefHat className="w-10 h-10 text-white" />}
                  {selectedCategory === "Thông Báo" && <Megaphone className="w-10 h-10 text-white" />}
                  {selectedCategory === "Cảm Hứng" && <Star className="w-10 h-10 text-white" />}
                  {selectedCategory === "Hướng Dẫn" && <ArrowRight className="w-10 h-10 text-white" />}
                  {selectedCategory === "Cộng Đồng" && <User className="w-10 h-10 text-white" />}
                </div>
                <h3 className="text-3xl font-black mb-4 text-black">CHƯA CÓ BÀI VIẾT NÀO</h3>
                <p className="text-xl font-bold text-gray-700 mb-6 max-w-2xl">
                  Chúng tôi chưa có bài viết nào trong danh mục <span className="text-black font-black">"{selectedCategory}"</span>.
                  <br />
                  Hãy quay lại sau nhé!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-cyan-400 to-blue-500 border-y-4 border-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Megaphone className="w-8 h-8 text-black" />
              <h2 className="text-3xl font-black">ĐĂNG KÝ NHẬN TIN</h2>
            </div>
            
            <p className="text-lg font-bold mb-6">
              Nhận ngay những bài viết mới nhất về ẩm thực, mẹo hay và cập nhật từ MUMII
            </p>
            
             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
               <input
                 type="email"
                 placeholder="Nhập email của bạn"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="flex-1 px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                 required
               />
               <button 
                 type="submit"
                 className="px-6 py-3 bg-black text-white font-black border-4 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] transition-all"
               >
                 ĐĂNG KÝ
               </button>
             </form>
             
             {/* Success Notification */}
             {isSubscribed && (
               <div className="mt-6 max-w-md mx-auto">
                 <div className="bg-green-500 text-white font-black border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                   ĐÃ GỬI THÀNH CÔNG!
                   <br />
                   <span className="text-sm">Cảm ơn bạn đã đăng ký nhận tin</span>
                 </div>
               </div>
             )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
