import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

interface IMessageFormComponent {
  chatId: string;
  userName: string;
  publicKey: string;
  userSecret: string;
}

const MessageFormComponent = ({
  chatId,
  userName,
  publicKey,
  userSecret,
}: IMessageFormComponent) => {
  const [value, setValue] = useState("");
  //   const { chatId, creds } = props;
  console.log(userName, userSecret, publicKey);
  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      setValue(target.value);
    }

    // isTyping(props, chatId);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
        text,
        sender_username: userName,
      });
    }

    setValue("");
  };

  const handleUpload = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    sendMessage({ publicKey, userName, userSecret: userName }, chatId, {
      files: target.files,
      text: "",
    });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">Icon</span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
};

export default MessageFormComponent;
