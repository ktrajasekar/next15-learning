'use client';

import { useRouter } from 'next/navigation';
import { Post } from '@/types/Blog';

interface BlogDetailsProps {
    post: Post;
}

export default function BlogDetails({ post }: BlogDetailsProps) {
    const router = useRouter();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => router.push('/blog')}
            >
                Back to List
            </button>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="text-sm text-gray-500">
                <p>Tags: {post.tags.join(', ')}</p>
                <p>Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}</p>
                <p>Views: {post.views}</p>
                <p>Author ID: {post.userId}</p>
            </div>
        </div>
    );
}