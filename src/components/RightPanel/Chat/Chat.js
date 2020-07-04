import React from "react";
import { connect } from "react-redux";
import {
  addNewMessage,
  changeMessageBody,
  resetMessageBody,
  changeActivePanel,
} from "../../../redux/actions/actions";
import styles from "./Chat.module.css";

const Chat = (props) => {
  const onNewMessageChange = (e) => {
    let body = e.target.value;
    console.log("body", body);
    props.changeMessageBody(body);
  };
  const onAddNewMessage = () => {
    if (props.messageBody.trim()) {
      props.addNewMessage(props.messageBody);
      props.resetMessageBody();
    }
  };

  // On Enter press
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      onAddNewMessage();
    }
  };

  // Scroll chat to bottom
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [props.messages]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {props.messages.map((message) => (
          <div className={styles.messageContainer}>
            <p>{message}</p>
            <br />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <textarea
        onChange={onNewMessageChange}
        onKeyDown={onEnterPress}
        value={props.messageBody}
        placeholder="Enter your message"
      ></textarea>
      <button
        onClick={() => onAddNewMessage()}
        className={styles.sendMessageButton}
      >
        Send message
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.chat.messages,
    messageBody: state.chat.messageBody,
    activePanel: state.chat.activePanel,
  };
}

export default connect(mapStateToProps, {
  addNewMessage,
  changeMessageBody,
  resetMessageBody,
  changeActivePanel,
})(Chat);
