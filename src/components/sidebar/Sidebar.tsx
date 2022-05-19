import React from "react";
import styled from "styled-components";
import {
  Home,
  Search,
  Notifications,
  MessageRounded,
  Bookmark,
  Person,
  Settings,
} from "@mui/icons-material";
import FirendImg from "../../assets/person/2.jpeg";

const Sidebar: React.FC = () => {
  return (
    <SidebarComponent>
      <SidebarWrapper>
        <SidebarList>
          <SidebarListItem>
            <Home />
            <SidebarListItemText>ホーム</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Search />
            <SidebarListItemText>検索</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Notifications />
            <SidebarListItemText>通知</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <MessageRounded />
            <SidebarListItemText>メッセージ</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Bookmark />
            <SidebarListItemText>ブックマーク</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Person />
            <SidebarListItemText>プロフィール</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Settings />
            <SidebarListItemText>設定</SidebarListItemText>
          </SidebarListItem>
        </SidebarList>
        <SidebarHr />
        <SidebarFriendList>
          <SidebarFriend>
            <SidebarFriendImg src={FirendImg} />
            <SidebarFriendName>Shin Code</SidebarFriendName>
          </SidebarFriend>
        </SidebarFriendList>
      </SidebarWrapper>
    </SidebarComponent>
  );
};

export default Sidebar;

const SidebarComponent = styled.div({
  flex: 2.5,
  height: "100vh",
});
const SidebarWrapper = styled.div({
  padding: "20px",
});
const SidebarList = styled.ul({
  padding: "0px",
  margin: "0px",
  listStyle: "none",
});
const SidebarListItem = styled.li({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  padding: "4px 6px",
  cursor: "pointer",
  boxShadow: "0px 0px 27px -5px #777777",
  borderRadius: "10px",
  transition: "all 0.3s",
  "&:hover": {
    boxShadow: "none",
    transform: "translateY(5px)",
  },
});
const SidebarIcon = styled(Home)({});
const SidebarIcons = styled.svg({});
const SidebarListItemText = styled.span({});
const SidebarHr = styled.hr({});
const SidebarFriendList = styled.ul({});
const SidebarFriend = styled.li({});
const SidebarFriendImg = styled.img({
  width: "32px",
  height: "32px",
});
const SidebarFriendName = styled.span({});
