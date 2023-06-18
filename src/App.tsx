import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Search from './search';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </>
  );
}

export default App;
