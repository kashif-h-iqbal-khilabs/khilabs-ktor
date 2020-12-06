import React, { useEffect, useState } from 'react';
import './App.css';
import { FileUpload } from './fileUpload.jsx';

function App() {

  const [response, setResponse] = useState<null | { authenticated: boolean }>(null)

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'kashif', password: 'password' })
  };

  useEffect(() => {
    // POST request
    // fetch('/login', requestOptions)
    //   .then(response => response.status === 200 ? response.json() : { authenticated: 'false' })
    //   .then(data => setResponse(data))

    fetch('/json/jackson')
      .then(response => response.json())
      .then(data => console.log(data));

  }, [])

  if (response?.authenticated === true) {
    return (
      <div> I AM AUTHENTICATED </div>
    );
  }
  return (<FileUpload />)

}

export default App;
