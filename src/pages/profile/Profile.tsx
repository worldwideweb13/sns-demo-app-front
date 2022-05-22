import React from "react";
import styled from "styled-components";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Topbar from "../../components/topbar/Topbar";

const Profile: React.FC = () => {
  return (
    <>
      <Topbar />
      <ProfileContaienr>
        <Sidebar />
        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileCoverImg src="assets/post/3.jpeg" />
              <ProfileUserImg src="assets/person/1.jpeg" />
            </ProfileCover>
            <ProfileInfo>
              <ProfileInfoName>Shin Code</ProfileInfoName>
              <ProfileInfoDesc>MERN開発を勉強中！</ProfileInfoDesc>
            </ProfileInfo>
          </ProfileRightTop>
          <ProfileRightBottom>
            <TimeLine />
            <Rightbar profile="profile" />
          </ProfileRightBottom>
        </ProfileRight>
      </ProfileContaienr>
    </>
  );
};

export default Profile;

const ProfileContaienr = styled.div({
  display: "flex",
});

const ProfileRight = styled.div({
  flex: "10.5",
});
const ProfileRightTop = styled.div({});
const ProfileCover = styled.div({
  height: "320px",
  position: "relative",
});
const ProfileCoverImg = styled.img({
  width: "100%",
  height: "250px",
  objectFit: "cover",
});
const ProfileUserImg = styled.img({
  position: "absolute",
  left: 0,
  right: 0,
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  margin: "auto",
  top: "150px",
  border: "3px solid white",
});
const ProfileInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const ProfileInfoName = styled.h4({
  fontSize: "24px",
});
const ProfileInfoDesc = styled.span({});
const ProfileRightBottom = styled.div({
  display: "flex",
});
