import GlazingPage from "./GlazingPage";
import ImageIntroCard from "./ImageIntroCard";
import InfoSection from "./InfoSection";
import IntroBlock from "./IntroBlock";

export default function HeroSection() {
  return (
    <div>
      <div className="max-w-[1550px] mx-auto flex flex-col  md:space-x-7 space-y-7 md:space-y-0 mt-10">
        <GlazingPage />
        <div
          className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-10 mb-6 "
          id="about me"
        >
          <ImageIntroCard />
          <IntroBlock />
        </div>
        <div className="w-full bg-black rounded-3xl"></div>
      </div>
      <InfoSection />
    </div>
  );
}
