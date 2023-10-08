"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <h5 className="text-4xl font-bold text-white my-2">Let's Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md text-2xl">
        {" "}
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi I'll try my best to
        get back to you!
      </p>
      <h1 className="text-3xl text-white font-extralight">
        My Contact Number
        <h2 className="text-2xl text-[#ADB7BE]">
          +91-7637092553
          <br />
          <h3 className="text-2xl text-[#773ec8]">
            (This is my offecial number, you can contact me on whatsapp too)
          </h3>
        </h2>
      </h1>
      <form>
        <h1 className="text-3xl text-white font-extralight">
          My Email Id
          <h2 className="text-2xl text-[#ADB7BE]">
            guddupaul145@gmail.com
            <br />
          </h2>
        </h1>
      </form>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/">
          <Image
            className="bg-[#c2c2f641]"
            src={GithubIcon}
            alt="Github Icon"
          ></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/guddu-shakar-paul-48481b258/">
          <Image
            className="bg-[#c2c2f641]"
            src={LinkedinIcon}
            alt="Linkedin Icon"
          ></Image>
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
