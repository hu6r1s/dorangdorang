import Board from "components/Board";
import Header from "components/Header";
import Nav from "components/Nav";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BoardContainer,
  Content,
  ContentContainer
} from "styles/Main";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.hash) {
      case "#saecham":
      case "#gomin":
      case "#jiwon": {

        const id = location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      default: {
        break;
      }
    }
  }, [location]);

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
        </Content>
        <Nav />
      </ContentContainer>
    </>
  );
};

export default Main;
