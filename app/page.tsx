import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Systems } from "@/components/sections/Systems";
import { Architecture } from "@/components/sections/Architecture";
import { Lessons } from "@/components/sections/Lessons";
import { Blog } from "@/components/sections/Blog";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { getCanonicalUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Systems />
      <Architecture />
      <Lessons />
      <Blog />
      {/* <Resume /> */}
      <Contact />
    </>
  );
}
