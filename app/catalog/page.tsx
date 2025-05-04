import { getAllPosts } from '../../lib/posts';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function CatalogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-2">文章目录</h1>
          <p className="text-blue-100">共 {posts.length} 篇文章</p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <ul className="divide-y divide-blue-50">
            {posts.map((post) => (
              <li key={post.slug} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex-1">
                  <Link href={`/posts/${post.slug}`} className="text-lg font-semibold text-blue-700 hover:underline">
                    {post.title}
                  </Link>
                  <div className="text-gray-400 text-sm mt-1">
                    {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {post.tags && post.tags.map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/tags/${encodeURIComponent(tag)}`}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
} 