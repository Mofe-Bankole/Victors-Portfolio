import {
  faArchLinux,
  faFigma,
  faSolana,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons/faBehance";
import { faDribbble } from "@fortawesome/free-brands-svg-icons/faDribbble";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faLongArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GlazingPage() {
  return (
    <div className="flex flex-col md:flex-row mt-20 justify-between gap-8 mb-60">
      {/* LEFT COLUMN – arrow + hashtags (exact match to screenshot) */}
      <div className="md:w-[30%] w-full flex flex-col">
        {/* Hashtags – clean, paired exactly like the image */}
        <div className="flex flex-col text-2xl font-medium text-black space-y-2 justify-between h-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-6 border-b-3 py-3 border-gray-300 ">
              <span className="text-[#EA2E00]">#Branding</span>
              <span className="text-[#FBD2C0]">#Logo</span>
            </div>
            <div className="flex items-center gap-6 border-b-3 py-3 border-gray-300 ">
              <span className="text-[#10367D]">#Social_Media</span>
              <span className="text-[#ea07d7f1]">#Poster</span>
            </div>
            <div className="flex items-center gap-6 border-b-3 py-3 border-gray-300 ">
              <span className="text-[#7c5f00e0]">#Packaging</span>
              <span>#Illustration</span>
            </div>
            <div className="flex items-center gap-6 border-b-3 py-3 border-gray-300 ">
              <span>#3D_&amp;_Motion_Graphic</span>
            </div>
          </div>
          <div className="flex flex-row space-x-2 md:mt-0 mt-5">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-white border-[0.5px] cursor-pointer hover:text-black text-white transition duration-500">
              <FontAwesomeIcon icon={faFigma} className="w-6 h-6" />
            </div>
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-white border-[0.5px] cursor-pointer hover:text-black text-white transition duration-500">
              <FontAwesomeIcon icon={faDribbble} className="w-6 h-6" />
            </div>

            <a
              className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-white border-[0.5px] cursor-pointer hover:text-black text-white transition duration-500"
              href="https://www.behance.net/tofunmiololuo"
            >
              <FontAwesomeIcon icon={faBehance} className="w-6 h-6" />
            </a>
            <a
              className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-white border-[0.5px] cursor-pointer hover:text-black text-white transition duration-500"
              href="https://x.com/Tofunmi_Ololuo"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* BLUE BOX – NOW AN ACTUAL 3D-STYLE BOX (not a flat/annoying rectangle) */}
      <div className="md:w-[70%] w-full h-[800px] bg-[#000000] rounded-3xl shadow-[0_35px_70px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.25)] relative overflow-hidden flex flex-col justify-end p-10">
        {/* Inner frame + depth layer – this is what turns the flat rectangle into a real “box” with thickness and presence */}
        <div className="absolute inset-4 border-[6px] border-white/30 rounded-3xl pointer-events-none"></div>

        {/* Subtle inner shadow/gradient for 3D volume and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/25 pointer-events-none rounded-3xl"></div>
        <a
          className="w-20 text-4xl absolute top-20 right-32 h-20 flex items-center justify-center rounded-full bg-black cursor-pointer text-white transition duration-500"
          href="https://x.com/Tofunmi_Ololuo"
        >
          <FontAwesomeIcon icon={faFigma} className="w-6 h-6" />
        </a>
        <a
          className="w-20 text-4xl absolute top-20 left-20 rotate-45 h-20 flex items-center justify-center rounded-full bg-black cursor-pointer text-white transition duration-500"
          href="https://x.com/Tofunmi_Ololuo"
        >
          <FontAwesomeIcon icon={faBehance} className="w-6 h-6" />
        </a>
        <a
          className="w-20 text-4xl absolute top-60 left-96 h-20 flex items-center justify-center rounded-full bg-black cursor-pointer text-white transition duration-500"
          href="https://x.com/Tofunmi_Ololuo"
        >
          <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
        </a>
        <a
          className="w-20 text-4xl absolute top-[625px] left-[190px] h-20 flex items-center justify-center rounded-full bg-black cursor-pointer text-white transition duration-500"
          href="https://x.com/Tofunmi_Ololuo"
        >
          <FontAwesomeIcon icon={faSolana} className="w-6 h-6" />
        </a>
        {/* Massive stylized “PORTFOLIO” text – exact style & tilt from the screenshot */}
        <div className="text-white font-black md:text-[13rem] text-[6.4rem] leading-[0.72] tracking-[-12px] -rotate-[5deg] origin-bottom-left select-none z-10">
          Victor's
          <br />
          PORTFOLIO
        </div>
      </div>
    </div>
  );
}
