import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { promises as fs } from 'fs'
import { BlogPost } from '@/types'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export async function getSortedPostsData() {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        
        // Fetch contentHtml asynchronously
        const processedContent = await remark().use(html).process(matterResult.content);
        const contentHtml = processedContent.toString();

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            author: matterResult.data.author,
            date: matterResult.data.date,
            contentHtml,
        };

        return blogPost;
    }));

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}


export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    console.log("Content HTML:", contentHtml); 

    if (!contentHtml) {
        throw new Error("Content HTML is missing or empty.");
    }

    const blogPostWithHTML: BlogPost = {
        id,
        title: matterResult.data.title,
        author: matterResult.data.author,
        date: matterResult.data.date,
        contentHtml,
    };

    return blogPostWithHTML;
}
