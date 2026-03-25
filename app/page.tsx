import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { googleSans } from "./layout";

export default function Home() {
  return (
    <div
      className={`min-h-screen overflow-hidden bg-[#fdfcff] ${googleSans.variable}`}
    >
        <Header />
      <div className="w-full mx-auto items-center px-4">
        <HeroSection />
      </div>
    </div>
  );
}
