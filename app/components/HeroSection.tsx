import GlazingPage from "./GlazingPage";
import ImageIntroCard from "./ImageIntroCard";
import IntroBlock from "./IntroBlock";

export default function HeroSection() {
  return (
    <div className="w-full max-w-[1500px] mx-auto flex flex-col  md:space-x-7 space-y-7 md:space-y-0 mt-8">
      <GlazingPage />
      <div className="flex md:space-x-7">
        <ImageIntroCard />
        <IntroBlock />
      </div>
    </div>
  );
}
