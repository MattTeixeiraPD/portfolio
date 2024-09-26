import type { Metadata } from "next";
import "@/app/globals.css";
import BackToTop from "@/components/ui/back-to-top";
import { ImageOverlayProvider } from "@/context/ImageOverlayContext";

export const metadata: Metadata = {
  title: " %s | Matt Teixeira | Product, Craftsmanship, and Innovation",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full min-w-full hidden md:block">
      <ImageOverlayProvider>
        {children}
        <BackToTop />
      </ImageOverlayProvider>
    </div>
  );
}
