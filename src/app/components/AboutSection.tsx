"use client";

import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

export default function AboutSection() {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>TypeScript</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>SD N 2 Wonosobo</li>
          <li>SMP N 1 Wonosobo</li>
          <li>Computer & Network Engineering, at SMK N 1 Wonosobo </li>
          <li>Informatics, at Telkom University(soon)</li>
          <li>Beginner Front-End Developer, at Neuversity School of Software Engineering</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Front-End Developer, at Neuversity School of Software Engineering</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Front-End Developer, at Neuversity School of Software Engineering</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-12">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/me.jpeg" className="rounded-full" alt="About" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum repudiandae a atque, magni vero dolor dolorem eos neque iure officia aliquam provident quos iste excepturi molestiae optio vel laboriosam ducimus
            delectus error? Atque voluptatem quas ipsam in? Voluptas rem blanditiis earum temporibus eligendi iure expedita deserunt, soluta repellat dicta!
          </p>
          <div className="flex flex-row overflow-x-auto mt-8">
            <TabButton active={tab === "skills"} selectTab={() => handleTabChange("skills")}>
              Skills
            </TabButton>
            <TabButton active={tab === "education"} selectTab={() => handleTabChange("education")}>
              Education
            </TabButton>
            <TabButton active={tab === "certifications"} selectTab={() => handleTabChange("certifications")}>
              Certification
            </TabButton>

            <TabButton active={tab === "experience"} selectTab={() => handleTabChange("experience")}>
              Experience
            </TabButton>
          </div>

          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
}
