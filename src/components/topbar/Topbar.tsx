import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./Topbar.css";
import profileImg from "../../assets/person/1.jpeg";

const Home: React.FC = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <img src={profileImg} alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
