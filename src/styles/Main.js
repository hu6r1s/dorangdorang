import Jandi from "assets/images/jandi.png";
import styled from "styled-components";

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