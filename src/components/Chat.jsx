import React, { useContext } from "react";
import cam from "../images/cam.png"
import addUser from "../images/add-user.png"
import plus from "../images/plus.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={addUser} alt="" />
          <img src={plus} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;