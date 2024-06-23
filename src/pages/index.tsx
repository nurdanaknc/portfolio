import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import InfoCard from "@/components/infoCard";
import PostList from "@/components/postList";
import { GetStaticProps } from "next";
import React, { use, useEffect } from "react";
import { LuSunDim, LuDot } from "react-icons/lu";

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

  const projectFile = fs.readFileSync(path.join(process.cwd(), 'src', 'contents', 'projects.mdx'), 'utf-8');
  const projectSections = projectFile.split('---').filter(section => section.trim() !== '');

  const projects = projectSections.map(section => {
    const { data: frontMatter } = matter(`---${section}---`);
    console.log(frontMatter);
    return {
      projectName: frontMatter.projectName || 'Untitled',
      projectDescription: frontMatter.projectDescription || 'No description available.',
      tags: frontMatter.tags || [],
      githubLink: frontMatter.githubLink || 'Unknown link',
    };
  });

  return {
    props: {
      posts,
      projects,
    },
  };
}



export default function Home(props: { posts: { title: string, smallText: string, publishDate: string, slug: string }[], projects: { projectName: string, projectDescription: string, tags: string[], githubLink: string }[] }) {
  useEffect(() => {
    console.log(props.projects);
  }, [props.projects])
  return (
    <div className=" flex flex-col gap-10">


      <div className="flex flex-col gap-5 items-center">
        <div className=" dark:bg-[#4F4F4F] bg-[#FFF3C8] px-[32px] py-[53px]">
          🍄 I am a Frontend Developer and Engineer. This space is created for me and for those who want to know me better. I’m currently working with TypeScript/JavaScript-based projects. I like Next.js and Redux {":)"}
        </div>
        <LuDot className="w-6 h-6" />
        <PostList posts={props.posts} />
        <LuDot className="w-6 h-6" />
        <div className="grid grid-cols-2 w-full">
          <div className="col-span-2">

            <InfoCard project={props.projects} />

          </div>

        </div>


      </div>
    </div>
  );
}
