import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/action';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      // Dispatch the registration action
      dispatch(register({ username, password, email }));
    };

    useEffect(() => {
        // Check if authenticated and navigate accordingly
        if (authState.isAuthenticated) {
          alert('Registered in successfully');
          navigate('/'); // Navigate to the Home page after successful login
        }
      }, [authState.isAuthenticated, navigate]); // Dependency array includes isAuthenticated and navigate

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleRegister}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register