import React from "react";
import styled, { css } from "styled-components";
import {
  Home,
  Search,
  Notifications,
  MessageRounded,
  Bookmark,
  Person,
  Settings,
} from "@mui/icons-material";
import FirendImg_1 from "../../assets/person/2.jpeg";
import FirendImg_2 from "../../assets/person/3.jpeg";
import FirendImg_3 from "../../assets/person/4.jpeg";

const Sidebar: React.FC = () => {
  return (
    <SidebarComponent>
      <SidebarWrapper>
        <SidebarList>
          <SidebarListItem>
            <HomeIcon />
            <SidebarListItemText>ホーム</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <SearchIcon />
            <SidebarListItemText>検索</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <NotificationsIcon />
            <SidebarListItemText>通知</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <MessageRoundedIcon />
            <SidebarListItemText>メッセージ</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <BookmarkIcon />
            <SidebarListItemText>ブックマーク</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <PersonIcon />
            <SidebarListItemText>プロフィール</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <SettingsIcon />
            <SidebarListItemText>設定</SidebarListItemText>
          </SidebarListItem>
        </SidebarList>
        <SidebarHr />
        <SidebarFriendList>
          <SidebarFriend>
            <SidebarFriendImg src={FirendImg_1} />
            <SidebarFriendName>テスト太郎</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImg src={FirendImg_2} />
            <SidebarFriendName>テスト二郎</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImg src={FirendImg_3} />
            <SidebarFriendName>テスト三郎</SidebarFriendName>
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
  boxShadow: "0px 0px 15px -10px #777777",
  borderRadius: "10px",
  transition: "all 0.3s",
  "&:hover": {
    boxShadow: "none",
    transform: "translateY(5px)",
  },
});

// パーツの共通化
const SidebarIcons = css({
  fontSize: "35px !important",
  marginRight: "10px",
});

const HomeIcon = styled(Home)({
  [`${SidebarIcons}`]: {},
});
const SearchIcon = styled(Search)({
  [`${SidebarIcons}`]: {},
});
const NotificationsIcon = styled(Notifications)({
  [`${SidebarIcons}`]: {},
});
const MessageRoundedIcon = styled(MessageRounded)({
  [`${SidebarIcons}`]: {},
});
const BookmarkIcon = styled(Bookmark)({
  [`${SidebarIcons}`]: {},
});
const PersonIcon = styled(Person)({
  [`${SidebarIcons}`]: {},
});
const SettingsIcon = styled(Settings)({
  [`${SidebarIcons}`]: {},
});

const SidebarListItemText = styled.span({
  fontSize: "20px",
  paddingTop: "3px",
});

const SidebarHr = styled.hr({
  margin: "20px 0",
});
const SidebarFriendList = styled.ul({
  padding: 0,
  margin: 0,
  listStyle: "none",
});
const SidebarFriend = styled.li({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
});
const SidebarFriendImg = styled.img({
  width: "32px",
  height: "32px",
  objectFit: "cover",
  borderRadius: "50%",
  marginRight: "10px",
});
const SidebarFriendName = styled.span({});
