"use client";
import { useState } from "react";
import Btn from "../Btn/Btn";

export default function FormComment() {
    const [body, setBody] = useState({
        title: "",
        content: "",
        id: 2,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newComment = { ...body, id: Date.now() }
        console.log(newComment);

        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.ok) {
            setBody({ title: "", content: "", id: Date.now() });
        } else {
            alert("Failed to add comment!");
        }
    };
    return (
        <form onSubmit={(e) => { handleSubmit(e) }} className="w-1/3 mx-auto mt-10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-gray-500 text-4xl">Comment</h1>
            <input
                className="w-full h-[30px] text-center border-2 border-gray-300 rounded-md outline-none focus:border focus:border-solid focus:border-violet-500"
                type="text"
                name="title"
                placeholder="Title"
                value={body.title}
                onChange={(e) => setBody({ ...body, title: e.target.value })}
            />
            <textarea
                className="w-full h-[80px] text-center border-2 border-gray-300 rounded-md outline-none focus:border focus:border-solid focus:border-violet-500"
                name="content"
                placeholder="Content"
                value={body.content}
                onChange={(e) => setBody({ ...body, content: e.target.value })}
            ></textarea>
            <button type="submit">
                <Btn text="Submit" />
            </button>

        </form>
    )
}
