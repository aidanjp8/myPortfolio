import React from 'react';
import pdfFile from '../assets/ODK 1.5_Implementing ODK Collect in 2024.pdf'; // Replace with your PDF file path
import odkpic from '../assets/odk.jpg';
import getitdone from '../assets/Requirements & Team Policies-2.pdf';
import calendarpic from '../assets/calendarj.pdf';
import moodtracker from '../assets/moodtracker.png';

const Projects = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Here is some of my recennt work.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${odkpic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Open Data Kit
              </span>
              <p className='text-center'>Senior Capstone</p>
              <div className='pt-8 text-center'>
                <a href={pdfFile} target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Open Write-Up
                  </button>
                </a>
                <a href='https://gitlab.cs.washington.edu/aidanjp8/odk-cse482b' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${calendarpic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Get It Done
              </span>
              <p className='text-center'>Calendar and scheduling app</p>
              <div className='pt-8 text-center'>
                <a href={getitdone} target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Open PDF
                  </button>
                </a>
                <a href='https://github.com/Get-It-Done-403/Get-It-Done' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${moodtracker})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Mood Tracker
              </span>
              <p className='text-center'>In class project focusing mostly on the accesibility of our app.</p>
              <div className='pt-8 text-center'>
                <a href='https://gitfront.io/r/aidanjp8/cmzCDBr8GxKq/odk-cse482b/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
