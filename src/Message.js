import "./Message.css";

function Message(props) {
  return (
    <div className="Message">
      <h4>{props.text}</h4>
    </div>
  );
}

export default Message;
