import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      actions.handleHello();
    } else if (lowerCaseMessage.includes("contact")) {
      actions.handleUserInput(message);
    } else {
      actions.handleReject();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;