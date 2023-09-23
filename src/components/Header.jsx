import Logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "states/GlobalState";
import {
  FlexBox,
  HeaderContainer,
  HeaderFlexBox,
  LoginButton,
  LogoImage,
  MenuContainer,
  MenuItem,
  MyPageButton,
} from "styles/Main";

const Header = ({ page }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useRecoilState(userState);
  return (
    <HeaderContainer>
      <LogoImage
        src={Logo}
        alt="로고 이미지"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <MenuContainer>
        {page === "map" && (
          <>
            <MenuItem onClick={() => navigate("/#saecham")}>
              새참 먹자 & 품앗이
            </MenuItem>
            <MenuItem onClick={() => navigate("/#gomin")}>고민 토론</MenuItem>
            <MenuItem onClick={() => navigate("/#jiwon")}>지원 제도</MenuItem>
          </>
        )}
      </MenuContainer>
      {userId === undefined ? (
        <>
            <LoginButton
              onClick={() => {
                console.log(userId);
                navigate("/SignIn");
              }}
            >
              로그인
            </LoginButton>
        </>
      ) : (
        <>
          <HeaderFlexBox>
            <MyPageButton
              onClick={() => {
                navigate("/MyPage");
              }}
            >
              마이페이지
            </MyPageButton>
            <LoginButton
              onClick={() => {
                setUserId(undefined);
                navigate("/");
              }}
            >
              로그아웃
            </LoginButton>
          </HeaderFlexBox>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
