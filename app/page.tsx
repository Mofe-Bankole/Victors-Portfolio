import Image from "next/image";
import Header from "./components/Header";
import ImageIntroCard from "./components/ImageIntroCard";
import HeroSection from "./components/HeroSection";
import { googleSans } from "./layout";
// import { google_sans } from "./layout";

export default function Home() {
  return (
    <div
      className={`min-h-screen overflow-hidden bg-[#fdfcff] ${googleSans.variable}`}
    >
        <Header />
      <div className="w-[90%] mx-auto items-center px-4">
        <HeroSection />
      </div>
    </div>
  );
}
