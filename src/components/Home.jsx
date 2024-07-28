import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/AidanGrad43rdSt.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Aidan Petta
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        I am a June 2024 graduate of the Paul G. Allen School of Computer Science and Engineering at the University of Washington 
        . I am relocating to 
        Omaha, Nebraska. I studied extensively in object-oriented programming, algorithms, 
        software design, and software engineering. I'm an excellent communicator, 
        team player, and self-motivated. 
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-md mx-auto w-1/2 md:w-2/3 lg:w1/3"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;