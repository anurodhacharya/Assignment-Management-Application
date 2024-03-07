import { useEffect } from 'react';
import './App.css';
import useLocalStorage from './util/useLocalStorage';

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
    // console.log("jwt: " + jwt);
    promise.then((res) => {
      const jwt = res.headers.get('authorization');
      // console.log(jwt);
      // localStorage.setItem("jwt", jwt);
      setJwt(jwt);
      res.json().then((data) => {
        // console.log(data);
      })
    })
  });

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {console.log("Hello World")}
    </div>
  );
}

export default App;
