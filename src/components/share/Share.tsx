import React from "react";
import styled, { css } from "styled-components";
import profileImg from "../../assets/person/1.jpeg";
import { Image, Gif, Face, Analytics } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

function Share() {
  return (
    <ShareComponent>
      <ShareWrapper>
        <ShareTop>
          <ShareProfileImg src={profileImg} />
          <ShareInput type="text" placeholder="今何してる？" />
        </ShareTop>
        <ShareHr />
        <ShareButtons>
          <ShareOptions>
            <ShareOption>
              <OptionImgIcon htmlColor="blue" />
              <OptionText>写真</OptionText>
            </ShareOption>
            <ShareOption>
              <OptionGifIcon htmlColor="hotpink" />
              <OptionText>Gif</OptionText>
            </ShareOption>
            <ShareOption>
              <OptionFeelingIcon htmlColor="green" />
              <OptionText>気持ち</OptionText>
            </ShareOption>
            <ShareOption>
              <OptionAnalyticsIcon htmlColor="red" />
              <OptionText>投票</OptionText>
            </ShareOption>
          </ShareOptions>
          <ShareButton>投稿</ShareButton>
        </ShareButtons>
      </ShareWrapper>
    </ShareComponent>
  );
}

export default Share;

const ShareComponent = styled.div({
  width: "100%",
  height: "170px",
  boxShadow: "0px 0px 15px -10px #777777",
  borderRadius: "10px",
});
const ShareWrapper = styled.div({
  padding: "10px",
});
const ShareTop = styled.div({
  display: "flex",
  alignItems: "center",
});
const ShareProfileImg = styled.img({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "10px",
});
const ShareInput = styled.input({
  border: "none",
  width: "100%",
  ":focus": {
    outline: "none",
  },
});
const ShareHr = styled.hr({
  margin: "20px",
});
const ShareButtons = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const ShareOptions = styled.div({
  display: "flex",
  marginLeft: "20px",
});
const ShareOption = styled.div({
  display: "flex",
  alignItems: "center",
  marginRight: "15px",
  cursor: "pointer",
});
const OptionIcons = css({
  marginRight: "3px",
});
const OptionImgIcon = styled(Image)({
  [`${OptionIcons}`]: {},
});
const OptionGifIcon = styled(Gif)({
  [`${OptionIcons}`]: {},
});
const OptionFeelingIcon = styled(Face)({
  [`${OptionIcons}`]: {},
});
const OptionAnalyticsIcon = styled(Analytics)({
  [`${OptionIcons}`]: {},
});
const OptionText = styled.span({
  fontSize: "14px",
  fontWeight: 550,
});
const ShareButton = styled.button({
  border: "none",
  padding: "6px 17px",
  backgroundColor: "#2c517c",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
  marginRight: "20px",
});

// const ShareOptions = styled.div({});
