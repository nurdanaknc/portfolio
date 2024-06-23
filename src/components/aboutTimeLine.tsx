import React from 'react';
import { LuGraduationCap, LuSquareCode } from 'react-icons/lu';

export default function AboutTimeLine() {
  return (
   <div className="p-6">
      <div className="flex flex-col items-center mb-6 border-b border-gray-200 dark:border-[#ffffff21] pb-6">
        <LuSquareCode className="w-6 h-6" />
        <div className="text-gray-700 dark:text-[#FFFEFE] font-light text-lg">August 2023 -</div>
        <h2 className="text-xl font-normal">Junior Frontend Developer @Venhancer</h2>
        <div className="mt-2 font-light italic">
          <h3 className=" font-light italic">Projects</h3>
          <p className="mt-1 underline">
            Fibasigorta Digital Insurance
          </p>
          <ul className="list-inside">
            <li>- Utilized Next.js with TypeScript to develop and maintain Online, Web and CMS branches, focusing on functionality and user experience.</li>
            <li>- Assisted in implementing and optimizing state management solutions using Redux Toolkit and Context API, enhancing application performance and maintainability.</li>
            <li>- Collaborated with senior developers and designers to implement project requirements and ensure adherence to best practices.</li>
          </ul>
        </div>

      </div>
      <div className="flex flex-col items-center mb-6 border-b border-gray-200 dark:border-[#ffffff21] pb-6">
      <LuSquareCode className="w-6 h-6" />
        <div className="text-gray-700 dark:text-[#FFFEFE] font-light text-lg">July 2023 - August 2023</div>
        <h2 className="text-xl font-normal">Frontend Developer Intern @Venhancer</h2>
        <div className="mt-2 font-light italic">
          <h3 className="font-light italic">Projects</h3>
          <p className="mt-1 underline">
            Intranet
          </p>
          <p>
            - I&apos;ve worked as a full-stack developer on a web project developed with my internship group for the company I was interning at. It&apos;s a dashboard and announcement application where the human resources department can publish announcements to company employees and celebrate birthdays. The frontend of the project was written in React.js, while the backend was developed using Node.js and MongoDB.
          </p>
          <p className="mt-1 underline">
            WhatsApp Clone
          </p>
          <p>
            - The company I interned at initially instructed us to develop a WhatsApp clone. Along with my internship group, I built a messaging application using Node.js and Socket.IO. We were also asked to write the frontend part of the project using Vue.js.
          </p>
    
        </div>

      </div>
      <div className="flex flex-col items-center  pb-6">
        <LuGraduationCap className="w-6 h-6" />
    
        <div className="text-gray-700 dark:text-[#FFFEFE] font-light text-lg">February 2019 - June 2023</div>
        <h2 className="text-xl font-normal">bSc Information Systems Engineering @Sakarya University</h2>
        <div className="mt-2 font-light italic text-start w-full">
          <p>GPA 3.51</p>
          <p>Graduated as The Second-Ranking Student</p>
        </div>

      </div>
    </div>
  );
};

