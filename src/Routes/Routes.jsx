import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        // index: true,
        // path: '/',
        // loader: () => fetch('./booksData.json'),
        // Component: Home,
        index: true,
        path: '/',
        loader: async () => {
          const res = await fetch('/booksData.json');
          const data = await res.json(); // <-- এখানে আসল array পাওয়া যাচ্ছে
          return data;
        },
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      // {
      //   path: '/book-details/:id',
      //   loader: ({ params }) => {
      //     fetch(`./booksData.json/${params.id}`),
      //   const singleBook = data.find(book => book.bookId === parseInt(params.id));
      //     return singleBook;
      //   },
      //   Component: BookDetails,
      // },
      {
        path: '/book-details/:id',
        loader: async ({ params }) => {
          const res = await fetch('/booksData.json');
          const data = await res.json();

          // find দিয়ে নির্দিষ্ট বই খুঁজে বের করছি
          const singleBook = data.find(
            book => book.bookId === parseInt(params.id)
          );

          return singleBook;
        },
        Component: BookDetails,
      },
    ],
  },
]);
