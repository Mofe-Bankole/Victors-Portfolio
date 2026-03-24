import { faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import {
  faArrowDown,
  faArrowDownWideShort,
  faEnvelope,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroBlock() {
  return (
    <div className="flex flex-col text-black">
      <div className="flex flex-row text-4xl justify-between font-bold tracking-wide text-left mb-14">
        <h1>Introduction</h1>
        <div className="w-10 h-10 px-4 py-4 flex items-center justify-center rounded-lg cursor-pointer border-[#e5e7eb] border-[0.5px] shadow-sm">
          <FontAwesomeIcon icon={faArrowDownWideShort} className="text-black text-sm" />
        </div>
      </div>
      <div className="border rounded-xl px-7 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-extrabold tracking-tight w-full mb-2 text-gray-900">
          Graphic Designer based in Ibadan
        </h1>
        <p className="text-gray-700 text-base leading-relaxed max-w-lg">
          Passionate Graphic Designer and Brand Visual Consultant with over 2
          years of experience helping businesses strengthen brand presence,
          improve audience engagement, and communicate clearly through strategic
          visual design. Experienced in advising on visual direction and
          executing high-impact marketing, social, and brand assets across
          logistics, media, sports, and digital brands. Known for delivering
          clean, consistent, and conversion-focused designs aligned with
          business goals and brand identity.
        </p>
      </div>
      <div className="border-[0.5] border-[#d3d0d0e2] rounded-lg w-full my-10"></div>
      <div className="flex flex-col">
        <div className="mb-3">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
        </div>
        <div className="flex flex-row mb-3 mt-4">
          <div className="flex gap-6">
            {/* EMAIL BOX - Black, shorter */}
            <div className="w-[260px] bg-[#000000] rounded-3xl px-2 py-3 flex flex-col min-h-[140px] relative">
              {/* Big "in" text */}
              <div className="text-6xl font-black text-white mb-3 tracking-tighter text-left">
                <h1>
                  <FontAwesomeIcon icon={faEnvelope} />
                </h1>
              </div>

              {/* LinkedIn URL */}
              <p className="text-white text-[13px] font-medium tracking-wider absolute bottom-5 right-4 text-right">
                linkedin.com/in/qorryadj
              </p>
            </div>

            {/* LINKEDIN BOX - Blue, shorter */}
            <a
              className="w-[260px] bg-[#0A66C2] rounded-3xl px-2 py-3 flex flex-col min-h-[140px] relative"
              href="https://x.com/Tofunmi_Ololuo"
            >
              {/* Big "in" text */}
              <div className="text-6xl font-black text-white mb-3 tracking-tighter text-left">
                <h1>
                  <FontAwesomeIcon icon={faTwitter} />
                </h1>
              </div>

              {/* LinkedIn URL */}
              <p className="text-white text-[13px] font-medium tracking-wider absolute bottom-5 right-4 text-right">
                x.com/Tofunmi_Ololuo
              </p>
            </a>

            {/* BEHANCE BOX - White, shorter */}
            <a className="w-[260px] bg-[#ffffff] rounded-3xl px-2 py-3 flex flex-col min-h-[140px] relative border border-black border-2" href="https://www.behance.net/tofunmiololuo">
              {/* Big "in" text */}
              <div className="text-6xl font-black text-black mb-3 tracking-tighter text-left">
                <h1>
                  <FontAwesomeIcon icon={faBehance} />
                </h1>
              </div>

              {/* LinkedIn URL */}
              <p className="text-black text-[13px] font-medium tracking-wider absolute bottom-5 right-4 text-right">
              behance.net/tofunmiololuo
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
