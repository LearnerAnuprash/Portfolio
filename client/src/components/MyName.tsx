// Imports
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";

function MyName() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-colummn h-[68vh] z-20 mt-[10vw]">
        <h1 className="text-white text-[11vw] opacity-100 z-20 ">
          Anuprash Subedi
        </h1>

        <p className="flex text-white opacity-80  justify-center text-[3vw]  ">
          Full stack Developer
        </p>

        <div className="flex justify-center gap-3 text-[3vw] mt-[1vw]">
          <div className="text-orange-800 hover:bg-white rounded-md cursor-pointer ">
            <FaHtml5 />
          </div>

          <div className="text-blue-400 hover:bg-white rounded-md cursor-pointer hover:text-blue-700 transition-all duration-200">
            <FaReact />
          </div>

          <div className="text-green-300 hover:bg-white rounded-md cursor-pointer hover:text-green-800 transition-all duration-200">
            <FaNodeJs />
          </div>

          <div className="text-blue-400 hover:bg-white rounded-md cursor-pointer hover:text-blue-600 transition-all duration-200">
            <RiTailwindCssFill />
          </div>

          <div className="text-blue-200 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
            <DiPostgresql />
          </div>

          <div className="text-blue-400 hover:bg-white rounded-md cursor-pointer hover:text-blue-600 transition-all duration-200">
            <TbBrandCpp />
          </div>

          <div className="text-cyan-400 hover:bg-white rounded-md cursor-pointer hover:text-cyan-800 transition-all duration-200">
            <FaPython />
          </div>

          <div className="text-blue-400 hover:bg-white rounded-md cursor-pointer hover:text-blue-600 transition-all duration-200">
            <SiTypescript />
          </div>
        </div>

        <div className="flex text-white text-[1.5vw] justify-evenly mt-[3vw] px-4 md:px-0">
          <a href="#" className="group relative">
            <div
              className="
        bg-white/10 backdrop-blur-md border border-white/20
        before:content-[''] before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-green-700/40 before:to-green-900/40 
        before:rounded-[2vw] before:opacity-75
        py-[1vw] px-[2vw] rounded-[2vw] relative overflow-hidden
        transition-all duration-200
        hover:scale-[1.03] 
        hover:text-green-200 
        hover:shadow-[0_0_2rem_rgba(16,185,129,0.4)]
       
      "
            >
              Contact Me
            </div>
          </a>

          <a href="#" className="group relative">
            <div
              className="
        bg-white/10 backdrop-blur-md border border-white/20
        before:content-[''] before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-green-700/40 before:to-green-900/40 
        before:rounded-[2vw] before:opacity-75
        py-[1vw] px-[2vw] rounded-[2vw] relative overflow-hidden
        transition-all duration-200
        hover:scale-[1.03] 
        hover:text-green-200 
        hover:shadow-[0_0_2rem_rgba(16,185,129,0.4)]
        "
            >
              My Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyName;
