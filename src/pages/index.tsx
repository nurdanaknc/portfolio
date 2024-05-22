import InfoCard from "@/components/infoCard";
import React from "react";
import { LuSunDim, LuDot } from "react-icons/lu";


export default function Home() {
  return (
    <div className=" flex flex-col gap-10">

   
      <div className="flex flex-col gap-5 items-center">
      <div className=" bg-[#FFF3C8] px-[32px] py-[53px]">
        🍄 I am a Frontend Developer and Engineer. This space is created for me and for those who want to know me better. I’m currently working with TypeScript/JavaScript-based projects. I like Next.js and Redux {":)"}
      </div>
      <LuDot className="w-6 h-6"/>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className=" text-base font-medium hover:bg-[#FFF3C8] hover:underline hover:cursor-pointer w-fit">Post One</span>
          <p className="flex text-base font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..
          </p>
          <div className="w-full flex justify-end">
              <span className=" font-light italic text-xs">12.04.2024</span>
          </div>
          <div className="border-b py-3"/>
        </div>
        <div className="flex flex-col">
          <span className=" text-base font-medium hover:bg-[#FFF3C8] hover:underline hover:cursor-pointer w-fit">Post One</span>
          <p className="flex text-base font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..
          </p>
          <div className="w-full flex justify-end">
              <span className=" font-light italic text-xs">12.04.2024</span>
          </div>
          <div className="border-b py-3"/>
        </div>
        <div className="flex flex-col">
          <span className=" text-base font-medium hover:bg-[#FFF3C8] hover:underline hover:cursor-pointer w-fit">Post One</span>
          <p className="flex text-base font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..
          </p>
          <div className="w-full flex justify-end">
              <span className=" font-light italic text-xs">12.04.2024</span>
          </div>
          <div className="border-b py-3"/>
        </div>
        <div className="flex flex-col">
          <span className=" text-base font-medium hover:bg-[#FFF3C8] hover:underline hover:cursor-pointer w-fit">Post One</span>
          <p className="flex text-base font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..
          </p>
          <div className="w-full flex justify-end">
              <span className=" font-light italic text-xs">12.04.2024</span>
          </div>
          <div className="border-b py-3"/>
        </div>
      </div>
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
