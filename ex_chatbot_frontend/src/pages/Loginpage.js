import React from "react";

const login = () => {
    return (
        <div className="card">
            <div className="cardheader">
                Login
            </div>
            <div className="cardbody">
                <div className="inputGroup">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password" id="password" placeholder="5 letters" />
                </div>
                <button>Log in</button>
            </div>
        </div>
    );
}

export default login;