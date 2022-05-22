import styled from "styled-components";
import { Users } from "../../dummyData";
import Online from "../online/Online";

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
          {Users.map((user) => (
            <Online user={user} key={user.id as React.Key} />
          ))}
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
