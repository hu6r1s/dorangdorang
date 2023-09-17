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
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: #EEECD8;
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