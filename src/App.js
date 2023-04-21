import './App.css';
import Login from './pages/login';
import Main from './pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
