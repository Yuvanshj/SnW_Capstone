import "./home.css"
import { useState } from "react";
import ScrollablePosts from "../components/blocks/ScrollablePosts";
import {PlusCircleIcon} from "lucide-react"
import Hoverbtn from "../components/ui/Hoverbtn.tsx"; 

const initialPosts = [
  {
    id: 1,
    authorName: "Ava Green",
    authorHandle: "avag",
    authorAvatar: "https://i.pravatar.cc/48?img=12",
    time: "2h",
    text: "Just finished a new illustration — feel free to leave feedback!",
    imageSrc: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Illustration"
  },
  {
    id: 2,
    authorName: "Liam Walker",
    authorHandle: "liamwalker",
    authorAvatar: "https://i.pravatar.cc/48?img=5",
    time: "5h",
    text: "Excited to share my latest travel shots from Kyoto.",
    imageSrc: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kyoto"
  },
  {
    id: 3,
    authorName: "Nora Sanchez",
    authorHandle: "noras",
    authorAvatar: "https://i.pravatar.cc/48?img=20",
    time: "1d",
    text: "Quick tips for better composition in photography.",
    imageSrc: "",
  },
];

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ authorName: "", authorHandle: "", imageSrc: "", text: "" });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePost = () => {
    if (!form.text.trim()) return;
    const newPost = {
      id: Date.now(),
      authorName: form.authorName || "You",
      authorHandle: form.authorHandle || "you",
      authorAvatar: `https://i.pravatar.cc/48?u=${Date.now()}`,
      time: "now",
      text: form.text,
      imageSrc: form.imageSrc,
      imageAlt: form.imageSrc ? "User image" : "",
    };
    setPosts(prev => [newPost, ...prev]);
    setForm({ authorName: "", authorHandle: "", imageSrc: "", text: "" });
    closeModal();
  };

  return (
    <>
      <div className="home-container z-10">
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}> 
          <Hoverbtn icon={<PlusCircleIcon />} onClick={openModal}> New Post </Hoverbtn>
        </div>

        <ScrollablePosts posts={posts} />
      </div>

      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-header">
              <h3>Create Post</h3>
              <button className="modal-post-btn" onClick={handlePost}>Post</button>
            </div>
            <div className="modal-body">
              <input name="authorName" placeholder="Your name" value={form.authorName} onChange={handleChange} className="modal-input" />
              <input name="authorHandle" placeholder="Handle" value={form.authorHandle} onChange={handleChange} className="modal-input" />
              <input name="imageSrc" placeholder="Image URL (optional)" value={form.imageSrc} onChange={handleChange} className="modal-input" />
              <textarea name="text" placeholder="What's happening?" value={form.text} onChange={handleChange} className="modal-textarea" />
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="button-primary" style={{ background: 'transparent', color: 'var(--text)' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home

