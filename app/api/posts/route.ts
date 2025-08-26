import { NextRequest, NextResponse } from 'next/server';
import { Post } from '@/types/Blog';

// GET: Fetch list of posts
export async function GET() {
    try {
        const res = await fetch('https://dummyjson.com/posts?limit=10');
        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
        }
        const data = await res.json();
        return NextResponse.json(data.posts, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: 'Server error: ' + errorMessage }, { status: 500 });
    }
}

// POST: Create a new post (simulated)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, body: content, tags, userId } = body;

        if (!title || !content || !userId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Simulate creating a post (DummyJSON is read-only)
        const newPost: Post = {
            id: Date.now(), // Simulated ID
            title,
            body: content,
            tags: tags || [],
            reactions: { likes: 0, dislikes: 0 },
            views: 0,
            userId,
        };
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: 'Server error: ' + errorMessage }, { status: 500 });
    }
}