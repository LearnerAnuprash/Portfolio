import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialLink = {
  icon: React.ElementType;
  href: string;
  label: string;
};

const SOCIALS: SocialLink[] = [
  {
    icon: FaGithub,
    href: "https://github.com/LearnerAnuprash",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/Anuprash",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/Anuprash_subedi", label: "X" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 py-4 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300">
          &copy; {year} Anuprash Subedi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-300 transition-colors duration-200 hover:text-white"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
