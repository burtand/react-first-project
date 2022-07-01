//import logo from './logo.svg';
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first react app
        <h3 style={{ color: "green" }}>Hello, {props.name}!</h3>
      </header>
    </div>
  );
}

export default App;
