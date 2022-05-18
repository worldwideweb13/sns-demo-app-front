import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <TimeLine />
      <Rightbar />
    </>
  );
};

export default Home;
