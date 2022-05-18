import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import profileImg from "../../assets/person/1.jpeg";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <TopbarContainer>
      <TopbarLeft>
        <Logo>Real SNS</Logo>
      </TopbarLeft>
      <TopbarCenter>
        <Searchbar>
          <SearchIcon />
          <SearchInput type="text" placeholder="探し物はなんですか？" />
        </Searchbar>
      </TopbarCenter>
      <TopbarRight>
        <TopbarItemIcons>
          <TopbarIconItem>
            <Chat />
            <TopbarIconBadge>1</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <Notifications />
            <TopbarIconBadge>2</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarImg src={profileImg} alt="" />
        </TopbarItemIcons>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default Home;

const TopbarContainer = styled.div({
  backgroundColor: "#2c517c",
  height: "50px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 100,
});

const TopbarLeft = styled.div({
  /* flex...12/指定数 にレイアウト  */
  flex: 3,
});

const Logo = styled.span({
  fontSize: "24px",
  color: "white",
  fontWeight: "bold",
  marginLeft: "20px",
});

const TopbarCenter = styled.div({
  flex: 5,
});

const Searchbar = styled.div({
  width: "100%",
  height: "30px",
  backgroundColor: "white",
  borderRadius: "25px",
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled.input({
  border: "none",
  width: "80%",
  // 擬似クラスを適用
  "&:focus": {
    outline: "none",
  },
});

// material UIにstyledcomponentを適用する
const SearchIcon = styled(Search)({
  fontSize: "20px !important",
  marginLeft: "10px",
  marginRight: "5px",
});

const TopbarRight = styled.div({
  flex: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: "white",
});

const TopbarItemIcons = styled.div({
  display: "flex",
});

const TopbarIconItem = styled.div({
  marginRight: "15px",
  cursor: "pointer",
  position: "relative",
  marginTop: "5px",
});

const TopbarIconBadge = styled.span({
  position: "absolute",
  top: "-5px",
  right: "-5px",
  backgroundColor: "#db6ab9",
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
});

const TopbarImg = styled.img({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  cursor: "pointer",
  objectFit: "cover",
});
