import React from "react";
import { HeaderContainer, LogoImage, LoginButton } from "styles/Main";
import Logo from "assets/images/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="로고 이미지" />
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
