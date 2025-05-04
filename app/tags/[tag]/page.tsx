import { getPostsByTag, getAllTags } from '../../../lib/posts';
import Navbar from '../../../components/Navbar';
import Banner from '../../../components/Banner';
import PostCard from '../../../components/PostCard';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);
  
  if (!posts.length) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            标签: {decodedTag}
          </h1>
          <p className="text-blue-100">
            共 {posts.length} 篇文章
          </p>
        </div>
      </div>
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
} 