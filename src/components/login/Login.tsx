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
        <LoginRight>実務経験を積みたい</LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

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
  backgroundColor: "green",
  display: "flex",
});

const LoginContainerParts = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
const LoginDesc = styled.span({
  fontSize: "24px",
});
