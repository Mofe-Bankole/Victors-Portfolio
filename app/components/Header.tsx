import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header
      className="header text-black w-full mx-auto flex flex-row justify-between py-2 mt-4"
     
    >
      <div className="flex flex-row items-center">
        <div className="logo rounded-full bg-black text-white w-11 h-11 text-center items-center justify-center overflow-none ml-7 mr-7">
          <div>
            <FontAwesomeIcon icon={faPhotoFilm}/>
          </div>
        </div>
        <nav>
          <ul className="flex flex-row space-x-4 items-center">
            <li className="text-normal cursor-pointer  hover:border hover:border-b-2.5 transition duration-700">
              About Me
            </li>
            <li className="text-normal hover:border-b-2.5 transition duration-700">
              Resume
            </li>
            <li className="text-normal hover:border-b-2.5 transition duration-700">
              Work
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-2.5">
        <div className="w-11 h-11 rounded-full bg-white text-black cursor-pointer">
          <FontAwesomeIcon icon={faGithub}/>
        </div>
        <div className="w-11 h-11 rounded-full bg-white text-black"></div>
        <div className="w-11 h-11 rounded-full bg-white text-black"></div>
      </div>
    </header>
  );
}
