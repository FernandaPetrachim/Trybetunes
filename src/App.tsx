import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import { Route, Routes } from 'react-router-dom' */
import Login from './login';
import Search from './search';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/search" element={ <Search /> } />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
