import * as React from 'react' 
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = React.useState('No messages')
  React.useEffect(() => {
    fetch('/fetch-message').then(res => res.json()).then(data => setMessage(data.message)).catch(e => console.log('Got error', e))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {message}        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
