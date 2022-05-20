import React from "react";
import styled from "styled-components";
import ProfileImg from "../../assets/person/1.jpeg";
import PostImgSample from "../../assets/post/1.jpeg";
import LikeImgSample from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";
import { BaseProfImg } from "../style/mixin";

function Post() {
  return (
    <PostComponent>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <PostProfileImg src={ProfileImg} />
            <PostUsername>Shin Code</PostUsername>
            <PostDate>5分前</PostDate>
          </PostTopLeft>
          <PostTopRight>
            <PostMenu />
          </PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>SNSを自作中です</PostText>
          <PostImg src={PostImgSample} />
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeIcon src={LikeImgSample} />
            <PostLikeCounter>５人がいいねを押しました</PostLikeCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostCommentText>4:コメント</PostCommentText>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </PostComponent>
  );
}

export default Post;

const PostComponent = styled.div({
  width: "100%",
  boxShadow: "0px 0px 15px -10px #777777",
  borderRadius: "10px",
  margin: "30px 0",
});
const PostWrapper = styled.div({
  padding: "10px",
});
const PostProfileImg = styled.img({
  [`${BaseProfImg}`]: {},
});
const PostTop = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const PostTopLeft = styled.div({
  display: "flex",
  alignItems: "center",
});

const PostUsername = styled.span({
  fontSize: "15px",
  fontWeight: 550,
  margin: "0 10px",
});
const PostDate = styled.span({
  fontSize: "12px",
});
const PostCenter = styled.div({
  margin: "20px 0",
});
const PostTopRight = styled.div({});
const PostMenu = styled(MoreVert)({});
const PostText = styled.span({});
const PostImg = styled.img({
  marginTop: "20px",
  width: "100%",
  maxHeight: "500px",
  objectFit: "contain",
});
const PostBottom = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const PostBottomLeft = styled.div({
  display: "flex",
  alignItems: "center",
});
const LikeIcon = styled.img({
  width: "24px",
  height: "24px",
  marginRight: "5px",
  cursor: "pointer",
});
const PostLikeCounter = styled.span({
  fontSize: "15px",
});
const PostBottomRight = styled.div({});
const PostCommentText = styled.div({
  cursor: "pointer",
  borderBottom: "1px solid gray",
  fontSize: "15px",
  marginRight: "3px",
});