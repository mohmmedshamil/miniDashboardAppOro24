import React, { useState } from "react";
import "./login.scss";

const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");

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

                        <button type="submit" className="login-btn">
                            Sign In
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
