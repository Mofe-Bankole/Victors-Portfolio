import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function InfoSection() {
  const tools = [
    { src: "/logos/adobe_ru.png", alt: "Illustrator" },
    { src: "/logos/adobe_photoshop.jpg", alt: "Photoshop" },
    { src: "/logos/adobe_stock.png", alt: "After Effects" },
    { src: "/logos/adobe_illustrator.png", alt: "InDesign" },
    { src: "/logos/creative-cloud.png", alt: "Procreate" },
    { src: "/logos/behance.jpg", alt: "Adobe XD" },
    { src: "/logos/figma.jpg", alt: "Figma" },
  ];

  return (
    <div className="mt-50 w-100%  text-black border-t-[2.5px] border-b-[2.5px] border-black">
      <div className="max-w-[1550px] mx-auto flex md:flex-row flex-col">
        <div className="border-r-[0.50] py-8 px-8 flex flex-col md:w-1/3">
          <div className="flex flex-row justify-between mb-12">
            <h1 className="text-4xl">Experience</h1>
            <p>arrow</p>
          </div>

          <div className="flex flex-col">
            <div className="rounded-2xl mb-8 flex flex-col border-gray-900 border-[0.5] px-5 py-4 cursor-pointer">
              <div className="flex flex-row items-center justify-between">
                <div className="rounded-2xl w-1/3 bg-blue-600 text-white px-4 py-1.5">
                  <p> 2020-2023</p>
                </div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <h1 className="text-gray-400 text-2xl">Freelance</h1>
                <h1 className="text-4xl">Graphics Designer @ Github.com</h1>
              </div>
            </div>
            <div className="rounded-2xl mb-8 flex flex-col border-gray-900 border-[0.5] px-5 py-4 cursor-pointer">
              <div className="flex flex-row items-center justify-between">
                <div className="rounded-2xl w-1/3 bg-blue-600 text-white px-4 py-1.5">
                  <p> 2020-2023</p>
                </div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <h1 className="text-gray-400 text-2xl">Freelance</h1>
                <h1 className="text-4xl">Graphics Designer @ Github.com</h1>
              </div>
            </div>
            <div className="rounded-2xl mb-8 flex flex-col border-gray-900 border-[0.5] px-5 py-4 cursor-pointer">
              <div className="flex flex-row items-center justify-between">
                <div className="rounded-2xl w-1/3 bg-blue-600 text-white px-4 py-1.5">
                  <p> 2020-2023</p>
                </div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <h1 className="text-gray-400 text-2xl">Freelance</h1>
                <h1 className="text-4xl">Graphics Designer @ Github.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-r-[0.50] px-8 py-8 flex flex-col md:w-1/3">
          <div className="flex flex-row justify-between mb-12">
            <h1 className="text-4xl">Expertise</h1>
            <p>arrow</p>
          </div>
          <div className="skills border-b-1 border-gray-950 pb-7 mb-9">
            <p className="text-[1.5rem]">
              Logo,Photoshop,Figma,UI/UX,Poster,Logo
              <br />
              Community Management,Adobe Illustrator,Behance,Color Grading
            </p>
          </div>
          <div className="flex flex-col border-b-1 border-gray-950 pb-7 mb-9">
            <div className="flex flex-row justify-between mb-5">
              <h1 className="text-4xl">Hardskill</h1>
              <p>arrow</p>
            </div>
            <div className="w-full rounded-3xl bg-black p-3 shadow-xl">
              {/* Top Image */}
              <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="/pkg533.png" // your image
                  alt="workspace"
                  className="w-full h-full object-cover hover:grayscale transition duration-500 cursor-pointer"
                />
              </div>

              {/* Bottom Logos */}
              <div className="flex justify-center items-center gap-3 mt-4">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 flex items-center justify-center cursor-pointer border border-white/10 shadow-md hover:scale-110 transition duration-500"
                  >
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="w-12 h-12 object-cover hover:grayscale transition duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-5">
              <h1 className="text-4xl">Softskill</h1>
              <p>arrow</p>
            </div>
            <div className="flex flex-row flex-wrap space-x-3 mt-2">
              <div className="rounded-full bg-[#0e28f2ee] text-white px-6 py-2 text-[1.35rem] font-medium">
                <p>#Creativity</p>
              </div>
              <div className="rounded-full bg-[#000000] text-white px-6 py-2 text-[1.35rem] font-medium">
                <p>#Teamwork</p>
              </div>
              <div className="rounded-full mt-2.5 bg-[#cd1a1ae0] text-[#ffffff] px-6 py-2 text-[1.35rem] font-medium">
                <p>#Flexibility</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-r-[0.50] py-8 px-4 flex flex-col md:w-1/3">
          <div className="flex flex-row justify-between mb-12">
            <h1 className="text-2xl">Education</h1>
            <p>arrow</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
