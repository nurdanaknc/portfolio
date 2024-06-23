// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

type Data = {
  posts: {
    title: string;
    smallText: string;
    publishDate: string;
    slug: string;
  }[];
};

export default function getBlogContent(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'blogContents'));
  const posts = files.map((filename) => {
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
  res.status(200).json({ posts });
   
}
