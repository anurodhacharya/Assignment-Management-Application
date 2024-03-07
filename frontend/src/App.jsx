import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  
  const [jwt, setJwt] = useState("");

  useEffect(() => {
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
      console.log(jwt);
      setJwt(jwt);
  
      res.json().then((data) => {
        console.log(data);
      })
    })
  }, []);

  

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {console.log("Hello World")}
    </div>
  );
}

export default App;
