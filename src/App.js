//import logo from './logo.svg';
import "./App.css";
import Message from "./Message";

const messageText = "Here is the message for you!";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first react app
        <h3>Hello, {props.name}!</h3>
        <Message text={messageText} />
      </header>
    </div>
  );
}

export default App;
