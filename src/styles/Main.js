import { Button } from "@mui/material";
import styled from "styled-components";

export const LogoImage = styled.img`
  height: 80px;
  width: 160px;
`;

export const LoginButton = styled.div`
  color: #000;
  cursor: pointer;
  font-size: 40px;
  font-family: Dongle-Bold, sans-serif;
  margin-left: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 100px;
  background-color: #eeecd8;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 30px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  font-size: 40px;
  font-family: Dongle-Bold, sans-serif;
  padding-right: 30px;
`;

export const ContentContainer = styled.div`
  min-height: 100vh;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

// SignIn Page About //
// 폼 컨테이너
export const FormContainer = styled.div`
  width: 450px;
  height: 350px;
  border: 3px solid #8f6b42;
  border-radius: 30px;
  background-color: #f7f6eb;
  margin: auto;
  margin-top: 120px;
  position: relative;
  display: flex;
  flex-direction: column; /* 아이템들을 세로로 나열합니다. */
  align-items: center; /* 아이템들을 가로로 가운데 정렬합니다. */
`;

// 폼 상단 이미지
export const RoundedLogo1 = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: absolute;
  top: -60px;
  left: 180px;
`;

// 라벨 컴포넌트
export const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: #555555;
`;

// 인풋 컴포넌트
export const StyledInput = styled.input`
  width: ${(props) => props.width || "250px"};
  height: ${(props) => props.height || "40px"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  margin-top: 5px;
`;

// 버튼 컴포넌트
export const StyledButton = styled(Button)(
  ({
    theme,
    marginBottom,
    backgroundColor,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight,
    border,
  }) => ({
    "&.MuiButtonBase-root": {
      marginBottom: marginBottom || "10px",
      backgroundColor: backgroundColor || "#D39246",
      width: width || "250px",
      height: height || "35px",
      borderRadius: borderRadius || "20px",
      color: "white", // 여기서는 white를 문자열로 작성
      fontSize: fontSize || "20px",
      fontWeight: fontWeight || "bold",
      border: border || "3px solid #8bcd4a",
      "&:hover": {
        opacity: 0.9 /* 호버 상태일 때 배경색 변경 */,
        backgroundColor: backgroundColor || "#D39246",
      },
    },
  })
);

// MyPage Page About //
export const StyledAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: green;
`;

export const SmallContainer = styled.div`
  background-color: #f7f6eb;
  border: 3px solid #8f6b42;
  width: 800px;
  height: 1000px;
  border-radius: 40px;
  margin: 0 auto;
`;

export const MyPageSector = styled.div`
  background-color: #f7f6eb;
  border: 3px solid #8f6b42;
  width: 550px;
  padding: 10px;
  border-radius: 40px;
  margin: 0 auto;
  margin-bottom:20px;
`;

export const FlexBox = styled.div`
  display:flex;
`;

export const MyPageTitle = styled.div`
  font-size:30px;
  font-weight:bold;
  margin-left:50px;
  margin-bottom:10px;
`;

export const MyPageSubtitle = styled.div`
  font-size:25px;
  font-weight:bold;
  margin-bottom:5px;
`;

export const MyPageNomalText = styled.div`
  font-size:20px;
`;

export const MyPageModifyButton = styled.div`
  font-size: 15px;
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
  /* font-family: Dongle-Regular, sans-serif; */
`;

export const TableHeader = styled.th`
  background-color: #f0f0f0; /* 테이블 헤더 배경색 */
  padding: 10px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-bottom: 1px solid #ccc;
  font-size: 13px;
  text-align: center;
`;

export const NavContainer = styled.div`
  width: 250px;
  height: 320px;
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
  color: #ae5e00;
  margin: 15px 0;
`;

export const UpT = styled.div`
  width: 50px;
  height: 28px;
  margin-left: 10px;
  background-color: #ff3e3e;
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
  background-color: #fff;
`;

// DetailedPost //
export const DetailedPostContainer = styled(SmallContainer)`
  width: 600px;
  height: 800px;
  padding: 20px;
  margin-top:50px;
`;
export function DetailedPostPublisher({ nickname, time, category }) {
  return (
    <>
      <div style={{ marginRight: '180px' }}>
        <PublisherNickName>{nickname}</PublisherNickName>
        <FlexBox>
          <PublisherTimeNCategory>{time}</PublisherTimeNCategory>
          <PublisherTimeNCategory>{category}</PublisherTimeNCategory>
        </FlexBox>
      </div>
    </>
  );
}

export function DetailedAnothers({ src, nickname, time, comment }) {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <FlexBox>
          <PublisherProfile src={src}></PublisherProfile>
          <div>
            <PublisherNickName>{nickname}</PublisherNickName>
            <PublisherTimeNCategory>{time}</PublisherTimeNCategory>
          </div>
        </FlexBox>
        <AnothersComment>{comment}</AnothersComment>
      </div>
    </>
  );
}

export const PublisherProfile = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 100%;
`;

export const PublisherNickName = styled.div`
  font-size: 20px;
`;

export const PublisherTimeNCategory = styled.div`
  font-size: 15px;
  color: #5f5f5f;
`;

export const AnothersProfile = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export const AnothersNickName = styled.div`
  font-size: 12px;
`;

export const AnothersTime = styled.div`
  font-size: 10px;
  color: #5f5f5f;
`;

export const AnothersComment = styled.div`
  font-size: 20px;
  margin-left: 50px;
  padding: 10px;
`;

export const DetailedPostTitle = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const DetailedPostContents = styled.div`
  font-size: 20px;
`;

export const DetailedPostInput = styled.input`
  width: 400px;
  height: 50px;
  border-radius:10px;
  margin-right: 10px;
  font-size:20px;
`;

export const DetailedPostSendButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #7bb144;
  color: white;
  font-size: 25px;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  &:hover{
    cursor:pointer;
    opacity:0.9;
  }
`;

export const DetailedPostAttendButton = styled(DetailedPostSendButton)``;

export const DetailedPostHorizon = styled.hr`
  margin: 10px 0px;
  border: 1px solid #7BB144;
`;

export const DetailedPostCommentContainer = styled.div`
  margin: 30px 0px;
  height: 420px;
  overflow: auto;
`;

// Writing //
export const WritingContainer = styled(DetailedPostContainer)`
  height: 600px;
  margin-top:50px;
`;

export const WritingTitleInput = styled.input`
  width:400px;
  height:50px;
  font-size:20px;
  font-weight:bold;
  border: 1px solid gray;
  border-radius:5px;
`;

export const WritingTextArea = styled.textarea`
width:550px;
height:400px;
font-size:20px;
margin: 5px 0px 20px 0px;
`;

export const WritingCategory = styled.input`
`;

export const WritingSubmitBtton = styled(DetailedPostAttendButton)`
  width:150px;
  height: 50px;
  margin-left:200px;
`;

export const ModifyMyInfoContainer = styled(SmallContainer)`
  width:450px;
  height:350px;
  padding:20px;
  margin-top:120px;
`;

export const ModifySelfIntroContainer = styled(ModifyMyInfoContainer)`
  width:450px;
  height:350px;
  padding:20px;
`;

export const ModifySelfIntroLabel = styled(StyledLabel)`
font-size:15px;
`;

export const ModifySelfIntroInput = styled(StyledInput)`
width:100%;
height: 20px;
font-size:15px;
`;