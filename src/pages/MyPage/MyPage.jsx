import React from "react";
import AvatarTest from "../../assets/images/누끼로고1.png";
import {SmallContainer, StyledAvatar} from '../../styles/Main'

const MyPage = () => {
  return (
    <div style={{ padding: "50px" }}>
      <SmallContainer>
          <StyledAvatar src={AvatarTest} />
      </SmallContainer>
    </div>
  );
};


export default MyPage;
