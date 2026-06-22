import About from "@/components/About";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
