import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Navbar } from "@/components/Navbar";
import { SnakeBackground } from "@/components/SnakeBackground";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { CodingPlatforms } from "@/components/CodingPlatforms";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { ExtraCurricular } from "@/components/ExtraCurricular";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <SnakeBackground />
      <ScrollyCanvas />
      
      <div className="relative bg-[#121212] z-20">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CodingPlatforms />
        <ExtraCurricular />
        <Education />
        <Resume />
        <Connect />
      </div>
      <Footer />
    </main>
  );
}
