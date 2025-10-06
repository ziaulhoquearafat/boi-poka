import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  // console.log(singleBook);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    bookId,
    yearOfPublishing,
    tags,
  } = singleBook;
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border-1 border-gray-200 rounded-2xl">
        <figure className="p-10 m-5 rounded-2xl bg-gray-100">
          <img
            className="w-[120px] h-[200px] object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center text-base mb-4">
            {tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title text-2xl">{bookName}</h2>
          <div className="badge badge-secondary">{yearOfPublishing}</div>
          <p className="text-lg font-semibold">Book by: {author}</p>
          <div className="border-1 border-dashed border-gray-200 my-5"></div>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge text-base">{category}</div>
            <div className="badge text-base">
              {rating}
              <Star />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
