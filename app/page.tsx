import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Positions from "@/components/Positions";
import LiveProject from "@/components/LiveProject";
import AcademicProjects from "@/components/AcademicProjects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Resume />
      <Positions />
      <LiveProject />
      <AcademicProjects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
