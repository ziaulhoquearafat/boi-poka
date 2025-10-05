import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  const booksData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Books key={booksData.bookId} booksData={booksData}></Books>
    </div>
  );
};

export default Home;
