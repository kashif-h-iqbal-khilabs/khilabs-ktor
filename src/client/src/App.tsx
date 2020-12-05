import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [response, setResponse] = useState<null | { authenticated: boolean }>(null)

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'kashif', password: 'password' })
  };

  useEffect(() => {
    fetch('/login', requestOptions)
      .then(response => response.status === 200 ? response.json() : { authenticated: 'false' })
      .then(data => setResponse(data))
  }, [])

  if (response?.authenticated === true) {
    return (
      <div> I AM AUTHENTICATED </div>
    );
  }
  return <div>I AM UNAUTHENTICATED</div>

}

export default App;
