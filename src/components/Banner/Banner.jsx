import React from 'react';
import imgBook from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-10 mb-16 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imgBook} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold leading-15">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn mt-10 text-white bg-[#23BE0A]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
