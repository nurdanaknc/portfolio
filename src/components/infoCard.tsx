import React from "react";
import { LuExternalLink } from "react-icons/lu";


interface InfoCardProps {
    fullWidth?: boolean;
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
                    props.fullWidth
                        ? "col-span-2"
                        :
                    props.project.length === 1
                        ? "col-span-2"
                        : (index === 2)
                        ? "col-span-2"
                        : "col-span-1"
                }`}>
                    <div className=" bg-[#F8F8F7] dark:bg-[#4F4F4F] p-[11px] flex flex-col gap-1 h-[138px] justify-between ">
                        <span className=" text-base font-medium">{project.projectName}</span>
                        <span className=" text-sm font-normal overflow-auto">{project.projectDescription}</span>
                        <div className="flex flex-row justify-between items-end">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag:any, index:number) => (
                                    <span key={index} className=" text-xs font-light">#{tag}</span>
                                ))}
                            </div>
                            <div>
                            <a href={project.githubLink} target="_blank" rel="noreferrer noopener">
                                <LuExternalLink className="w-6 h-6" />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            )).slice(0, props.fullWidth ? props.project.length : 3)
            }

        </div>
    );
}
