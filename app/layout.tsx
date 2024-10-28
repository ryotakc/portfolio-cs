import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

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
          <main className="dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20 relative flex justify-center min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
