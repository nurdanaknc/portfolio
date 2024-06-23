import InfoCard from "@/components/infoCard";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from "next";
import React from "react";
import 'prismjs/themes/prism-okaidia.css';

export const getStaticProps: GetStaticProps = async () => {

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
            projects,
        },
    };
}

export default function Projects({ projects }: { projects: { projectName: string, projectDescription: string, tags: string[], githubLink: string }[] }) {
    return (
        <div>
            <InfoCard
                fullWidth={true}
                project={projects}
            />
        </div>
    )
}