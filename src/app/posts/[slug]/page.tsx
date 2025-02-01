import Header from '@/app/components/Header';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

interface PostProps {
  params: { slug: string };
}

export default function Post({ params }: PostProps) {
  const post = getPostBySlug('posts', params.slug);
  if (!post) {
    return <p>Post no encontrado</p>;
  }
  return (
    <div className='p-4 min-h-screen bg-background'>
      <Header></Header>
      <h1 className='mt-4 text-4xl'>{post.title}</h1>
      <p className='text-xl opacity-80 font-Afacad_Flux'>{post.date}</p>
      <span className='flex mb-2 mt-2 border-b-2 border-dashed border-primary'></span>
      <div className='font-Afacad_Flux text-2xl' dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts('posts');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
