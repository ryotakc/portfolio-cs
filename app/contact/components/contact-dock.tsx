import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { 
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiX,
 } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

export function ContactDock() {
  const links = [
    {
      title: "Mail",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:rka147@sfu.ca",
    },

    {
      title: "GitHub",
      icon: (
        <SiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "CV",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://cv-leo.vercel.app/en",
    },
    {
      title: "LinkedIn",
      icon: (
        <SiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/leo-rkc/",
    },
    {
      title: "Instagram",
      icon: (
        <SiInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/leok_can/",
    },

    {
      title: "X",
      icon: (
        <SiX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}