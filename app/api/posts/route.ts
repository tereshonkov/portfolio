import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json({ message: "Hello, World!" }); //Enter your JSON data here
}

export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json({ message: `Hello, ${body.name}!` }); //Edit your JSON data here
}

export async function DELETE(req: Request) {
    const { id } = await req.json();
    return NextResponse.json({ message: `Deleted ${id}` }); //Edit your JSON data here
}

export async function PUT(req: Request) {
    const data = await req.json();
    return NextResponse.json({ message: `Updated ${data.id}` }); //Edit your JSON data here
}