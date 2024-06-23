import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostList from "@/components/postList";
import React from "react";
import { GetStaticProps } from 'next';
import 'prismjs/themes/prism-okaidia.css';

interface PostsPageProps {
    posts: {
        title: string;
        smallText: string;
        publishDate: string;
        slug: string;
    }[];
}

export const getStaticProps: GetStaticProps = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), 'src', 'contents', 'blogContents'));
    const posts = await files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join(process.cwd(), 'src', 'contents', 'blogContents', filename),
            'utf-8'
        );
        const { data: frontMatter } = matter(markdownWithMeta);
        console.log(frontMatter);
        return {
            title: frontMatter.title || 'Untitled',
            smallText: frontMatter.smallText || 'No description available.',
            publishDate: frontMatter.publishDate || 'Unknown date',
            slug: filename.replace('.mdx', ''),
          };
    });

    return {
        props: {
            posts,
        },
    };
}

export default function Posts({ posts }: PostsPageProps) {

    return (
        
    <>
    <PostList posts={posts}/>
    </>
    );
}