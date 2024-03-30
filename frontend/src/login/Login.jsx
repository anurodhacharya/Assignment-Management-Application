import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import { login } from "../util/client";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        // console.log(event.target.value);
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const submitForm = () => {
        let dataToSend = {
            "username": username,
            "password": password
        };

        login(dataToSend).then((res) => {
            // console.log(res.data.token);
            let token = res.data.token;
            localStorage.setItem("jwt", token);
            navigate('/dashboard');
        }).catch(() => {
            console.log("Failed to login");
            alert("Login failed");
        })
    }

    // const navigate = useNavigate();

    // const navigateMe = () => {
    //     navigate('/dashboard');
    // }

    return (
        <>
            <div>
                <label htmlFor="username">Username</label>
                <input type="email" id="username" value={username} onChange={handleUsernameChange}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
            </div>


            <button type="submit" onClick={submitForm}>Submit</button>
            <p>Your entered username: {username}</p>
            <p>Your entered password: {password}</p>

            {/* <button onClick={navigateMe}>Navigate</button> */}
            
        </>
    )
}

// export default Login;