import { Github, Linkedin, Package } from "lucide-react";
import { GravatarIcon, StackOverflowIcon } from "./icons";

export const socialLinks = [
  {
    href: "https://github.com/vinodliyanage/use-address-state",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/vinodliyanage",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.npmjs.com/package/use-address-state",
    icon: Package,
    label: "npm",
  },
  {
    href: "https://gravatar.com/vinodliyanage",
    icon: GravatarIcon,
    label: "Gravatar",
  },
  {
    href: "https://stackoverflow.com/users/15084645/vinod-liyanage",
    icon: StackOverflowIcon,
    label: "Stack Overflow",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-white transition-colors"
          title={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

export function Badges() {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <a href="https://www.npmjs.com/package/use-address-state" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/v/use-address-state.svg?style=flat-square" alt="npm version" />
      </a>
      <a href="https://bundlephobia.com/package/use-address-state" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/bundlephobia/minzip/use-address-state?style=flat-square" alt="bundle size" />
      </a>
      <a
        href="https://github.com/vinodliyanage/use-address-state/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.shields.io/npm/l/use-address-state.svg?style=flat-square" alt="license" />
      </a>
    </div>
  );
}
