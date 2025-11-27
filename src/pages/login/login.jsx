import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../api/endPoints";
import LoadingSpinner from "../../components/loader/loadingSpinner";
import { loginStart, loginSuccess } from "../../redux/slices/authSlices";
import "./login.scss";

const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error, token } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            dispatch(loginStart());
          const response = await authAPI.login({ email, password });
          dispatch(loginSuccess({ 
            token: response.data.token,
            user: { email }
          }));
          localStorage.setItem('oroemail', email);
          localStorage.setItem('orotoken', response.data.token);
          navigate('/dashboard');
        } catch (error) {
            console.log("error", error)
        }
      };
    
      useEffect(() => {
        if (token) {
          navigate('/dashboard');
        }
      }, [token, navigate]);
    

    return (
        <div className="login-page">
            <div className="logo">ORO24</div>

            <div className="login-container">
                <div className="login-card">
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Sign in to your dashboard</p>

                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                required
                            />
                        </div>

                        <button type="submit" onClick={handleSubmit} disabled={isLoading} className="login-btn">
                        {isLoading ? <LoadingSpinner /> : 'Sign In'}
                        </button>
                    </form>

                    <div className="login-note">
                        <p>Use the predefined credentials to login:</p>
                        <p>
                            <strong>Email:</strong> eve.holt@reqres.in
                        </p>
                        <p>
                            <strong>Password:</strong> cityslicka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
