import styles from "./Chatbot.module.css";
import { BsRobot } from "react-icons/bs";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const API_KEY = "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";

function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, how can i help you with?",
      sender: "ChatGPT",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    //apiMessages { role: "user" or "assistant", content: "Message content" }
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I am 20 years old.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.chatbotIcon}
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <BsRobot />
      </div>

      {showChatbot && (
        <div className={styles.chatbotGPT}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="Chatbot is typing" />
                  ) : null
                }
              >
                {messages.map((message, index) => {
                  return <Message key={index} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
