import React from 'react';

 export default function AboutTimeLine() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <div className="text-gray-700 font-semibold text-lg">August 2023 -</div>
        <h2 className="text-xl font-bold">Junior Frontend Developer @Venhancer</h2>
        <div className="mt-2">
          <h3 className="font-semibold">Projects</h3>
          <p className="mt-1">
            <strong>Fibasigorta Digital Insurance</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Utilized Next.js with TypeScript to develop and maintain Online, Web and CMS branches, focusing on functionality and user experience.</li>
            <li>Assisted in implementing and optimizing state management solutions using Redux Toolkit and Context API, enhancing application performance and maintainability.</li>
            <li>Collaborated with senior developers and designers to implement project requirements and ensure adherence to best practices.</li>
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <div className="text-gray-700 font-semibold text-lg">July 2023 - August 2023</div>
        <h2 className="text-xl font-bold">Frontend Developer Intern @Venhancer</h2>
        <div className="mt-2">
          <h3 className="font-semibold">Projects</h3>
          <p className="mt-1">
            <strong>Intranet</strong>
          </p>
          <p>
            I’ve worked as a full-stack developer on a web project developed with my internship group for the company I was interning at. It's a dashboard and announcement application where the human resources department can publish announcements to company employees and celebrate birthdays. The frontend of the project was written in React.js, while the backend was developed using Node.js and MongoDB.
          </p>
          <p className="mt-1">
            <strong>WhatsApp Clone</strong>
          </p>
          <p>
            The company I interned at initially instructed us to develop a WhatsApp clone. Along with my internship group, I built a messaging application using Node.js and Socket.IO. We were also asked to write the frontend part of the project using Vue.js.
          </p>
        </div>
      </div>
      <div>
        <div className="text-gray-700 font-semibold text-lg">February 2019 - June 2023</div>
        <h2 className="text-xl font-bold">bSc Information Systems Engineering @Sakarya University</h2>
        <div className="mt-2">
          <p>GPA 3.51</p>
          <p>Graduated as The Second-Ranking Student</p>
        </div>
      </div>
    </div>
  );
};

