
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import "./Chat.css";
import AvatarDemo from "../components/ui/basic-avatar";

type Message = {
  id: string;
  sender: "me" | "them";
  text: string;
  time?: string;
};

type Conversation = {
  id: string;
  name: string;
  avatar?: string;
  messages: Message[];
};

const initialConversations: Conversation[] = [
  {
    id: "1",
    name: "Shad sheeran",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/500px-Ed_Sheeran-6886_%28cropped%29.jpg",
    messages: [
      { id: "m1", sender: "them", text: "Hey — are you coming to the concert tonight?" },
      { id: "m2", sender: "me", text: "Yep! I'll be there around 7pm." },
    ],
  },
  {
    id: "2",
    name: "Tailwinder",
    avatar: "https://rollingstoneindia.com/wp-content/uploads/2024/09/IMG_8914.jpg",
    messages: [
      { id: "m3", sender: "them", text: "Don't forget the concert tomorrow." },
    ],
  },
];


const Chat = () => {
  const conversations = initialConversations;
  const selected = conversations[1];

  return (
    <div className="chat-container">
      <aside className="conversations-list">
        <h1>Messages</h1>

        {conversations.map((conversation) => (
          <div className={`conversation ${conversation.id === selected.id ? "active" : ""}`} key={conversation.id}>
            <AvatarDemo src={conversation.avatar ?? ""} />
            <div>
              <h3>{conversation.name}</h3>
              <p className="snippet">{conversation.messages[conversation.messages.length - 1]?.text}</p>
            </div>
          </div>
        ))}
      </aside>


      <section className="chat-panel">
        <header className="chat-header">
          <AvatarDemo src={selected.avatar ?? ""} />
          <div className="header">
            <h2>{selected.name}</h2>
            <span className="status">Active</span>
          </div>
        </header>

        <div className="message-area">
          <div className="messages">
            {selected.messages.map((m) => (
              <div key={m.id} className={`message ${m.sender === "me" ? "me" : "them"}`}>
                <div className="bubble">{m.text}</div>
                <div className="time">{m.time ?? ""}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-input">
          <Input value={""} placeholder={`Message ${selected.name}`} />
          <Button >Send</Button>
        </div>
      </section>
    </div>
  );
};

export default Chat;