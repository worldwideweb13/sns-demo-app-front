import React from "react";
import styled from "styled-components";
import { IUser } from "../../dummyData";

interface UserProps {
  user: IUser;
}

const Online: React.FC<UserProps> = (props) => {
  return (
    <RightbarFriend>
      <RightbarProfileImgContainer>
        <RightbarProfileImg src={props.user.profilePicture} />
        <RightbarOnline></RightbarOnline>
      </RightbarProfileImgContainer>
      <RightbarUsername>{props.user.username}</RightbarUsername>
    </RightbarFriend>
  );
};

export default Online;

const RightbarFriend = styled.li({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
});
const RightbarProfileImgContainer = styled.div({
  marginRight: "10px",
  position: "relative",
});
const RightbarProfileImg = styled.img({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
});
const RightbarUsername = styled.span({
  fontWeight: 550,
});
const RightbarOnline = styled.span({
  backgroundColor: "purple",
  position: "absolute",
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  top: "-2px",
  left: 0,
  border: "2px solid white",
});
