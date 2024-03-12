import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Avatar,
  ChatContainer,
  Conversation,
  ConversationHeader,
  ConversationList,
  ExpansionPanel,
  InfoButton,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  Search,
  Sidebar,
  TypingIndicator,
  VideoCallButton,
  VoiceCallButton,
} from "@chatscope/chat-ui-kit-react";
import React, { useContext, useState } from "react";
// import { formatDistance } from "date-fns";
// import { IoMdLogOut } from "react-icons/io";
// import { auth, signOut, collection, getDocs, query, where, db, addDoc, onSnapshot, orderBy, serverTimestamp, updateDoc, doc, arrayUnion } from "../config/firebase";
// import { useSearchParams, useNavigate } from "react-router-dom"
// import User from "../context/user";
// import { useDebounce } from 'use-debounce';
import logo from "../assets/react.svg";
import { CiLogout } from "react-icons/ci";
import { signOut,auth } from "../config/firebase";
import User from "../context/user";

function UserChat() {
  const [messageInputValue, setMessageInputValue] = useState("");

  const user = useContext(User).user;

  const logout = () => {
    signOut(auth)
  }

  const colors = ['e76f51','3a5a40','ffbe0b','fb5607','ff006e','8338ec'];
  const randomColors = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div
      style={{
        height: "600px",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
            <ConversationHeader>
              {/* <ConversationHeader.Back /> */}
              <Avatar src={`https://ui-avatars.com/api/?background=${randomColors}&color=fff&name=${user.full_name}`} name="Zoe" />
              <ConversationHeader.Content
                userName={user.full_name}
              />

              <ConversationHeader.Actions>
                <CiLogout onClick={logout} cursor={"pointer"} size={30} />
              </ConversationHeader.Actions>
            </ConversationHeader>
          <Search placeholder="Search..." />
          <ConversationList>

            <Conversation
              name="Lilly"
              lastSenderName="Lilly"
              info="Yes i can do it for you"
            >
              <Avatar src={logo} name="Lilly" status="available" />
            </Conversation>
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={logo} name="Zoe" />
            <ConversationHeader.Content
              userName="Zoe"
              info="Active 10 mins ago"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
            typingIndicator={<TypingIndicator content="Zoe is typing" />}
          >
            <MessageSeparator content="Saturday, 30 November 2019" />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar src={logo} name="Zoe" />
            </Message>
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={() => setMessageInputValue("")}
          />
        </ChatContainer>

        {/* <Sidebar position="right">
          <ExpansionPanel open title="INFO">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </ExpansionPanel>
          <ExpansionPanel title="LOCALIZATION">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </ExpansionPanel>
          <ExpansionPanel title="MEDIA">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </ExpansionPanel>
          <ExpansionPanel title="SURVEY">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </ExpansionPanel>
          <ExpansionPanel title="OPTIONS">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </ExpansionPanel>
        </Sidebar> */}
      </MainContainer>
    </div>
  );
}

export default UserChat;