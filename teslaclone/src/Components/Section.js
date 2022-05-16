import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <>
      <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="./images/down-arrow.svg" />
        </Buttons>
      </Wrap>
    </>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-algin: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  align-items: center;
  opacity: 0.85;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled.div`
  background-color: white;
  opacity: 0.66;
  color: black;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;
