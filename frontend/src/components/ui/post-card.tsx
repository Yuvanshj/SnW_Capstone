"use client";

import {
  FaRegPaperPlane,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { useState } from "react";

interface PostProps {
  id?: string | number;
  authorName?: string;
  authorHandle?: string;
  authorAvatar?: string;
  time?: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  initialLiked?: boolean;
  initialBookmarked?: boolean;
  className?: string;
}

export const PostCard: React.FC<PostProps> = ({
  id,
  authorName = "HextaStudio",
  authorHandle = "Tomodachi",
  authorAvatar = "https://i.imgur.com/MUjzWdu.png",
  time = "7h",
  text = "– Gorgeous web components without any effort! ✨\n\n🚀 HextaStudio launched their new product HextaUI, a collection of beautiful web components.\n\n🥳 Check it out now!",
  imageSrc = "https://i.imgur.com/zU3m0eC.png",
  imageAlt = "HextaUI",
  initialLiked = false,
  initialBookmarked = false,
  className = "",
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [bookmarked, setBookmarked] = useState(initialBookmarked);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  return (
    <div className={`m-4 w-full rounded-4xl bg-background border border-primary/10 shadow-2xl/10 p-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-4 card-header">
        <div className="flex items-center gap-4">
          <img
            src={authorAvatar}
            alt={authorName}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="flex flex-col">
              {authorName}
              <span className="flex items-center gap-2 opacity-70 text-sm">
                <small>@{authorHandle}</small>
                <span>·</span>
                <small>{time}</small>
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-6">
        <p className="whitespace-pre-wrap">{text}</p>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1080}
            loading="lazy"
            style={{ maxHeight: 400, width: "100%", objectFit: "cover" }}
            className="max-w-full rounded-lg"
          />
        )}
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-evenly gap-2">
        <button
          onClick={handleLike}
          className="flex grow items-center justify-center gap-3 rounded-xl px-4 py-2 transition hover:bg-secondary"
        >
          {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          <span className="inline font-medium opacity-90 text-[14px] transition hover:opacity-100 max-sm:hidden">
            {liked ? "Liked" : "Like"}
          </span>
        </button>

        <button
          onClick={handleBookmark}
          className="flex grow items-center justify-center gap-3 rounded-xl px-4 py-2 transition hover:bg-secondary"
        >
          {bookmarked ? <FaBookmark color="#00bfff" /> : <FaRegBookmark />}
          <span className="inline font-medium opacity-90 text-[14px] transition hover:opacity-100 max-sm:hidden">
            {bookmarked ? "Saved" : "Save"}
          </span>
        </button>

        <button className="flex grow items-center justify-center gap-3 rounded-xl px-4 py-2 transition hover:bg-white/5">
          <FaRegPaperPlane />
          <span className="inline font-medium opacity-90 text-[14px] transition hover:opacity-100 max-sm:hidden">
            Share
          </span>
        </button>
      </div>
    </div>
  );
};