import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import NewsletterForm from "@/components/NewsletterForm"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
        author: post.author,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml, author} = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
    <main className="text-white container mx-auto px-4 py-8 mb-4">
        <h1 className="text-white text-6xl font-bold mb-4 prose-headings">{title}</h1>
        <div className="flex flex-row justify-between gap-5">
            <p className="text-xl order-first prose-p">By {author}</p>
            <p className="text-xl order-last prose-p">{pubDate}</p>
        </div>
        <article className="text-white prose lg:prose-xl /* dark:prose-dark */ font-normal" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p className="mt-8 prose-p">
            <Link href="/" className="text-blue-500 text-xl hover:underline hover:text-blue-700 hover:text-[#10b981]">← Back to home</Link>
        </p>
        <NewsletterForm />
    </main>
    )
}
