import React from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleReject = ()=>{
    const botMessage = createChatBotMessage("please ask the question related to this website, or you might have typo in your message")
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handlePrompt = (promptType) => {
    let promptMessage;
    if (promptType === 'name') {
      promptMessage = createChatBotMessage('Please enter your name:');
    } else if (promptType === 'email') {
      promptMessage = createChatBotMessage('Please enter your email:');
    } else if (promptType === 'phone') {
      promptMessage = createChatBotMessage('Please enter your phone number:');
    }
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, promptMessage],
    }));
  };

  const handleUserInput = async (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('name')) {
      handlePrompt('name');
    } else if (lowerMessage.includes('email')) {
      handlePrompt('email');
    } else if (lowerMessage.includes('phone')) {
      handlePrompt('phone');
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/user-chat', {
          message: lowerMessage,
        });
        const data = response.data; // axios already parses JSON
        const botMessage = createChatBotMessage(data.message);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      } catch (error) {
        console.error('Error:', error);
        const botMessage = createChatBotMessage('Error: Could not process your request.');
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleReject,
            handlePrompt,
            handleUserInput,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
