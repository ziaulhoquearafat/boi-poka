import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    yearOfPublishing,
    tags,
    review,
    totalPages,
    publisher,
  } = data;

  return (
    <div className="my-10 flex gap-10">
      <div className="w-full">
        <figure className="bg-gray-100 py-10 rounded-xl">
          <img className="h-[600px] mx-auto" src={image} alt={bookName} />
        </figure>
      </div>
      <div className="w-full">
        <h1 className="text-4xl mb-4 font-bold">{bookName}</h1>
        <p className="text-lg text-gray-400 font-bold">Book by: {author}</p>
        <div className="border-1 border-gray-200 my-5"></div>
        <p className="text-lg text-gray-400 font-bold">{category}</p>
        <div className="border-1 border-gray-200 my-5"></div>
        <p className="text-gray-500">
          <span className="font-semibold text-black">Review: </span>
          {review}
        </p>
        <div className="flex gap-5 items-center text-base my-4">
          <span className="font-bold">Tag:</span>
          {tags.map((tag, index) => (
            <p className="btn" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="border-1 border-gray-200 my-5"></div>
        <div className="space-y-4">
          <p className="text-black font-semibold">
            <span className="text-gray-500 font-semibold mr-16">
              Number Of Pages:
            </span>
            {totalPages}
          </p>
          <p className="text-black font-semibold">
            <span className="text-gray-500 font-semibold mr-31">
              Publisher:
            </span>
            {publisher}
          </p>
          <p className="text-black font-semibold">
            <span className="text-gray-500 font-semibold mr-16">
              Year of Publishing:
            </span>
            {yearOfPublishing}
          </p>
          <p className="text-black font-semibold">
            <span className="text-gray-500 font-semibold mr-36">Rating:</span>
            {rating}
          </p>
        </div>
        <div className="flex gap-5 mt-10">
          <button className="btn rounded-xl text-black font-semibold p-7 text-lg">
            Read
          </button>
          <button className="btn rounded-xl text-white p-7 text-lg bg-[#59C6D2]">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
