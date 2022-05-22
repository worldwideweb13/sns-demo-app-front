import styled from "styled-components";
import { Users } from "../../dummyData";
import Online from "../online/Online";

interface ProfileProps {
  profile?: "profile";
}

const Rightbar: React.FC<ProfileProps> = (props) => {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <RightbarProfileTitle>ユーザー情報</RightbarProfileTitle>
        <RightbarProfileInfo>
          <RightbarProfileInfoItem>
            <RightbarProfileInfoKey>出身: </RightbarProfileInfoKey>
            <RightbarProfileInfoKey>福岡: </RightbarProfileInfoKey>
          </RightbarProfileInfoItem>
          <RightbarProfileTitle>あなたの友達</RightbarProfileTitle>
          <RightbarProfileFollowings>
            <RightbarProfileFollowing>
              <RightbarProfileFollowingImg src="assets/person/1.jpeg" />
              <RightbarProfileFollowingName>
                Shin Code
              </RightbarProfileFollowingName>
            </RightbarProfileFollowing>
            <RightbarProfileFollowing>
              <RightbarProfileFollowingImg src="assets/person/2.jpeg" />
              <RightbarProfileFollowingName>
                山田 太郎
              </RightbarProfileFollowingName>
            </RightbarProfileFollowing>
            <RightbarProfileFollowing>
              <RightbarProfileFollowingImg src="assets/person/3.jpeg" />
              <RightbarProfileFollowingName>
                山田 二郎
              </RightbarProfileFollowingName>
            </RightbarProfileFollowing>
            <RightbarProfileFollowing>
              <RightbarProfileFollowingImg src="assets/person/4.jpeg" />
              <RightbarProfileFollowingName>
                山田 三郎
              </RightbarProfileFollowingName>
            </RightbarProfileFollowing>
          </RightbarProfileFollowings>
        </RightbarProfileInfo>
      </>
    );
  };

  return (
    <RightbarComponent>
      <RightbarWrapper>
        {props.profile === "profile" ? <ProfileRightbar /> : <HomeRightbar />}
      </RightbarWrapper>
    </RightbarComponent>
  );
};

export default Rightbar;

/*
 共通パーツのCSSコンポーネント
*/

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

/*
 プロフィールページのCSSコンポーネント
*/

const RightbarProfileTitle = styled.h4({
  fontSize: "18px",
  fontWeight: 550,
  marginBottom: "10px",
});
const RightbarProfileInfo = styled.div({
  marginBottom: "30px",
});
const RightbarProfileInfoKey = styled.span({
  fontWeight: 500,
  marginRight: "5px",
  color: "#555",
});
const RightbarProfileInfoItem = styled.div({
  marginBottom: "10px",
});

const RightbarProfileFollowings = styled.div({
  display: "flex",
  flexWrap: "wrap", //画面サイズに合わせて要素が折り畳むようになる
  justifyContent: "space-between",
});
const RightbarProfileFollowing = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  cursor: "pointer",
});
const RightbarProfileFollowingImg = styled.img({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
});
const RightbarProfileFollowingName = styled.span({});
