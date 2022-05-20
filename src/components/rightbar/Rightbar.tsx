import React from "react";
import styled from "styled-components";
import EventImgSample_1 from "../../assets/star.png";
import EventImgSample_2 from "../../assets/event.jpeg";
import ProfileImgSmaple_1 from "../../assets/person/1.jpeg";

const Rightbar: React.FC = () => {
  return (
    <RightbarComponent>
      <RightbarWrapper>
        <EventContainer>
          <StarImg src={EventImgSample_1} />
          <EventText>
            <b>フォロワー限定</b>イベント開催
          </EventText>
          <EventImg src={EventImgSample_2} />
          <RightbarTitle>オンラインの友達</RightbarTitle>
          <RightbarFriendList>
            <RightbarFriend>
              <RightbarProfileImgContainer>
                <RightbarProfileImg src={ProfileImgSmaple_1} />
                <RightbarOnline></RightbarOnline>
              </RightbarProfileImgContainer>
              <RightbarUsername>Shin Code</RightbarUsername>
            </RightbarFriend>
          </RightbarFriendList>
        </EventContainer>
      </RightbarWrapper>
    </RightbarComponent>
  );
};

export default Rightbar;

const RightbarComponent = styled.div({
  flex: "3.5",
});

const RightbarWrapper = styled.div({});
const EventContainer = styled.div({});
const StarImg = styled.img({});
const EventText = styled.span({});
const EventImg = styled.img({});
const RightbarTitle = styled.h4({});
const RightbarFriendList = styled.ul({});
const RightbarFriend = styled.li({});
const RightbarProfileImgContainer = styled.div({});
const RightbarProfileImg = styled.img({});
const RightbarOnline = styled.span({});
const RightbarUsername = styled.span({});
