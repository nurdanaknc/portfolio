import react from 'react';
import Link from 'next/link'

interface PostListProps {
     posts: {
        title: string;
        smallText: string;
        publishDate: string;
        slug?: string;
        }[]   
    }

export default function PostList(props: PostListProps) {

    const truncateContent = (content: string, maxLength: number) => {
        return content.length > maxLength ? content.slice(0, maxLength) + '...' : content + '...';
    };

    const createSlug = (title: string) => {
        return title.toLowerCase().replace(/ /g, '-');
    };

    return (
        <div className="flex flex-col gap-4 w-full">
        {props.posts.map((post, index) => (
            <div key={index} className="flex flex-col">
                <Link href={`/posts/${post.slug}`} className=" text-base font-medium hover:bg-[#FFF3C8] hover:underline hover:cursor-pointer w-fit">{post.title}</Link>
                <p className="flex text-base font-light">
                  {truncateContent(post?.smallText,119)}
                </p>
                <div className="w-full flex justify-end">
                    <span className=" font-light italic text-xs">{post.publishDate}</span>
                </div>
                <div className="border-b py-3"/>
            </div>
        ))}    
      </div>
    )
}