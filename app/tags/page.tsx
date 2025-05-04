import { getAllTags, getAllPosts } from '../../lib/posts';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();
  
  // 统计每个标签的文章数量
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = posts.filter(post => post.tags && post.tags.includes(tag)).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-2">标签云</h1>
          <p className="text-blue-100">
            共 {tags.length} 个标签
          </p>
        </div>
      </div>
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors flex items-center gap-2"
              >
                <span>{tag}</span>
                <span className="bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full text-xs">
                  {tagCounts[tag]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 