import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { googleSans } from "./layout";

export default function Home() {
  return (
    <div
      className={`h-full overflow-hidden bg-[#fdfcff] ${googleSans.variable}`}
    >
        <Header />
      <div className="w-full mx-auto items-center">
        <HeroSection />
      </div>
    </div>
  );
}
