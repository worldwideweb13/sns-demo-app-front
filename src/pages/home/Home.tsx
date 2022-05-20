import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
      <HomeContainer>
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div({
  display: "flex",
  backgroundColor: "#f8fcff",
});
