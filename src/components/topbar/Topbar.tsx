import React from "react";

const Home: React.FC = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input
            type="text"
            name="searchInput"
            placeholder="探し物はなんですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">1</div>
        <div className="topbarIconItem">2</div>
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
