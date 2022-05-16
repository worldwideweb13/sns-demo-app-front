import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            name="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconItem">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconItem">2</span>
        </div>
      </div>
      <img
        src="../../../public/assets/person/1.jpeg"
        alt=""
        className="topbarImg"
      />
    </div>
  );
};

export default Home;
