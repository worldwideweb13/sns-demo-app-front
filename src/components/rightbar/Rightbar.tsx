import React from "react";
import styled from "styled-components";

const Rightbar: React.FC = () => {
  return (
    <RightbarComponent>
      <RightbarWrapper>
        <EventContainer>
          <StarImg src="assets/star.png" />
          <EventText>
            <b>フォロワー限定</b>イベント開催
          </EventText>
        </EventContainer>
        <EventImg src="assets/event.jpeg" />
        <RightbarTitle>オンラインの友達</RightbarTitle>
        <RightbarFriendList>
          <RightbarFriend>
            <RightbarProfileImgContainer>
              <RightbarProfileImg src="assets/person/1.jpeg" />
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImgContainer>
            <RightbarUsername>Shin Code</RightbarUsername>
          </RightbarFriend>
          <RightbarFriend>
            <RightbarProfileImgContainer>
              <RightbarProfileImg src="assets/person/2.jpeg" />
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImgContainer>
            <RightbarUsername>Tanaka</RightbarUsername>
          </RightbarFriend>
        </RightbarFriendList>
        <PromotionTitle>プロモーション広告</PromotionTitle>
        <RightbarPromotionImg src="assets/promotion/promotion1.jpeg" />
        <PromotionName>ショッピング</PromotionName>
        <RightbarPromotionImg src="assets/promotion/promotion2.jpeg" />
        <PromotionName>カーショップ</PromotionName>
        <RightbarPromotionImg src="assets/promotion/promotion3.jpeg" />
        <PromotionName>ShinCode株式会社</PromotionName>
      </RightbarWrapper>
    </RightbarComponent>
  );
};

export default Rightbar;

const RightbarComponent = styled.div({
  flex: "3.5",
});

const RightbarWrapper = styled.div({
  padding: "20px 20px 0 0",
});
const EventContainer = styled.div({
  display: "flex",
  alignItems: "center",
});
const StarImg = styled.img({
  width: "40px",
  height: "40px",
  marginRight: "5px",
});
const EventText = styled.span({
  fontWeight: 300,
  fontSize: "15px",
});
const EventImg = styled.img({
  width: "100%",
  borderRadius: "10px",
  margin: "25px 0",
});
const RightbarTitle = styled.h4({
  marginBottom: "20px",
});
const RightbarFriendList = styled.ul({
  padding: 0,
  margin: 0,
  listStyle: "none",
});
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

const PromotionTitle = styled.p({
  fontSize: "18px",
  fontWeight: 550,
  marginBottom: "-10px",
});
const RightbarPromotionImg = styled.img({
  width: "85%",
  borderRadius: "10px",
  margin: "25px 0",
});
const PromotionName = styled.p({
  fontSize: "small",
  color: "#434343",
  marginTop: "-20px",
});
