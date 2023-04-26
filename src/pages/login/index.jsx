import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../slices/authSlice';
import { useState, useEffect } from 'react';

// components
import Footer from '../../layout/footer';
import NavBar from '../../layout/navBar';
import style from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  useEffect(() => {
    if (auth.token) {
      navigate('/user');
    }
  }, [auth.token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  console.log(auth);

  return (
    <>
      <NavBar />
      <main className="main bgDark">
        <section className={style.signInContent}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.inputWrapper}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className={style.inputRemember}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <button className={style.signInButton}>
              {' '}
              {auth.loginStatus === 'pending' ? 'Submitting...' : 'Login'}
            </button>
            {/* <NavLink to="/user" className={style.signInButton}>
              Sign In
            </NavLink> */}
            {auth.loginStatus === 'rejected' ? <p>{auth.loginError}</p> : null}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
