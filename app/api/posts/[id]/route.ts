import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    try {
        const { id } = await context.params;
        const res = await fetch(`https://dummyjson.com/posts/${id}`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        const post = await res.json();
        return NextResponse.json(post);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json(
            { error: 'Server error: ' + errorMessage },
            { status: 500 }
        );
    }
}