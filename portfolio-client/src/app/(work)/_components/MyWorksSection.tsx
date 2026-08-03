"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import productivonImg from "@/shared/images/productivon.png";
import thinkBoardImg from "@/shared/images/thinkboard.png";
import kanchanjungaImg from "@/shared/images/kanchanjunga.png";

type myWorksType = {
  title: string;
  description: string;
  highlights?: string[];
  src: StaticImageData;
  tech: string[];
  link: string;
};

const MY_WORKS: myWorksType[] = [
  {
    title: "Productivon",
    description: `A full stack productivity app built with React, TypeScript,node.js, and PostgreSQL. It allows users to manage tasks, set goals, and track their progress.`,
    highlights: [
      "Drag-and-drop task management with calendar and scheduling",
      "Built-in email draft feature",
      "Actively in development, open-source",
    ],
    src: productivonImg,
    tech: ["React.js", "TypeScript", "Tailwind"],
    link: "https://github.com/LearnerAnuprash/Productivon",
  },
  {
    title: "Kanchanjunga Bal Sadan",
    description:
      "A client project for school website with CMS, Admin panel and Student portal.",
    highlights: [
      "Client website with CMS and admin panel",
      "Manages news, events, and notices",
      "Built for non-technical content updates",
    ],
    src: kanchanjungaImg,
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/LearnerAnuprash/KanchanjungaBalSadan",
  },
  {
    title: "ThinkBoard",
    description:
      "A notes app that allows users to create, edit, and organize their notes in a simple and intuitive way.",
    highlights: [
      "Simple, beginner-friendly notes app",
      "Rate-limited API to prevent abuse",
      "Notes public and viewable by anyone",
    ],
    src: thinkBoardImg,
    tech: ["React Js", "Node.js", "MongoDB"],
    link: "https://thinkboard-notes-app-6snj.onrender.com/",
  },
];

export function MyWorksSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20">
      <h3 className="text-5xl font-semibold text-slate-800 mb-10">My Works</h3>

      <div className="flex flex-col gap-8">
        {MY_WORKS.map((work) => (
          <Link
            key={work.title}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row rounded-xl border border-slate-500 bg-white overflow-hidden
           transition-all duration-300 hover:shadow-lg hover:scale-[1.01]
           hover:ring-1 hover:ring-slate-800 group"
          >
            <div className="relative w-full sm:w-72 aspect-[4/3] sm:aspect-auto shrink-0 bg-slate-100 overflow-hidden border-b sm:border-b-0 sm:border-r border-slate-500">
              <Image
                src={work.src}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 flex-1 py-3">
              <div className="flex items-center justify-between gap-3 px-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {work.title}
                </h3>
                <ArrowUpRight className="size-5 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-900" />
              </div>

              <p className="text-sm leading-relaxed text-gray-700 px-6">
                {work.description}
              </p>

              <ul className="flex flex-col gap-1.5 text-sm text-gray-700 list-disc list-inside marker:text-teal-900/60 px-6">
                {work.highlights?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-500 px-6">
                {work.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-teal-900 bg-teal-900/5 rounded-md px-3 py-1 mt-3 border border-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
