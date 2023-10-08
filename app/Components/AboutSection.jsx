"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc  pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Tailwind CSS</li>
        <li>JavaScript(ES6)</li>
        <li>ReactJS</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
      <div>
      <h1 className=" font-medium text-m">November, 2020 - August, 2023</h1>
      <h2 className="font-bold text-2xl">B.Sc(Hons)-Computer Science</h2>
      <h3 className="font-semibold text-1xl">Gurucharan College , Silchar (Affiliated to AUS)</h3>
      <h4 className="font-bold text-1xl text-fuchsia-700">CGPA - 8.30</h4>
      </div>
      <hr className="mt-2 border-2 border-[#401e8a]"></hr>
      <div className="mt-2">
      <h1 className=" font-medium text-m">June, 2018 - March, 2020</h1>
      <h2 className="font-bold text-2xl">Higher Secondary Education</h2>
      <h3 className="font-semibold text-1xl">Ram Krishna Vidyapith(H.S.School), Ram Krishna Nagar</h3>
      </div>
      <hr className="mt-2 border-2 border-[#401e8a]"></hr>
      <div className="mt-2">
      <h1 className=" font-medium text-m">March, 2017 - March, 2018</h1>
      <h2 className="font-bold text-2xl">Secondary Education</h2>
      <h3 className="font-semibold text-1xl">Ram Krishna Vidyapith(H.S.School), Ram Krishna Nagar</h3>
      </div>
      </>
    ),
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500}></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a passionate and versatile Full Stack Web Developer with a strong foundation in both front-end and back-end development. I specialize in crafting dynamic and responsive web applications that provide seamless user experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
                {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
                {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
