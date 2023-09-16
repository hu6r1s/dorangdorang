import React from "react";
import styled from "styled-components";
import logo1 from "../../assets/images/누끼로고1.png";
import { Button } from "@mui/material";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <RoundedLogo1 src={logo1} />
          {/* 로그인 폼 */}
          <form>
            {/* 아이디 */}
            <div style={{ marginBottom: "50px", marginTop: "100px" }}>
              <StyledLabel>아이디</StyledLabel>
              <br />
              <StyledInput />
            </div>
            {/* 비밀번호 */}
            <div style={{ marginBottom: "100px" }}>
              <StyledLabel>비밀번호</StyledLabel>
              <br />
              <StyledInput />
            </div>
            {/* 로그인 버튼 */}
            <StyledButton variant="contained">로그인</StyledButton>
          </form>
          {/* 회원가입 버튼 */}
          <StyledButton
            variant="contained"
            backgroundColor="#A4651B"
            border="3px solid #dd923d"
          >
            회원가입
          </StyledButton>
        </FormContainer>
      </Container>
    </>
  );
};

// StyledComponets
// 배경 이미지
const Container = styled.div`
  width: 100%;
  height: 100%; /* 높이는 적절하게 조절하세요. */
  /* 다른 스타일 속성을 추가할 수 있습니다. */
`;

// 폼 컨테이너
export const FormContainer = styled.div`
  width: 1400px;
  height: 800px;
  border: 3px solid #8f6b42;
  border-radius: 100px;
  background-color: #f7f6eb;
  margin: auto;
  margin-top: 140px;
  position: relative;
  display: flex;
  flex-direction: column; /* 아이템들을 세로로 나열합니다. */
  align-items: center; /* 아이템들을 가로로 가운데 정렬합니다. */
`;

// 폼 상단 이미지
export const RoundedLogo1 = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: absolute;
  top: -100px;
  left: 45%;
`;

// 라벨 컴포넌트
export const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize || "30px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color:#555555;
`;

// 인풋 컴포넌트
export const StyledInput = styled.input`
  width: ${(props) => props.width || "800px"};
  height: ${(props) => props.height || "100px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  font-size: ${(props) => props.fontSize || "50px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
`;

// 버튼 컴포넌트
export const StyledButton = styled(Button)(
  ({
    theme,
    margin,
    backgroundColor,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight,
    border,
  }) => ({
    '&.MuiButtonBase-root' : {
      margin: margin || "10px",
      backgroundColor: backgroundColor || "#D39246",
      width: width || "800px",
      height: height || "80px",
      borderRadius: borderRadius || "20px",
      color: "white", // 여기서는 white를 문자열로 작성
      fontSize: fontSize || "45px",
      fontWeight: fontWeight || "bold",
      border: border || "3px solid #8bcd4a",
      "&:hover": {
        opacity: 0.9 /* 호버 상태일 때 배경색 변경 */,
        backgroundColor: backgroundColor || "#D39246",
      },
    }
    })
    );
    
    export default SignIn;
    