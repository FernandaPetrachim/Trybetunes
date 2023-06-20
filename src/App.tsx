import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Search from './Search';
import Layout from './components/Layout';
import Album from './components/Album/Album'

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
      {/*   <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } /> */}
      </Routes>
    </>
  );
}

export default App;
