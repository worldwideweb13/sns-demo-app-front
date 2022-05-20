import React from "react";
import styled from "styled-components";
import ProfileImg from "../../assets/person/1.jpeg";
import PostImgSample from "../../assets/post/1.jpeg";
import LikeImgSample from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <PostComponent>
      <PostWrapper>
        <PostTop>
          <PostProfileImg src={ProfileImg} />
          <PostUsername>Shin Code</PostUsername>
          <PostDate>5分前</PostDate>
        </PostTop>
        <PostRight>
          <PostMenu />
        </PostRight>
        <PostCenter>
          <PostText>SNSを自作中です</PostText>
          <PostImg src={PostImgSample} />
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeImg src={LikeImgSample} />
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

const PostComponent = styled.div({});
const PostWrapper = styled.div({});
const PostTop = styled.div({});
const PostProfileImg = styled.img({});
const PostUsername = styled.span({});
const PostDate = styled.span({});
const PostRight = styled.div({});
const PostMenu = styled(MoreVert)({});
const PostCenter = styled.div({});
const PostText = styled.span({});
const PostImg = styled.img({});
const PostBottom = styled.div({});
const PostBottomLeft = styled.div({});
const LikeImg = styled.img({});
const PostLikeCounter = styled.span({});
const PostBottomRight = styled.div({});
const PostCommentText = styled.div({});
