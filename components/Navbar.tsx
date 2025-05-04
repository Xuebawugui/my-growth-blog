import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-extrabold text-blue-700 tracking-wide">个人成长博客</div>
        <div className="space-x-6 text-base font-medium text-gray-700">
          <Link href="/">首页</Link>
          <Link href="/catalog">目录</Link>
          <Link href="/tags">标签</Link>
          <Link href="/about">关于我</Link>
        </div>
      </div>
    </nav>
  );
} 