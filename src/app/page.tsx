import NavDrawer from "@/components/layout/NavDrawer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import WorkGrid from "@/components/sections/WorkGrid";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <NavDrawer />
      <main>
        <Hero />
        <About />
        <Work />
        <WorkGrid />
        <Contact />
      </main>
    </>
  );
}
