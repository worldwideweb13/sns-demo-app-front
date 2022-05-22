import React, { ReactNode } from "react";
import styled from "styled-components";
import { MoreVert } from "@mui/icons-material";
import { BaseProfImg } from "../style/mixin";
import { IPost, Users } from "../../dummyData";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = (props) => {
  // const user = Users.filter((user) => user.id === 1);
  // const name = user[0].username;
  // console.log(user[0]["username"]);
  return (
    <PostComponent>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <PostProfileImg
              src={
                Users.filter((user) => user.id === props.post.id)[0]
                  .profilePicture
              }
            />
            <PostUsername>
              {Users.filter((user) => user.id === props.post.id)[0].username}
            </PostUsername>
            <PostDate>{props.post.date}</PostDate>
          </PostTopLeft>
          <PostTopRight>
            <PostMenu />
          </PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>{props.post.desc}</PostText>
          <PostImg src={props.post.photo} />
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeIcon src="assets/heart.png" />
            <PostLikeCounter>
              {props.post.like as ReactNode}人がいいねを押しました！
            </PostLikeCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostCommentText>
              {props.post.comment as ReactNode}:コメント
            </PostCommentText>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </PostComponent>
  );
};

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
  text: "aaa",
  fontSize: "15px",
});
const PostBottomRight = styled.div({});
const PostCommentText = styled.div({
  cursor: "pointer",
  borderBottom: "1px solid gray",
  fontSize: "15px",
  marginRight: "3px",
});
