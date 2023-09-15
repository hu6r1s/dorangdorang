import Logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, LoginButton, LogoImage } from "styles/Main";

const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <LogoImage
        src={Logo}
        alt="로고 이미지"
        onClick={() => navigate("/")}
      />
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
