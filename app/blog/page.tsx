import Head from 'next/head'
import React from 'react'
interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}


export default async function Blog() {
    const posts: Post[] = await getPosts();
  return (
    <>
    <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
    </Head>
    {posts.map((post) => (
        <div key={post.id} className='flex justify-center items-center'>
            <div className='border border-solid border-black w-[40%] h-[40%] flex flex-col p-5 gap-5 rounded-2xl bg-amber-100'>
                <div className='w-full border border-solid border-black'>{post.title}</div>
                <div className='w-full h-full border border-solid border-black'>{post.body}</div>
            </div>
        </div>
    ))}
    </>
  )
}

