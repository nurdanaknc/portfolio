import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import InfoCard from "@/components/infoCard";
import PostList from "@/components/postList";
import { GetStaticProps } from "next";
import React from "react";
import { LuSunDim, LuDot } from "react-icons/lu";

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'blogContents'));
  const posts = await files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
          path.join(process.cwd(), 'src', 'blogContents', filename),
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

export default function Home(props: {posts: {title: string, smallText: string, publishDate: string, slug: string}[]}) {
  return (
    <div className=" flex flex-col gap-10">

   
      <div className="flex flex-col gap-5 items-center">
      <div className=" dark:bg-slate-800 bg-[#FFF3C8] px-[32px] py-[53px]">
        🍄 I am a Frontend Developer and Engineer. This space is created for me and for those who want to know me better. I’m currently working with TypeScript/JavaScript-based projects. I like Next.js and Redux {":)"}
      </div>
      <LuDot className="w-6 h-6"/>
       <PostList posts={props.posts}/>
      <LuDot className="w-6 h-6"/>
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-2">
          <InfoCard 
            project={[
              {
                projectName: "Project One",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                tags: ["React", "Redux", "TypeScript"],
                githubLink: "https1"
              },
              {
                projectName: "Project One",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                tags: ["React", "Redux", "TypeScript"],
                githubLink: "https2"
              },
              {
                projectName: "Project One",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                tags: ["React", "Redux", "TypeScript"],
                githubLink: "https3"
              },
              {
                projectName: "Project One",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                tags: ["React", "Redux", "TypeScript"],
                githubLink: "https4"
              },
              {
                projectName: "Project One",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                tags: ["React", "Redux", "TypeScript"],
                githubLink: "https5"
              }
            ]}
          />

        </div>

      </div>
      
      
      </div>
    </div>
  );
}
