
import { useState, useRef, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import "./Chat.css";
import AvatarDemo from "../components/ui/basic-avatar";

type Message = { id: string; sender: "me" | "them"; text: string; time?: string };
type Conversation = { id: string; name: string; avatar?: string; messages: Message[] };

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
  const [convos, setConvos] = useState(initialConversations);
  const [selId] = useState("2");
  const selected = convos.find(c => c.id === selId) || convos[0];

  const [text, setText] = useState("");
  const msgsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = msgsRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [selected.messages.length]);

  const send = () => {
    const t = text.trim();
    if (!t) return;

    const msg: Message = {
      id: Date.now().toString(),
      sender: "me",
      text: t,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setConvos(prev => prev.map(c => {
      if (c.id !== selected.id) return c;
      return { ...c, messages: [...c.messages, msg] };
    }));

    setText("");
  };

  const onKey = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="chat-container">
      <aside className="conversations-list">
        <h1>Messages</h1>

        {convos.map((conversation) => (
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
            <div className="messages" ref={msgsRef}>
            {selected.messages.map((m) => (
              <div key={m.id} className={`message ${m.sender === "me" ? "me" : "them"}`}>
                <div className="bubble">{m.text}</div>
                <div className="time">{m.time ?? ""}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-input">
          <Input
            value={text}
            placeholder={`Message ${selected.name}`}
            onChange={(e: any) => setText(e.target.value)}
            onKeyDown={onKey}
          />
          <Button onClick={send}>Send</Button>
        </div>
      </section>
    </div>
  );
};

export default Chat;