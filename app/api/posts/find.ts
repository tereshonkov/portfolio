import { NextResponse } from "next/server";

export async function GET(req: Request) {           //GET request on search query
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    const currentArray: any[] = [];                 //Array of objects
    currentArray.filter((item) => item.title.toLowerCase().includes(query?.toLowerCase()));

    return NextResponse.json(currentArray);
}