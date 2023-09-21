import axios from "axios";
import { useEffect, useState } from "react";
import {
  BoardItem,
  StyledTable,
  TableCell,
  TableHeader,
  Title,
  UpT
} from "styles/Main";

const Board = ({ type }) => {
  const [events, setEvents] = useState([]);
  const [dorandoran, setDorandoran] = useState([]);
  const [benefits, setBenefits] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastItem = currentPage * 10;
  // const indexOfFirstItem = indexOfLastItem - 10;
  // const currentItems = gomins.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math.ceil(gomins.length / 10);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/event/findAllEvents`
        );
        setEvents(response.data);
        console.log(events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/dorandoran/findAllDoranDorans`
        );
        setDorandoran(response.data);
        console.log(dorandoran);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/benefit/findAllBenefits`
        );
        setBenefits(response.data);
        console.log(benefits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const getRelativeTime = (eventTime) => {
    const parsedEventTime = new Date(eventTime);
    const currentDate = new Date();
    const timeDifference = currentDate - parsedEventTime;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

    if (minutesDifference < 60) {
      return rtf.format(-minutesDifference, "minute");

    } else {
      const hoursDifference = Math.floor(minutesDifference / 60);
      return rtf.format(-hoursDifference, "hour");
    }
  };

  return (
    <>
      {type === "saecham" && (
        <BoardItem>
          <Title id="saecham">새참 먹자 & 품앗이</Title>
          <StyledTable>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <TableCell><UpT>Up</UpT></TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>({event.status}/4)</TableCell>
                  <TableCell>{event.category === "saecham" ? "새참 먹자" : "품앗이"}</TableCell>
                  <TableCell>{getRelativeTime(event.created)}</TableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </BoardItem>
      )}

      {type === "gomin" && (
        <BoardItem>
          <Title id="gomin">고민 토론</Title>
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
              {dorandoran.map((doran) => (
                <tr key={doran.id}>
                  <TableCell>{doran.id + 1}</TableCell>
                  <TableCell>{doran.title}</TableCell>
                  <TableCell>{doran.name}</TableCell>
                  <TableCell>{getRelativeTime(doran.created)}</TableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          {/* <PaginationContainer>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationButton
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
          </PaginationContainer> */}
        </BoardItem>
      )}

      {type === "jiwon" && (
        <BoardItem>
          <Title id="jiwon">지원 제도</Title>
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
              {benefits.map((benefit) => (
                <tr key={benefit.id}>
                  <TableCell>{benefit.id + 1}</TableCell>
                  <TableCell>{benefit.title}</TableCell>
                  <TableCell>{benefit.name}</TableCell>
                  <TableCell>{getRelativeTime(benefit.created)} 전</TableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          {/* <PaginationContainer>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationButton
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
          </PaginationContainer> */}
        </BoardItem>
      )}
    </>
  );
};

export default Board;