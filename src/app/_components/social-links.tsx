"use client";

import Image from "next/image";
import logoTwitter from "@/images/logos/twitter.svg";
import logoLinkedin from "@/images/logos/linkedin.svg";
import logoGithub from "@/images/logos/github.svg";

export function SocialLinks() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <a
        href="https://x.com/thisisjustus"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block p-2 transition-opacity hover:opacity-80"
      >
        <Image
          src={logoTwitter}
          alt="Twitter"
          width={24}
          height={24}
          className="text-slate-800"
        />
      </a>
      <a
        href="https://linkedin.com/in/justushebenstreit"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block p-2 transition-opacity hover:opacity-80"
      >
        <Image
          src={logoLinkedin}
          alt="LinkedIn"
          width={24}
          height={24}
          className="text-slate-800"
        />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block p-2 transition-opacity hover:opacity-80"
      >
        <Image
          src={logoGithub}
          alt="GitHub"
          width={24}
          height={24}
          className="text-slate-800"
        />
      </a>
    </div>
  );
}
