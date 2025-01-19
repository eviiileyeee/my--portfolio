import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-16 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600">Hi, I'm Harendra — a passionate computer science student with a love for coding and technology.</p>
      </div>

      {/* Bio Section */}
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800">Who Am I?</h2>
          <p className="mt-4 text-lg text-gray-600">
            I'm a passionate web developer and a computer science student. I love to explore new technologies and constantly strive to improve my skills.
            I specialize in backend development but am always excited to learn new aspects of full-stack development. When I'm not coding, I enjoy experimenting with new tools and working on personal projects.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEsGmRcXlJDng/profile-displayphoto-shrink_400_400/B4DZQRG8roHwAg-/0/1735453824206?e=1743033600&v=beta&t=usuq1PbORdN42BIxUVgEYKtni5qHtXJfUJ_hDQHUxa8"
           alt="Harendra" className="rounded-full w-48 h-48 object-cover border-4 border-gray-300 shadow-lg" />
        </div>
      </div>

    </div>
  );
};

export default About;
