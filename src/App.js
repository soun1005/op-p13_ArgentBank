import './App.css';
import Login from './pages/login';
import Main from './pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import NavBar from '../src/layout/navBar';
import PrivateRoutes from './privateRoutes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrap">
          <NavBar name="Tony" />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route exact path="/login" element={<Login />} />
            {/* protected routes */}
            <Route element={<PrivateRoutes />}>
              <Route element={<Profile />} path="/profile" exact />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
