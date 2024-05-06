import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaCircle, FaCircleDot } from "react-icons/fa6";

type ExperiencesType = {
  date: string;
  jobType: string;
  title: string;
  description: string;
  tools: string;
  role: string;
  position: "start" | "end";
  project: string[];
};

const experiences: ExperiencesType[] = [
  {
    date: "OCT 2020 - FEB 2022",
    jobType: "Full Time",
    title: "Gofive Co., Ltd.",
    role: "Front-End Developer",
    description: `II collaborate with teams to develop modern web applications, leveraging the latest technologies to enhance user interfaces and deliver superior user experiences.`,
    project: [
      "Assets Tracking System (A system used to search, track and display details of various devices within the company's warehouse)",
      "Visitor Management (A system used to record the visit history of external individuals for business negotiations with the company)",
      "Client Portal (Subscription Management) (A system used to manage subscription plans, including issuing invoices for payments through various channels to customers using the company's product systems)",
      "Venio CRM (A CRM (Customer Management System) that helps manage sales or business deals systematically and efficiently, able to track sales activities, customer status, track leads and increase sales closure opportunities)",
      "etaxGo (An electronic tax filing system that provides services for preparing, delivering, and storing data accurately according to the Revenue Department's criteria)",
    ],
    tools: "Angular ,React.js ,TypeScript ,Bootstrap ,Bitbucket ,Jira",
    position: "start",
  },
  {
    date: "MAR 2022 - NOW",
    jobType: "Full Time",
    title: "Super Resume Co., Ltd. ",
    role: "Front-End Developer",
    description:
      "I collaborate with teams to develop and enhance products modern web and mobile technologies for optimal user experience.",
    project: ["Super Resume", "Jobtopgun", "Jobtopgun Mobile Application"],
    tools:
      "Next.js ,React Native ,Tailwind CSS, TypeScript ,Postman ,Bitbucket ,Jira",
    position: "end",
  },
];

const WorkExperienceSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">Work Experiences</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 sm:mb-0">
          <div className={`timeline-${exp.position}  mb-10`}>
            <p className="font-mono italic">{exp.date}</p>
            <div className="text-lg text-primary font-bold">{exp.title}</div>

            <div className="space-y-3 mt-2">
              <p>
                As a <span className="text-primary font-bold">{exp.role}</span>,{" "}
                {exp.description}
              </p>
              <ul className="list-disc space-y-2">
                <span className="text-primary">Product </span>:
                {exp.project.map((p, i) => (
                  <li className="ml-4 text-sm" key={i}>
                    {p}
                  </li>
                ))}
              </ul>

              <p>
                <span className="text-primary">Tools</span> : <br /> {exp.tools}
              </p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default React.memo(WorkExperienceSection);
