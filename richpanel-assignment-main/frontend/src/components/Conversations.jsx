import React from "react";
import { ConversationItem } from "./ConversationItem";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Conversations = () => {
  const conversations = [
    {
      id: 1,
      participant: "Akash",
      timestamp: "2024-02-15 @ 11:18",
      lastMessage: "Hey, how are you?",
      isCurrentUser: true,
    },
    {
      id: 2,
      participant: "Sonia Singh",
      timestamp: "2024-02-15 @ 11:21",
      lastMessage: "I am fine ",
      isCurrentUser: false,
    },
    {
      id: 3,
      participant: "Akash",
      timestamp: "2024-02-15 @ 11:30",
      lastMessage: "Will you come to party ? ",
      isCurrentUser: true,
    },
    {
      id: 4,
      participant: "Sonia Singh",
      timestamp: "2024-02-15 @ 16:21",
      lastMessage: "party ?",
      isCurrentUser: false,
    },
    {
      id: 5,
      participant: "Sonia Singh",
      timestamp: "2024-02-15 @ 16:22",
      lastMessage: "hello, which party?",
      isCurrentUser: true,
    },
  ];

  // border-solid border-2 border-red-200

  return (
    <div className="h-full flex flex-col justify-between container mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-black border-b-2">Sonia Singh</h1>
      <ul className="grow flex flex-col space-y-4 w-full ">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </ul>

      <div className="flex items-center">
        <input
          className="border-2 w-full mt-2 p-3 rounded-lg"
          placeholder="type your message here..."
          type="text"
          name="messageinput"
          id="msginput"
        />
        <FontAwesomeIcon
          className="m-2 fa-xl text-blue-700 cursor-pointer"
          icon={faPaperPlane}
        />
      </div>
    </div>
  );
};
