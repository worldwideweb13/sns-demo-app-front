import React from "react";
import styled from "styled-components";
import Share from "../share/Share";

function TimeLine() {
  return (
    <TimelineComponent>
      <TimelineWrapper>
        <Share />
      </TimelineWrapper>
    </TimelineComponent>
  );
}

export default TimeLine;

const TimelineComponent = styled.div({
  flex: "6",
});

const TimelineWrapper = styled.div({
  padding: "20px",
});
