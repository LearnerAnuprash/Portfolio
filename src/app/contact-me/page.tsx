import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { createPageMetadata } from "@/shared/constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Me",
  description:
    "Contact Anuprash Subedi by email or WhatsApp to discuss frontend projects, collaborations, proposals, or general questions.",
  pathname: "/contact-me",
  keywords: [
    "contact frontend developer",
    "email portfolio",
    "WhatsApp contact",
  ],
});

const EMAIL = "info.anuprash@gmail.com";
const WHATSAPP_LINK = "https://wa.me/9779745867377";

const CONTACT_OPTIONS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    description:
      "Best for project inquiries, collaborations, and long-form details.",
  },
  {
    label: "WhatsApp",
    value: "Chat with me now",
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    description: "Best for quick conversations and direct follow-ups.",
  },
];

export default function ContactMe() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pt-30 pb-20">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-600 mb-4">
          Contact
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold text-slate-900 leading-tight mb-5">
          Let&apos;s start a conversation.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          If you want to discuss a project, ask a question, or just say hello,
          reach out through the options below. I keep both email and WhatsApp
          easy to access so you can choose the channel that works best for you.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-400 bg-white/60 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
              <PhoneCall className="size-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Direct contact
              </h2>
              <p className="text-sm text-gray-500">
                Choose the fastest way to get in touch.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {CONTACT_OPTIONS.map(
              ({ label, value, href, icon: Icon, description }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "WhatsApp" ? "_blank" : undefined}
                  rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 transition-all duration-300 hover:border-slate-900 hover:shadow-md"
                >
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors duration-300">
                    <Icon className="size-5" />
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500 mb-1">
                          {label}
                        </p>
                        <p className="text-lg font-semibold text-slate-900 break-all">
                          {value}
                        </p>
                      </div>

                      <ArrowUpRight className="size-5 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-900" />
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {description}
                    </p>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-400 bg-slate-900 text-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-300 mb-4">
              Preferred channel
            </p>
            <h2 className="text-3xl font-semibold leading-tight mb-4">
              Fastest response through WhatsApp.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For direct conversations, tap the button below to open WhatsApp.
              Your chat opens in a new tab — no number needed.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Open WhatsApp
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-slate-400 bg-white/60 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Email details
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Use email for proposals, partnerships, and detailed messages.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 transition-colors hover:text-teal-900"
            >
              {EMAIL}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
