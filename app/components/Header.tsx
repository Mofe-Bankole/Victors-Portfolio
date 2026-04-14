import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="fixed top-0 z-60 w-full bg-black text-white shadow-sm">
      <div className="w-[90%] mx-auto flex items-center justify-between py-3">
        
        {/* LEFT SIDE */}
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-black text-white font-bold text-lg shadow-md rotate-180">
            V
          </div>
        <div className="flex items-center space-x-6">
          
          {/* Logo */}

          {/* Nav */}
          <nav>
            <ul className="flex items-center space-x-8 text-xl font-medium  ">
              {["Logo", "Brand Identity", "Social Media Flyer" , "UI/UX"].map((item) => (
                <a
                  key={item}
                  className="relative cursor-pointer text-white transition group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 transition duration-200"
             
                  href={`#${item.toLowerCase()}`}
                >
                  {item}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </ul>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-3">
          
          {/* Icon Button */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:scale-110 transition cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-black w-5 h-5" />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black transition hover:scale-110 cursor-pointer">
            <FontAwesomeIcon icon={faSpotify} className="text-white w-5 h-5" />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black transition hover:scale-110 cursor-pointer">
            <FontAwesomeIcon icon={faPhone} className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}