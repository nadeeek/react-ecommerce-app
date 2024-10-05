import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { login } from '../redux/action';
import { useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Create navigate instance
  const authState = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login( username, password ));
  };

  useEffect(() => {
    // Check if authenticated and navigate accordingly
    if (authState.isAuthenticated) {
      alert('Logged in successfully');
      navigate('/'); // Navigate to the Home page after successful login
    }
  }, [authState.isAuthenticated, navigate]); // Dependency array includes isAuthenticated and navigate

  return (
    <div>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          {authState.errorMessage && <p style={{ color: 'red' }}>{authState.errorMessage}</p>}
            <form onSubmit={handleLogin}>
              <div className="my-3">
                <label htmlFor="display-4">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
