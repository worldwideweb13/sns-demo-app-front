import React from "react";
import styled from "styled-components";
import { BaseProfImg } from "../style/mixin";
import { IUser } from "../../dummyData";

interface UserProps {
  user: IUser;
}

export const CloseFriend: React.FC<UserProps> = (props) => {
  return (
    <SidebarFriend>
      <SidebarFriendImg src={props.user.profilePicture} />
      <SidebarFriendName>{props.user.username}</SidebarFriendName>
    </SidebarFriend>
  );
};

const SidebarFriend = styled.li({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
});
const SidebarFriendImg = styled.img({
  [`${BaseProfImg}`]: {},
  marginRight: "10px",
});
const SidebarFriendName = styled.span({});
