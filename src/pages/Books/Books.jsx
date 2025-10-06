import { Suspense } from 'react';
import Book from './Book';

const Books = ({ booksData }) => {
  // console.log('booksData', booksData);
  return (
    <div>
      <h2 className="font-bold text-3xl text-[#131313] text-center mb-12">
        Books
      </h2>

      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {booksData.map(singleBook => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
