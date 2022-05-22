import React from "react";
import styled from "styled-components";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

const TimeLine: React.FC = () => {
  return (
    <TimelineComponent>
      <TimelineWrapper>
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id as React.Key} />
        ))}
      </TimelineWrapper>
    </TimelineComponent>
  );
};

export default TimeLine;

const TimelineComponent = styled.div({
  flex: "6",
});

const TimelineWrapper = styled.div({
  padding: "20px",
});
