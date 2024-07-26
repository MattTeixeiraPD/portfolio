import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { NavigationMenuDemo } from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer.tsx/footer";
import BackToTop from "@/components/ui/back-to-top";
import { Analytics } from "@vercel/analytics/react"
import { ImageOverlayProvider } from "@/context/ImageOverlayContext";

const font = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " %s | Matt Teixeira | Product, Craftsmanship, and Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} dark:bg-zinc-950 bg-zinc-50 font-normal min-w-screen min-h-screen max-w-screen px-10`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ImageOverlayProvider>
            <NavigationMenuDemo />
            {children}
            <BackToTop />
            <Footer />
            <Analytics />
          </ImageOverlayProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
