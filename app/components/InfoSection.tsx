import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function InfoSection() {
  const tools = [
    { src: "/logos/App=Adobe Ar.png", alt: "Illustrator" },
    { src: "/logos/App=Behance.png", alt: "Photoshop" },
    { src: "/logos/App=Figma.png", alt: "After Effects" },
    { src: "/logos/App=Adobe Ps.png", alt: "InDesign" },
    { src: "/logos/App=Adobe Ca.png", alt: "Procreate" },
    // { src: "/logos/behance.jpg", alt: "Adobe XD" },
    // { src: "/logos/figma.jpg", alt: "Figma" },
  ];

  const tags = [
    { tag: "Creativity", bg: "bg-[#0e28f2ee]" },
    { tag: "Teamwork", bg: "bg-[#000000]" },
    { tag: "Flexibility", bg: "bg-[#cd1a1ae0]" },
    { tag: "Time Managemnt", bg: "bg-[#009f0d]" },
    { tag: "UI/UX", bg: "bg-[#ff6a00]" },
  ];

  return (
    <div className="mt-50 w-full text-black border-y-4 border-y-black bg-gradient-to-b from-[#efeff3] via-[#ffffff] to-[#ecedf4] shadow-lg">
      <div className="flex xl:flex-row flex-col w-[1550px] mx-auto">
        {/* Experience */}
        <div className="border-r-2 border-r-gray-300 py-8 px-8 flex flex-col md:w-1/3">
          <div className="flex flex-row justify-between mb-12 items-center">
            <h1 className="text-4xl">Experience</h1>
            <p className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 cursor-pointer text-black transition duration-500 shadow-sm">
              <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6" />
            </p>
          </div>
          <div className="flex flex-col">
            <div className="rounded-2xl mb-8 flex flex-col border-[3px] border-gradient border-gradient-to-r from-blue-400 via-purple-300 to-pink-300 px-5 py-4 cursor-pointer bg-[#fffdfde5] shadow-lg">
              <div className="flex flex-row items-center justify-between">
                <div className="rounded-2xl w-[38%] bg-blue-600 text-white px-4 py-1.5 shadow">
                  <p> 2026-Present</p>
                </div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <h1 className="text-gray-400 text-xl">Freelance</h1>
                <h1 className="text-4xl">Freelancer on Behance and Twitter</h1>
              </div>
            </div>
            <div className="rounded-2xl mb-8 flex flex-col border-[3px] border-gradient border-gradient-to-r from-blue-400 via-purple-300 to-pink-300 px-5 py-4 cursor-pointer bg-white shadow-lg">
              <div className="flex flex-row items-center justify-between">
                <div className="rounded-2xl w-[38%] bg-blue-600 text-white px-4 py-1.5 shadow">
                  <p> 2025-2026</p>
                </div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <h1 className="text-gray-400 text-xl">Student</h1>
                <h1 className="text-3xl">
                  Web Development @ APTECH COMPUTER EDUCATION
                </h1>
              </div>
            </div>
            <div className="rounded-2xl mb-8 flex flex-col border-[3px] border-gradient border-gradient-to-r from-blue-400 via-purple-300 to-pink-300 px-5 py-4 cursor-pointer bg-white shadow-lg">
              <div className="flex flex-row items-center justify-between">
                <div className="rounded-2xl w-[38%] bg-blue-600 text-white px-4 py-1.5 shadow">
                  <p>2016-2021</p>
                </div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <h1 className="text-gray-400 text-xl">Graduate</h1>
                <h1 className="text-3xl">University of Lagos</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Expertise */}
        <div className="border-r-2 border-r-gray-300 px-8 py-8 flex flex-col md:w-1/3">
          <div className="flex flex-row justify-between mb-12 items-center">
            <h1 className="text-4xl">Expertise</h1>
            <p className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 cursor-pointer text-black transition duration-500 shadow-sm">
              <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6" />
            </p>
          </div>
          <div className="skills border-b border-gray-300 pb-7 mb-9">
            <p className="text-[1.5rem]">
              Logo, Photoshop, Figma, UI/UX, Poster
              <br />
              Community Management, Adobe Illustrator, Behance, Color Grading
            </p>
          </div>
          <div className="flex flex-col border-b border-gray-300 pb-7 mb-9">
            <div className="flex flex-row justify-between mb-5 items-center">
              <h1 className="text-4xl">Hardskill</h1>
              <p className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 cursor-pointer text-black transition duration-500 shadow-sm">
                <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6" />
              </p>
            </div>
            <div className="w-full rounded-3xl bg-black p-3 shadow-2xl border border-gray-700">
              {/* Top Image */}
              <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-gray-200 border-b border-gray-500 shadow-inner">
                <img
                  src="/pkg533.png"
                  alt="workspace"
                  className="w-full h-full object-cover hover:grayscale transition duration-500 cursor-pointer"
                />
              </div>
              {/* Bottom Logos */}
              <div className="flex justify-center items-center gap-1 mt-4">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer p-0 shadow-md hover:scale-110 transition duration-500 border border-gray-600 bg-white rounded-full"
                  >
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="text-sm object-cover hover:grayscale transition duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-5 items-center">
              <h1 className="text-4xl">Softskill</h1>
              <p className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 cursor-pointer text-black transition duration-500 shadow-sm">
                <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6" />
              </p>
            </div>
            <div className="flex flex-row flex-wrap space-x-3 mt-2">
              {tags.map((t, idx) => (
                <div
                  key={idx}
                  className={`rounded-full cursor-pointer ${t.bg} text-white px-6 py-2 text-[1.35rem] font-medium mb-3 shadow-md border border-white/30`}
                >
                  <p>#{t.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="p-8 flex flex-col md:w-1/3">
          <div className="flex flex-row justify-between mb-12 border-b border-gray-200 pb-4">
            <h1 className="text-2xl">Education</h1>
            <p className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 cursor-pointer text-black transition duration-500 shadow-sm">
              <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6" />
            </p>
          </div>
          <div className="flex flex-col">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="rounded-2xl mb-8 flex flex-col border-[3px] border-gradient border-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 py-6 cursor-pointer bg-black text-white shadow-lg"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="rounded-3xl w-[38%] text-white py-1.5 bg-gradient-to-r from-blue-700 to-blue-400 shadow">
                    <p>2016-2021</p>
                  </div>
                  <FontAwesomeIcon icon={faCheck} className="text-green-400 text-xl" />
                </div>
                <div className="flex flex-col space-y-1.5 mt-4">
                  <h1 className="text-gray-400 text-xl">Graduate</h1>
                  <h1 className="text-2xl">University of Lagos</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
