import {
  NavContainer,
  NavItem,
} from "styles/Main";

const Nav = () => {
  return (
    <NavContainer>
      <NavItem><a href="#saecham">새참 먹자 & 품앗이</a></NavItem>
      <NavItem><a href="#gomin">고민 토론</a></NavItem>
      <NavItem><a href="#jiwon">지원제도</a></NavItem>
      <NavItem>글 쓰기</NavItem>
    </NavContainer>
  );
};

export default Nav;