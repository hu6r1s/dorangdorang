import Board from "components/Board";
import Header from "components/Header";
import Nav from "components/Nav";

import {
  BoardContainer,
  Content,
  ContentContainer
} from "styles/Main";




const Main = () => {


  return (
    <>
      <Header />
      <ContentContainer>
        <Content>
          <BoardContainer>
            <Board type="saecham" />
            <Board type="gomin" />
            <Board type="jiwon" />
          </BoardContainer>
          <Nav />
        </Content>
      </ContentContainer>
    </>
  );
};

export default Main;
