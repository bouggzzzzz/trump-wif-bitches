import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;