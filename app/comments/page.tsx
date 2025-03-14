"use client";
import FormComment from "@/components/FormComment/FormComment";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
interface Comment {
  title: string;
  content: string;
  id: number;
}

export default function Blog() {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("http://localhost:3000/api/posts");
      const comments: Comment[] = await res.json();
      setComments(comments);
    };
    fetchComments();
  }, [comments]);
  return (
    <div className="p-10 flex flex-col items-center gap-6">
            <Link href="/" className="absolute right-8 top-5 text-gray-500 p-2 rounded-2xl cursor-pointer border hover:bg-violet-500 hover:text-amber-50">Home</Link>
      <h1 className="text-gray-500 text-4xl text-center mt-5">Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id} className="w-[40vw] flex items-center gap-3 p-2 border border-gray-500 border-solid rounded-2xl">
          <div >
            <Image 
              className="rounded-full border-gray-500 border-2"
              src="https://picsum.photos/60/60" 
              width={60}
              height={60}
              alt="profile"
              loading="lazy"
              />
          </div>
          <div className="p-3 flex flex-col gap-4 ">
            <h3 className="text-gray-500 text-xl">{comment.title}</h3>
            <div className="h-[2px] w-[20vw] bg-gray-500"></div>
            <p className="text-gray-500 text-l">{comment.content}</p>
          </div>
        </div>
      ))}
      <FormComment />
    </div>
  );
}
