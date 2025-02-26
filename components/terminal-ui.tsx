import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

  
  export function TerminalDemo() {
    return (
      <Terminal>
        <TypingAnimation>&gt; bun create leo's-skill-set@latest </TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Profile checks.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying Language. Found Japanese & English.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Verifying Frontend & Backend skills.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Found TypeScript, React, Next.js, Tailwind CSS.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Verified Linux, Git/GitHub, Docker Vercel.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Developing new-web.app.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Checking soft skills.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Found communication skills, leadership, creativity, integrity</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing more skills...</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/profile.ts</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Skill set validation completed.
        </TypingAnimation>
  
        <TypingAnimation delay={7000} className="text-muted-foreground">
          Leo is ready to start developing!
        </TypingAnimation>
      </Terminal>
    );
  }
  