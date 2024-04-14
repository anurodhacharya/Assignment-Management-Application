import { useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import useLocalStorage from './util/useLocalStorage';
import Dashboard from './dashboard/Dashboard';
import Homepage from "./homepage/Homepage";
import ProtectedRoute from './privateroute/ProtectedRoute';
import { Login } from './login/Login';
import { Assignments } from './assignments/Assignments';
import { Assignment } from './assignments/Assignment';

const App = () => {
  
  // const [jwt, setJwt] = useLocalStorage("", "jwt");

  // useEffect(() => {
  //   console.log("Inside useEffect in App");
  //   const requestBody = {
  //     "username": "Anurodh",
  //     "password": "anurodh123"
  //   }
  
  //   const promise = fetch("http://localhost:8080/api/auth/login", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "post",
  //     body: JSON.stringify(requestBody)
  //   });

  //   promise.then((res) => {
  //     const jwt = res.headers.get('authorization');
  //     console.log(jwt);
  //     // setJwt(jwt);
  //     localStorage.setItem("jwt", jwt);
  //     res.json().then((data) => {
  //     })
  //   })
  // }, []);


  console.log("GAICHH");


  return (
    <>
    {console.log("HIIIIIIIII")}
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path='/login' element={<Login />} />
      <Route path='/assignments' element={<Assignments />} />
      <Route path='/assignments/:id' element={<Assignment></Assignment>}></Route>
    </Routes>
  </>
  );
}

export default App;
