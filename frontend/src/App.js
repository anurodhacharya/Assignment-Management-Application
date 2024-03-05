import './App.css';

const App = () => {
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
    console.log(res.headers.get('authorization'));

    res.json().then((data) => {
      console.log(data);
    })
  })

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
