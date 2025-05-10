import Image, { type ImageProps } from "next/image";

import logoDeel from "@/images/logos/deel.svg";
import logoEllaa from "@/images/logos/ellaa.svg";
import logoSelinaFinance from "@/images/logos/selina-finance.svg";
import logoTEDxWarwick from "@/images/logos/tedx.svg";
import { ArrowDownIcon } from "@/images/icons/arrow";
import { BriefcaseIcon } from "@/images/icons/briefcase";
import { Button } from "@/components/ui/button";

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  const startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none font-medium text-sm text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

export function Resume() {
  const resume: Array<Role> = [
    {
      company: "Deel",
      title: "Senior Product Manager",
      logo: logoDeel,
      start: "2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Ellaa",
      title: "Founding Engineer & Designer",
      logo: logoEllaa,
      start: "2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Selina Finance",
      title: "Product Manager & Founding Engineer",
      logo: logoSelinaFinance,
      start: "2019",
      end: "2023",
    },
    {
      company: "TEDxWarwick",
      title: "Technical Team Member",
      logo: logoTEDxWarwick,
      start: "2018",
      end: "2019",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex font-semibold text-sm text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </ol>
      <Button variant="secondary" className="group mt-6 w-full" asChild>
        <a
          href="https://assets.hebenstreit.io/website/hebenstreit_justus_cv.pdf"
          download="hebenstreit_justus_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-active:stroke-zinc-50 dark:group-hover:stroke-zinc-50" />
        </a>
      </Button>
    </div>
  );
}
