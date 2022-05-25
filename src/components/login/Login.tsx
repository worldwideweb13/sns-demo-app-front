import React from "react";
import Profile from "../../pages/profile/Profile";
import styled, { css } from "styled-components";

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginLeft>
          <LoginLogo>Real SNS</LoginLogo>
          <LoginDesc>本格的なSNSを自分の手で</LoginDesc>
        </LoginLeft>
        <LoginRight>
          <LoginBox>
            <LoginMsg>ログインはこちらから</LoginMsg>
            <LoginInput type="text" placeholder="Eメール" />
            <LoginInput type="text" placeholder="パスワード" />
            <LoginButton>ログイン</LoginButton>
            <LoginForgot>パスワードを忘れた方へ</LoginForgot>
            <LoginRegisterButton>アカウント作成</LoginRegisterButton>
          </LoginBox>
        </LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

// パーツの共通化
const LoginContainerParts = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginButtonParts = css`
  height: 50px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const LoginContainer = styled.div({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#f0f2f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const LoginWrapper = styled.div({
  width: "70%",
  height: "70%",
  display: "flex",
});

const LoginLeft = styled.div({
  [`${LoginContainerParts}`]: {},
});
const LoginLogo = styled.h3({
  fontSize: "50px",
  fontWeight: 800,
  color: "#41428b",
  marginBottom: "10px",
});

const LoginRight = styled.div({
  [`${LoginContainerParts}`]: {},
});

const LoginBox = styled.div({
  height: "400px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0px 0px 15px -10px #777777",
});
const LoginMsg = styled.p({
  textAlign: "center",
  fontWeight: 550,
  fontSize: "20px",
  marginBottom: "10px",
});
const LoginInput = styled.input({
  height: "50px",
  borderRadius: "10px",
  border: "1px solid gray",
  fontSize: "18px",
  paddingLeft: "20px",
  marginBottom: "15px",
  "&:focus": {
    outline: "none",
  },
});
const LoginButton = styled.button({
  [`${LoginButtonParts}`]: {
    backgroundColor: "#41428b",
  },
});
const LoginForgot = styled.span({
  textAlign: "center",
  color: "#41428b",
  margin: "15px 0",
});
const LoginRegisterButton = styled.button({
  [`${LoginButtonParts}`]: {
    backgroundColor: "#3c8b50",
    width: "60%",
    alignSelf: "center",
  },
});

const LoginDesc = styled.span({
  fontSize: "24px",
});
