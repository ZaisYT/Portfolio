import Header from '@/app/components/Header';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

interface PostProps {
  params: Promise<{ slug: string }>;
}

export default async function Post({ params }: PostProps) {
  // Await the promise to obtain the route parameters
  const { slug } = await params;
  const post = getPostBySlug('bugs', slug);
  if (!post) {
    return <p>Post no encontrado</p>;
  }
  return (
    <div className="p-4 min-h-screen bg-background">
      <Header />
      <h1 className="mt-4 text-4xl">{post.title}</h1>
      <p className="text-xl opacity-80 font-Afacad_Flux">{post.date}</p>
      <span className="flex mb-2 mt-2 border-b-2 border-dashed border-primary"></span>
      <div
        className="font-Afacad_Flux text-2xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('bugs');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
