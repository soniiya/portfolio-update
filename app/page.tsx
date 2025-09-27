"use client";

import React from "react";
import profile from "@/app/assets/profile.jpg";
import about from "@/app/assets/about.jpg";
import Image from "next/image";
import { projects } from "@/app/utils/projects";
import { ProjectCard } from "@/app/components/ProjectCard";
import { frontendskills, backendskills } from "@/app/utils/skills";
import { SkillSlider } from "./components/SkillSlider";
import contact from "@/app/assets/contact.jpg";
import { experience } from "./utils/experience";

export default function Home() {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-36">
      <div
        id="banner"
        className="flex flex-col sm:flex-row sm:items-center my-5"
      >
        <div className="w-full flex flex-1 justify-between items-start flex-col p-2 text-white">
          <h2 className="font-cursive">Hi, I'm</h2>
          <h1 className="gradient-text font-base my-3">SONIYA JAISWAL</h1>
          <p className="font-cursive">Software developer</p>

          <a
            href="https://drive.google.com/uc?export=download&id=1cE5u1RXquu784WT0ZJjaoju44cdAxDXY"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button
              suppressHydrationWarning={true}
              className="mt-5 px-6 py-2 font-base bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-white rounded-xl"
            >
              Download Resume
            </button>
          </a>
        </div>

        <div className="flex flex-1 w-full justify-center items-center ml-2">
          <Image
            className="relative w-64 h-64 border-5 bottom-[50px] left-[190px] z-10 rounded-full border-4 border-[#ff00cc] bg-gradient-to-r from-[#ff00cc] to-[#3333ff] shadow-5xl"
            src={profile}
            alt="banner-img"
          />

          <div className="gradient-ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="350"
              height="350"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                stroke="url(#gradient)"
                strokeWidth="1"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff00cc" />
                  <stop offset="100%" stopColor="#3333ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="flex flex-col sm:flex-row sm:items-start mt-20"
      >
        <div className="mb-20 md:mr-20 w-full">
          <Image
            className="object-cover rounded-xl"
            src={about}
            alt="about-img"
          />
        </div>
        <div className="w-full">
          <h2 className="font-base text-3xl text-white font-bold mb-10">
            About Me
          </h2>
          <p className="mb-2 text-white">
            I'm Soniya Jaiswal, a passionate software developer with expertise
            in building web applications using technologies like React, Node.js,
            and MongoDB. I love creating efficient and scalable solutions to
            solve real-world problems.
            <br /> <br />
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and enhancing my skills through continuous
            learning.
          </p>
        </div>
      </section>

      <section id="projects" className="my-20">
        <h2 className="text-center font-base text-3xl text-white font-bold mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-scale-in opacity-0"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="my-20">
        <h2 className="text-center font-base text-3xl text-white font-bold mb-10">Skills</h2>

        <div className="mb-8">
          <SkillSlider
            title="Frontend"
            skills={frontendskills}
            direction="left-to-right"
          />
        </div>

        <div className="mt-5">
          <SkillSlider
            title="Backend"
            skills={backendskills}
            direction="right-to-left"
          />
        </div>
      </section>

      <section id="experience" className="my-20">
        <h2 className="text-center font-base text-3xl text-white font-bold mb-10">
          Experience
        </h2>
        <div className="text-white flex flex-col gap-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="shadow-md shadow-purple-500 px-8 py-[12px] rounded-2xl"
            >
              <h3 className="text-xl font-base font-bold mb-2">{exp.role}</h3>
              <p className="mb-1">
                {exp.company} | {exp.duration}
              </p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col lg:flex-row sm:items-center my-20"
      >
        <div className="w-full mb-20 lg:mr-20">
          <Image
            className="object-cover rounded-xl"
            src={contact}
            alt="about-img"
          />
        </div>
        <form
          suppressHydrationWarning={true}
          action="https://formspree.io/f/mwprkgdb"
          method="POST"
          className="max-w-lg mx-auto w-full"
        >
          <div className="mb-4">
            <h2 className="font-base text-3xl text-white font-bold mb-4">
              Contact Me
            </h2>

            <label
              suppressHydrationWarning={true}
              htmlFor="name"
              className="block text-white font-base mb-2"
            >
              Name
            </label>
            <input
              suppressHydrationWarning={true}
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 bg-transparent shadow-md shadow-purple-500 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              suppressHydrationWarning={true}
              htmlFor="email"
              className="block text-white font-base mb-2"
            >
              Email
            </label>
            <input
              suppressHydrationWarning={true}
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-transparent shadow-md shadow-purple-500 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              suppressHydrationWarning={true}
              htmlFor="message"
              className="block text-white font-base mb-2"
            >
              Message
            </label>
            <textarea
              suppressHydrationWarning={true}
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-3 py-2 bg-transparent shadow-md shadow-purple-500 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            suppressHydrationWarning={true}
            type="submit"
            className="px-6 py-2 font-base bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-white rounded-xl"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
