import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import { login } from "../util/client";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

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
        <Container className='mt-4'>
            <Row>
                <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-4">Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={username} onChange={handleUsernameChange} />
                        {/* <Col>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="email" id="username" value={username} onChange={handleUsernameChange}></input>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
                            </div>
                        </Col> */}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-4">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col className="mt-2 d-flex flex-column gap-3 flex-md-row justify-content-between">
                    <Button size="lg" type="submit" onClick={submitForm} variant="primary">Login</Button>
                    <Button size="lg" type="submit" onClick={submitForm} variant="secondary">Exit</Button>
                </Col>
                {/* <Col>
                    Hi
                </Col> */}
            </Row>
            {/* <p>Your entered username: {username}</p> */}
            {/* <p>Your entered password: {password}</p> */}

            {/* <button onClick={navigateMe}>Navigate</button> */}
            
        </Container>

        {/* <div className="container">
            <div className="row">
                <div className="col">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="email" id="username" value={username} onChange={handleUsernameChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
                    </div>
                </div>
            <div className="col">Hi</div>
        </div> */}



        {/* <Button type="submit" onClick={submitForm}>Submit</Button> */}
        {/* <p>Your entered username: {username}</p> */}
        {/* <p>Your entered password: {password}</p> */}

        {/* <button onClick={navigateMe}>Navigate</button> */}

        {/* </div> */}
        </>


    )
}

// export default Login;