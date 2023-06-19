import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Search from './Search';
import Album from './Album/album';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Routes>
    </>
  );
}

export default App;
