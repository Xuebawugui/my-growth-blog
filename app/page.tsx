import { getAllPosts } from '../lib/posts';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import PostCard from '../components/PostCard';

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export default async function Home() {
  const allPostsData = getAllPosts();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPostsData.map((post: Post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
} 