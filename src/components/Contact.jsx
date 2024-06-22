import React from 'react';

const Contact = () => {
  const email = 'aidanjp8@gmail.com'; // Replace with your actual email address

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-gray-300">
          <p>Email: {email}</p>
          <a
            href={`mailto:${email}`}
            className="text-white hover:text-cyan-500 transition-colors duration-300"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/aidanpetta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
