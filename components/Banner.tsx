export default function Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-12 mb-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow">即使是最糟糕的时候</h1>
        <p className="text-lg md:text-xl text-blue-100 mb-4">也要做最好的自己</p>
        {/* 可加社交图标 */}
      </div>
      {/* SVG 背景装饰，可后续替换为更复杂的科技感图案 */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="320" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 
