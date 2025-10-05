import { Outlet } from 'react-router';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Outlet />
    </>
  );
}

export default App;
