import { useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import useLocalStorage from './util/useLocalStorage';
import Dashboard from './dashboard/dashboard';
import Homepage from './homepage/homepage';

const App = () => {
  
  const [jwt, setJwt] = useLocalStorage("", "jwt");

  useEffect(() => {
    console.log("Inside useEffect in App");
    const requestBody = {
      "username": "Anurodh",
      "password": "anurodh123"
    }
  
    const promise = fetch("http://localhost:8080/api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(requestBody)
    });

    promise.then((res) => {
      const jwt = res.headers.get('authorization');
      setJwt(jwt);
      res.json().then((data) => {
      })
    })
  });

  return (
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/dashboard' element={<Dashboard jwt={jwt}></Dashboard>}>
      </Route>
    </Routes>
  );
}

export default App;
