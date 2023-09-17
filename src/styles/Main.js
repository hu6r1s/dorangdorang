import Jandi from "assets/images/jandi.png";
import styled from "styled-components";
import { Button } from "@mui/material";


export const LogoImage = styled.img`
  height: 70px;
  width: 150px;
`;

export const LoginButton = styled.div`
  color: #000;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 100px;
  background-color: #EEECD8;
`;

export const ContentContainer = styled.div`
  background: #EEECD8 url(${Jandi}) left top/5% repeat;
  height: 100vh;
`;


// SignIn Page About //
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
  color: #555555;
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
    "&.MuiButtonBase-root": {
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
    },
  })
);

// SignUp Page  About //
export const DuplicateCheckButton=styled.button`
  position:absolute;
  top: 41px;
  right:-10px;
  width:100px;
  height:55px;
  border-radius:10px;
  font-size:20px;
  font-weight:bold;
  color:#A4651B;
  background-color:#C3E79F;
`


// MyPage Page About //
export const StyledAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: green;
`;

export const SmallContainer = styled.div`
  background-color: #f7f6eb;
  border: 3px solid #8f6b42;
  width: 1000px;
  height: 1000px;
  border-radius: 40px;
  margin: 0 auto;
`; 