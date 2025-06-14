import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-2">关于我</h1>
          <p className="text-blue-100">用来激励自己的，老吴</p>
        </div>
      </div>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">个人简介</h2>
          <p className="text-gray-700 mb-4">
            你好，我是 <span className="font-bold">学吧乌龟</span>，欢迎你的到来。
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">博客宗旨</h2>
          <p className="text-gray-700 mb-4">
            这个博客基于权威著作，剖析人们迈向卓越的路径，分享从哲学、心理学和实践智慧中汲取的成长策略。愿与你共同挖掘，迈向更优秀的人生。<br />
            成长是一场关于技能、心智和生活的综合冒险。在这里，我会分享如何通过刻意练习、复盘总结和拥抱变化实现突破。无论你是想提升效率、找到方向，还是 simply 想活得更充实，这里都有值得你驻足的故事和方法。
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">联系方式</h2>
          <p className="text-gray-700 mb-4">
            邮箱：<span className="underline">xuebawugui@gmail.com</span> <br />
            b站：<span className="underline">学吧乌龟 24248530148_bili</span> <br />
            油管：<span className="underline">xuebawugui</span> <br />
          </p>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 bg-blue-50 py-2">
            "持续成长，终身学习。"
          </blockquote>
        </div>
      </main>
    </div>
  );
} 
