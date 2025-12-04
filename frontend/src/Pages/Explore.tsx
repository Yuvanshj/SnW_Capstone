import { useState } from "react";
import ExploreComp from "../components/comps/ExploreComp";
import "./Explore.css";

const Explore = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="explore-page">
      <header className="explore-header">
        <div className="explore-header-left">
          <h2 className="explore-title">Explore</h2>
          <p className="explore-desc">
            Discover beautiful imagery and highlights from around the community. Interact with the sphere below to explore content.
          </p>
        </div>

        <div className="search-tab">
          <div className="search-input-wrap">
            <input
              aria-label="Search"
              type="search"
              placeholder="Search users"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
              {query.trim() !== "" && (
                <div className="suggestion-box" role="list" aria-label="Suggestions">
                  {['Tim', 'Samba', 'Pookie'].map((name) => (
                    <div
                      key={name}
                      className="suggestion-item"
                    >
                      <span className="suggestion-name">{name}</span>
                      <span className="suggestion-name">{query}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>

          
        </div>

      </header>

      <div className="explore-sphere">
        <ExploreComp />
      </div>
    </div>
  );
};

export default Explore;
