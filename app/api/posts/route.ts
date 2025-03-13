import { NextResponse } from "next/server";
import data from "./data";

export async function GET(req: Request) {
    return NextResponse.json(data); //Enter your JSON data here
}

export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json(data.push(body)); //Edit your JSON data here
}

// export async function DELETE(req: Request) {
//     const { id } = await req.json();
//     return NextResponse.json({ message: `Deleted ${id}` }); //Edit your JSON data here
// }

export async function PUT(req: Request) {
    const updatedPost = await req.json();
    const index = data.findIndex(post => post.id === updatedPost.id);

    if (index !== -1) {
        data[index] = { ...data[index], ...updatedPost }; // Оновлення тільки переданими полями
        return NextResponse.json({ message: "Post updated", updatedPost: data[index] });
    } else {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
}