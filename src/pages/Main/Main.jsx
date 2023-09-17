import Header from "components/Header";
import { useState } from "react";

import {
  BoardContainer,
  BoardItem,
  Content,
  ContentContainer,
  NavContainer,
  NavItem,
  PaginationButton,
  PaginationContainer,
  StyledTable,
  TableCell,
  TableHeader,
  Title,
  UpT
} from "styles/Main";


const saechams = [
  {
    title: "새참 팟 구함@@@@@@@",
    count: 1,
    name: "새참 먹자",
    time: "36분"
  },
  {
    title: "내일 고구마 밭갈기 품앗이 해줄  ㅅ",
    count: 2,
    name: "품앗이",
    time: "1시간"
  },
];

const gomins = [
  {
    id: 1,
    title: "토마토가 다 뒤졌어요~ ㅜㅜ",
    name: "user1",
    time: "1시간",
  },
  {
    id: 2,
    title: "소가 일을 안해요",
    name: "user1",
    time: "1시간",
  },
  {
    id: 3,
    title: "벌레 조졌어요,,",
    name: "user2",
    time: "2시간",
  },
  {
    id: 4,
    title: "농약 쳐도 될까요?",
    name: "user4",
    time: "2시간",
  },
  {
    id: 5,
    title: "~ 품종 몇월 집중 ~",
    name: "user3",
    time: "2시간",
  },
  {
    id: 6,
    title: "나라에서 ~ 하는거 ~ 지원 ~~",
    name: "user1",
    time: "3시간",
  },
  {
    id: 7,
    title: "토마토가 다 뒤졌어요~ ㅜㅜ",
    name: "user2",
    time: "4시간",
  },
  {
    id: 8,
    title: "토마토가 다 뒤졌어요~ ㅜㅜ",
    name: "user4",
    time: "4시간",
  },
  {
    id: 9,
    title: "나라에서 ~ 하는거 ~ 지원 ~~",
    name: "user6",
    time: "하루",
  },
  {
    id: 10,
    title: "나라에서 ~ 하는거 ~ 지원 ~~",
    name: "user1",
    time: "하루",
  },
  // {
  //   id: 11,
  //   title: "토마토가 다 뒤졌어요~ ㅜㅜ",
  //   name: "user1",
  //   time: "이틀",
  // },
];

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = gomins.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(gomins.length / 10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <ContentContainer>
        <Content>
          <BoardContainer>
            <BoardItem>
              <Title><a id="saecham">새참 먹자 & 품앗이</a></Title>
              <StyledTable>
                <tbody>
                  {saechams.map((saecham) => (
                    <tr key={saecham.title}>
                      <TableCell><UpT>Up</UpT></TableCell>
                      <TableCell>{saecham.title}</TableCell>
                      <TableCell>({saecham.count}/4)</TableCell>
                      <TableCell>{saecham.name}</TableCell>
                      <TableCell>{saecham.time} 전</TableCell>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </BoardItem>
            <BoardItem>
              <Title><a id="gomin">고민 토론</a></Title>
              <StyledTable>
                <thead>
                  <tr>
                    <TableHeader>번호</TableHeader>
                    <TableHeader>제목</TableHeader>
                    <TableHeader>작성자</TableHeader>
                    <TableHeader>날짜</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {gomins.map((gomin) => (
                    <tr key={gomin.id}>
                      <TableCell>{gomin.id}</TableCell>
                      <TableCell>{gomin.title}</TableCell>
                      <TableCell>{gomin.name}</TableCell>
                      <TableCell>{gomin.time} 전</TableCell>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
              <PaginationContainer>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationButton
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationButton>
                ))}
              </PaginationContainer>
            </BoardItem>
            <BoardItem>
              <Title><a id="jiwon">지원 제도</a></Title>
              <StyledTable>
                <thead>
                  <tr>
                    <TableHeader>번호</TableHeader>
                    <TableHeader>제목</TableHeader>
                    <TableHeader>작성자</TableHeader>
                    <TableHeader>날짜</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {gomins.map((gomin) => (
                    <tr key={gomin.id}>
                      <TableCell>{gomin.id}</TableCell>
                      <TableCell>{gomin.title}</TableCell>
                      <TableCell>{gomin.name}</TableCell>
                      <TableCell>{gomin.time} 전</TableCell>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
              <PaginationContainer>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationButton
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationButton>
                ))}
              </PaginationContainer>
            </BoardItem>
          </BoardContainer>
          <NavContainer>
            <NavItem><a href="#saecham">새참 먹자 & 품앗이</a></NavItem>
            <NavItem><a href="#gomin">고민 토론</a></NavItem>
            <NavItem><a href="#jiwon">지원제도</a></NavItem>
            <NavItem>글 쓰기</NavItem>
          </NavContainer>
        </Content>
      </ContentContainer>
    </>
  );
};

export default Main;
