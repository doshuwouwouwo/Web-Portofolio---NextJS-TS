import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto container px-12 py-4">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
