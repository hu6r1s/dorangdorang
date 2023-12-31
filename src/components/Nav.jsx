import { useNavigate } from "react-router-dom";
import {
  NavContainer,
  NavItem,
} from "styles/Main";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavItem onClick={() => navigate("/#saecham")}>새참 먹자 & 품앗이</NavItem>
      <NavItem onClick={() => navigate("/#gomin")}>도란 도란</NavItem>
      <NavItem onClick={() => navigate("/#jiwon")}>지원 제도</NavItem>
      <NavItem onClick={() => navigate("/map")}>농장 지도</NavItem>
      <NavItem onClick={() => navigate("/Writing")}>글 쓰기</NavItem>
    </NavContainer>
  );
};

export default Nav;