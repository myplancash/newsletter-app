import { useEffect, useState } from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";
import { BlogPost } from "@/types";

export default function Posts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const sortedPosts = await getSortedPostsData();
            setPosts(sortedPosts);
        }
        fetchPosts();
    }, []);

    return (
        <section className="mt-12 mb-12 mx-auto max-w-2xl w-full animate-fadeIn transition duration-200 ease-out">
            <h2 className="text-5xl font-bold text-white/90 dark:text-white/90 mb-6">Blog:</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>  
        </section>
    );
}
