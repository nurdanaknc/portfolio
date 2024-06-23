// pages/posts/[slug].tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next';
import Mdx from '@/components/mdx';
import Navbar from '@/components/navbar';
import { LuChevronLeft } from 'react-icons/lu';
import { useRouter } from 'next/router';
import 'prismjs/themes/prism-okaidia.css';




interface PostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    publishDate: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'contents', 'blogContents'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src', 'contents', 'blogContents', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
};

const PostPage = ({ source, frontMatter }: PostProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <LuChevronLeft className="w-4 h-4 cursor-pointer" onClick={ router.back }/>
        <h1 className="text-base font-medium hover:bg-[#FFF3C8] dark:hover:bg-[#4F4F4F] hover:underline hover:cursor-pointer w-fit">{frontMatter.title}</h1>
        <span className="font-light italic text-xs">{frontMatter.publishDate}</span>
        <div >
          <Mdx source={source} /> {/* Custom Mdx */}
        </div>
      </div>
      <div className="w-full flex justify-end">
        
      </div>
    </div>
  );
};



export default PostPage;
