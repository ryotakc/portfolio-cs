import { SiVercel, SiNextdotjs, SiTailwindcss, SiTypescript, SiReact, SiGit, SiGithub, SiDocker, SiBun, SiNodedotjs, SiDavinciresolve, SiAdobelightroom, SiFigma,} from "@icons-pack/react-simple-icons";

const logos = [
  { name: "Next.js", icon: SiNextdotjs, link: "https://nextjs.org" },
  { name: "TypeScript", icon: SiTypescript, link: "https://www.typescriptlang.org" },
  { name: "React", icon: SiReact, link: "https://reactjs.org" },
  { name: "Tailwind CSS", icon: SiTailwindcss, link: "https://tailwindcss.com" },
  { name: "Vercel", icon: SiVercel, link: "https://vercel.com" },
  { name: "Git", icon: SiGit, link: "https://git-scm.com" },
  { name: "GitHub", icon: SiGithub, link: "https://github.com" },
  { name: "Docker", icon: SiDocker, link: "https://www.docker.com" },
  { name: "Node.js", icon: SiNodedotjs, link: "https://nodejs.org" },
  { name: "Bun", icon: SiBun, link: "https://bun.sh" },
  { name: "Figma", icon: SiFigma, link: "https://www.figma.com" },
  { name: "Lightroom", icon: SiAdobelightroom, link: "https://www.adobe.com/products/photoshop-lightroom.html" },
  { name: "Davinchi Resolve", icon: SiDavinciresolve, link: "https://www.blackmagicdesign.com/products/davinciresolve" },
];

const LogoCloud = () => {
  return (
    <div className="w-full max-w-screen-lg py-12 mx-auto">
      <div className="w-full px-4 md:px-8 mx-auto">
        <div
          className="group relative mt-6 flex gap-4 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 5%, black 30%, black 70%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-8"
              >
                {logos.map(({ name, icon: Icon, link }, key) => (
                  <a
                    key={key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center"
                  >
                    <Icon className="h-10 w-10 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
