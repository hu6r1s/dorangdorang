import styled from "styled-components";
import { Button } from "@mui/material";
import Jandi from 'assets/images/jandi.png'


export const LogoImage = styled.img`
  height: 80px;
  width: 160px;
`;

export const LoginButton = styled.div`
  color: #000;
  cursor: pointer;
  font-size: 40px;
  font-family: Dongle-Bold, sans-serif;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: #EEECD8;
`;

export const ContentContainer = styled.div`
  background: #EEECD8 url(${Jandi}) left top/5% repeat;
  height: 100vh;
`;


// SignIn Page About //
// 폼 컨테이너
export const FormContainer = styled.div`
  width: 1000px;
  height: 600px;
  border: 3px solid #8f6b42;
  border-radius: 100px;
  background-color: #f7f6eb;
  margin: auto;
  margin-top: 80px;
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
  left: 430px;
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
  height: ${(props) => props.height || "80px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  font-size: ${(props) => props.fontSize || "30px"};
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
      height: height || "60px",
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

export const MyPageSector = styled.div`
  background-color: #f7f6eb;
  border: 3px solid #8f6b42;
  width: 700px;
  padding:10px;
  border-radius: 40px;
  margin: 0 auto;
  margin-bottom:20px;
`; 

export const FlexBox = styled.div`
  display:flex;
`; 

export const MyPageTitle = styled.div`
  font-size:40px;
  font-weight:bold;
  margin-left:150px;
  margin-bottom:10px;
`; 

export const MyPageSubtitle = styled.div`
  font-size:30px;
  font-weight:bold;
`; 

export const MyPageNomalText = styled.div`
  font-size:25px;
`; 

export const MyPageModifyButton = styled.div`
  font-size:25px;
  background-color: rgba(255, 0, 0, 0);
`; 

// BenefitsBoard Page About //
export const BenefitsBoardTitle = styled.div`
  font-size:40px;
  font-weight:bold;
  margin-bottom:10px;
`; 

export const BenefitsBoardSubtitle = styled.div`
  font-size:25px;
  font-weight:bold;
  color:#6A6969;
  margin-bottom:5px;
`; 

export const BenefitsBoardCategory = styled.div`
  font-size:35px;
  font-weight:bold;
  margin-bottom:5px;
`; 

export const BenefitsBoardNomalText = styled.div`
  font-size:25px;
  margin-bottom:50px;  
`; 


export const Content = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const BoardContainer = styled.div`
  margin-right: 100px;
  /* background-color: #ccc; */
  height: 100%;
  width: 1000px;
`;

export const BoardItem = styled.div`
  margin: 70px 50px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ccc;
  font-family: Dongle-Regular, sans-serif;
`;

export const TableHeader = styled.th`
  background-color: #f0f0f0; /* 테이블 헤더 배경색 */
  padding: 10px;
  text-align: left;
  font-size: 22px;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  text-align: center;
`;

export const NavContainer = styled.div`
  width: 250px;
  height: 260px;
  background-color: #f0f0f0;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  flex-grow: 0;
  /* overflow-y: auto; */
  position: sticky;
  top: 100px;
  /* right: 300px; */
`;

export const NavItem = styled.div`
  width: 100%;
  font-size: 24px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  font-family: Dongle-Regular, sans-serif;
  
  &:hover {
    font-weight: bold;
  }
`;

export const Title = styled.div`
  font-family: Dongle-Bold, sans-serif;
  font-size: 30px;
  color: #AE5E00;
  margin: 15px 0;
`;

export const UpT = styled.div`
  width: 50px;
  height: 28px;
  margin-left: 10px;
  background-color: #FF3E3E;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Dongle-Bold, sans-serif;
  font-size: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff
`;
