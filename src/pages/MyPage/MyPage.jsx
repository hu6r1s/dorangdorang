import React from "react";
import styled from "styled-components";
import AvatarTest from "../../assets/images/누끼로고1.png";

const MyPage = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Container>
          <StyledAvatar src={AvatarTest} />
      </Container>
    </div>
  );
};

export const StyledAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: green;
`;

const Container = styled.div`
  background-color: #f7f6eb;
  border: 3px solid #8f6b42;
  width: 1000px;
  height: 1000px;
  border-radius: 40px;
  margin: 0 auto;
`;

export default MyPage;
