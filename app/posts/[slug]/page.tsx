import { getPost, getAllPosts } from '../../../lib/posts';
import Navbar from '../../../components/Navbar';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* 文章头部 */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-100">
            <div className="flex items-center gap-1">
              <span>📅</span>
              {new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {post.tags && post.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* 文章内容 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-md p-8">
          <div 
            className="prose prose-lg prose-blue max-w-none prose-headings:text-blue-900 prose-a:text-blue-600 prose-strong:text-blue-900 prose-code:text-blue-900 prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        {/* 返回首页 */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </main>
    </div>
  );
} 