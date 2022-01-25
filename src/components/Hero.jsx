import React from 'react';

const Hero = () => {
  return (
    <div className="container 2xl:px-96 xl:px-52 px-6 py-4 mx-auto h-screen flex flex-col justify-center">
      <h6 className="font-secondary text-violet-400 mb-4">Hi, my name is</h6>
      <h1 className="text-5xl font-semibold text-gray-100 mb-4">Victor Dulap</h1>
      <h2 className="text-3xl font-semibold text-gray-300 mb-3">I build web applications.</h2>
      <p className="text-gray-400">I'm a Front-end Web Developer based in Chișinău, Moldova. </p>
    </div>
  );
};

export default Hero;
