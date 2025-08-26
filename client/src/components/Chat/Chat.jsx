import { useContext, useState } from "react";
import "./chat.styles.css";
import { GameContext } from "../../contexts/GameContext";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat() {
  const { messagesArray, sendMessage } = useContext(GameContext);
  const [message, setMessage] = useState("");
  return (
    <div className="chat">
      <ScrollToBottom className="chat-body">
        {messagesArray.map(({ username, message, color }, i) => (
          <div className={i % 2 === 0 ? "message-odd" : ""} key={i}>
            <span
              className={`username ${username === "server" ? "hidden" : ""}`}
            >{`${username}: `}</span>
            <span style={{ color: color }}>{message}</span>
          </div>
        ))}
      </ScrollToBottom>
      <form
        className="chat-footer"
        onSubmit={(e) => {
          e.preventDefault();
          if (!message.trim()) return;
          sendMessage(message);
          setMessage("");
        }}
      >
        <label>Guess:</label>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text"  required/>
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
