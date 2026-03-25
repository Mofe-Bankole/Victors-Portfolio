import GlazingPage from "./GlazingPage";
import ImageIntroCard from "./ImageIntroCard";
import InfoSection from "./InfoSection";
import IntroBlock from "./IntroBlock";

export default function HeroSection() {
  return (
    <div>
      <div className="md:max-w-[1550px] w-[85%] mx-auto flex flex-col  md:space-x-7 space-y-7 md:space-y-0 mt-10">
      <GlazingPage />
      <div className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-10mb-6">
        <ImageIntroCard />
        <IntroBlock />
      </div>
        <div className="w-full bg-black rounded-3xl"></div>
        </div>
      <InfoSection />
    </div>
  );
}
