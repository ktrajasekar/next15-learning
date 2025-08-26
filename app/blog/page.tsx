import Link from 'next/link';
import { Post } from '@/types/Blog';
import Button from '@/components/Button';

async function fetchPosts(): Promise<Post[]> {
    const API_URL = process.env.APP_URL;
    const res = await fetch(`${API_URL}/api/posts`, {
        cache: 'no-store', // Prevent caching
    });
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

export default async function BlogPage() {
    const posts = await fetchPosts();
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
                <div className="grid gap-6">
                    {posts && posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition block"
                        >
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-600 mt-2">{post.body.substring(0, 100)}...</p>
                            <div className="mt-2 text-sm text-gray-500">
                                <span>Tags: {post.tags.join(', ')}</span> |{' '}
                                <span>Likes: {post.reactions.likes}</span>
                            </div>
                            <Button>Read More</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}