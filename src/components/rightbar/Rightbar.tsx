import React from "react";
import styled from "styled-components";

const Rightbar: React.FC = () => {
  return <RightbarComponent>RightBar</RightbarComponent>;
};

export default Rightbar;

const RightbarComponent = styled.div({
  flex: "3.5",
});
