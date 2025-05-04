import Link from 'next/link';

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-blue-100 p-6 flex flex-col h-full">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-2xl font-bold text-blue-700 mb-2 hover:underline">{post.title}</h2>
      </Link>
      <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
        <span>📅</span>
        {new Date(post.date).toLocaleDateString('zh-CN', {
          year: 'numeric', month: '2-digit', day: '2-digit'
        })}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags && post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>
      <p className="text-gray-700 flex-1 mb-4">{post.excerpt}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm font-medium self-start"
      >
        阅读更多
      </Link>
    </article>
  );
} 