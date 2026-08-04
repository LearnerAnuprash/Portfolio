"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import calilioLogo from "../../../../public/logos/calilio.svg";
import leadheedLogo from "../../../../public/logos/leadheed.svg";
import cloudcolleagueLogo from "../../../../public/logos/cloudcolleague.svg";

type Project = {
  name: string;
  link: string;
  description: string;
  contribution: string;
  logo: typeof calilioLogo;
};

const HIGHLIGHTS = [
  "Built and shipped production features across 3 client-facing products using React, TypeScript, and Ant Design",
  "Implemented secure authentication flows with JWT tokens, refresh rotation, role-based access, and protected routes",
  "Designed scalable component systems with Zustand for state, Zod for validation, and React Hook Form for complex forms",
  "Worked closely with backend teams on REST API/ GraphQL integration, handling loading states, error boundaries, and edge cases",
];

const SKILLS = [
  "React.js",
  "TypeScript",
  "Ant Design",
  "Zod",
  "Zustand",
  "React Hook Form",
  "Next.js",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
];

const PROJECTS: Project[] = [
  {
    name: "Calilio",
    link: "https://www.calilio.com",
    description: "Cloud VoIP phone system with AI call insights",
    contribution:
      "Real-time call dashboard, JWT auth with refresh rotation, power dialer & IVR components",
    logo: calilioLogo,
  },
  {
    name: "LeadHeed",
    link: "https://leadheed.com",
    description: "All-in-one CRM for small businesses",
    contribution:
      "Sales pipeline with drag-and-drop, role-based auth, lead capture & notification hooks",
    logo: leadheedLogo,
  },
  {
    name: "CloudColleague",
    link: "https://cloudcolleague.com",
    description: "Australian hiring marketplace for jobs & tasks",
    contribution:
      "AI candidate matching, interview scheduling, task bidding & secure payments",
    logo: cloudcolleagueLogo,
  },
];

export function ExperienceSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h3 className="text-4xl font-semibold text-slate-800">Experience</h3>
        <div className="mt-2 flex items-center gap-3">
          <p className="text-xl font-medium text-slate-700">
            Varosa Technology
          </p>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <p className="text-sm font-medium text-slate-500">
            Feb 2024 – Present
          </p>
        </div>

        <div className="mt-6">
          <p className="text-base font-medium text-slate-600 uppercase tracking-wide mb-3">
            Tech I work with
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-sm font-medium text-teal-900 bg-teal-900/5 rounded-md px-3 py-1.5 border border-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-6 space-y-2 text-base text-gray-600 list-disc list-inside marker:text-teal-900/60">
          {HIGHLIGHTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <h4 className="text-2xl font-semibold text-slate-800 mb-5">
        Projects at Varosa
      </h4>

      <div className="rounded-2xl border border-slate-300 bg-white/60 backdrop-blur-sm overflow-hidden">
        <div className="divide-y divide-slate-200">
          {PROJECTS.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-8 py-5 transition-colors hover:bg-slate-50 group"
            >
              <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h5 className="text-xl font-semibold text-slate-900">
                    {project.name}
                  </h5>
                  <ArrowUpRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-base text-gray-500 mt-0.5">
                  {project.description}
                </p>
                <p className="text-base text-gray-600 mt-1">
                  {project.contribution}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
