import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Aidan Petta. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am from a small town on the Olympic Peninsula of Washington State 
                and started classes at the University of Washington as an early entrance 
                student in computer science. 
                  I pride myself on my ability to work well in groups, both large and small. 
                  Building strong relationships with coworkers is very important to me. 
                  While working as a lifeguard and park aide, I was well-regarded for my tenacity, 
                  cooperation, and ability to adapt to various environments and challenges

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;