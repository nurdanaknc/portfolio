import React from "react";
import { LuExternalLink } from "react-icons/lu";


interface InfoCardProps {
    project: {
        projectName: string;
        projectDescription: string;
        tags: string[];
        githubLink: string;
    }[];
}

export default function InfoCard(props: InfoCardProps) {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">

            {props.project?.map((project: any, index:number) => (
                <div   
                key={index}
                className={`${
                    props.project.length === 1
                        ? "col-span-2"
                        : (props.project.length % 2 !== 0 && index === props.project.length - 1)
                        ? "col-span-2"
                        : "col-span-1"
                }`}>
                    <div className=" bg-[#F8F8F7] p-[11px] flex flex-col gap-1 h-[138px] justify-between ">
                        <span className=" text-base font-medium">{project.projectName}</span>
                        <span className=" text-sm font-normal overflow-auto">{project.projectDescription}</span>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2">
                                {project.tags.map((tag) => (
                                    <span className=" text-xs font-light">#{tag}</span>
                                ))}
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noreferrer noopener">
                                <LuExternalLink className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}
