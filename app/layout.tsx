import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Photography", href: "/photography" },
  { label: "Contact", href: "/contact" },
]

export const metadata: Metadata = {
  title: {
    template: "%s | leo",
    default: "leo",
  },
  description: "Leo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="container h-16 flex items-center border-b justify-between text-primary">
            <h1 className="font-bold text-2xl hover:scale-110 transition-transform duration-300">
              <Link href="/">
                <div className="flex">
                  <Image src="/logo.jpg" alt="profile" width={32} height={32} className="rounded-md" />
                  <span className="ml-2">leo</span>
                </div>
              </Link>
            </h1>
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="hidden sm:block hover:scale-105 transition-transform duration-300">
                  <Button variant="ghost" asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
              <li className="hidden sm:block ml-1">
                <ModeToggle />
              </li>
            </ul>
          </header>
          <main className="dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20 relative flex justify-center min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
