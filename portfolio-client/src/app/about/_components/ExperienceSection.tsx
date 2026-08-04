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
    <section className="w-full max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8 sm:mb-10">
        <h3 className="text-2xl font-semibold text-slate-800 sm:text-4xl">
          Experience
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
          <p className="text-lg font-medium text-slate-700 sm:text-xl">
            Varosa Technology
          </p>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <p className="text-sm font-medium text-slate-500">
            Feb 2024 – Present
          </p>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-600 sm:text-base">
            Tech I work with
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-300 bg-teal-900/5 px-2.5 py-1 text-xs font-medium text-teal-900 sm:px-3 sm:py-1.5 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-gray-600 list-disc list-inside marker:text-teal-900/60 sm:mt-6 sm:text-base">
          {HIGHLIGHTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <h4 className="mb-4 text-xl font-semibold text-slate-800 sm:mb-5 sm:text-2xl">
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
              className="group flex items-start gap-4 px-4 py-4 transition-colors hover:bg-slate-50 sm:items-center sm:gap-5 sm:px-8 sm:py-5"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 sm:h-10 sm:w-10">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 sm:items-center">
                  <h5 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    {project.name}
                  </h5>
                  <ArrowUpRight className="size-4 text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-0.5 text-sm text-gray-500 sm:text-base">
                  <span className="sm:hidden">{project.description}</span>
                  <span className="hidden sm:inline">
                    {project.description}
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-600 sm:text-base">
                  <span className="sm:hidden">
                    {project.name === "Calilio"
                      ? "Real-time call dashboard, auth, and dialer UI."
                      : project.name === "LeadHeed"
                        ? "Pipeline, role-based auth, and lead capture flows."
                        : "AI matching, scheduling, and payment-related work."}
                  </span>
                  <span className="hidden sm:inline">
                    {project.contribution}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
