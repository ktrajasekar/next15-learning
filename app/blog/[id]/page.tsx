import { Post } from '@/types/Blog';
import BlogDetails from '@/components/BlogDetails';
import { notFound } from 'next/navigation';

async function fetchPost(id: string): Promise<Post> {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) {
        notFound();
    }
    return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await fetchPost(params.id);

    return (
        <div className="min-h-screen">
            <BlogDetails post={post} />
        </div>
    );
}