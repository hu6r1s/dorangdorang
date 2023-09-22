import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoardItem,
  PaginationButton,
  PaginationContainer,
  StyledTable,
  StyledTableCell,
  TableCell,
  TableHeader,
  Title,
  UpT,
} from "styles/Main";

const Board = ({ type }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [dorandoran, setDorandoran] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [nickname, setNickname] = useState([]);
  const [eventUserMapData, setEventUserMapData] = useState([]);
  const [dorandoranCurrentPage, setDorandoranCurrentPage] = useState(1);
  const [benefitsCurrentPage, setBenefitsCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 아이템 수

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/event/findAllEvents`
        );
        const sortedEvents = eventsResponse.data.sort((a, b) =>
          new Date(b.created) - new Date(a.created)
        );
        setEvents(sortedEvents);

        const dorandoranResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/dorandoran/findAllDoranDorans`
        );
        const sortedDoranDoran = dorandoranResponse.data.sort((a, b) =>
          new Date(b.created) - new Date(a.created)
        );
        setDorandoran(sortedDoranDoran);

        const benefitsResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/benefit/findAllBenefits`
        );
        const sortedBenefit = benefitsResponse.data.sort((a, b) =>
          new Date(b.created) - new Date(a.created)
        );
        setBenefits(sortedBenefit);

        const userIds = sortedDoranDoran.map((doran) => doran.userId);

        const userResponses = await Promise.all(
          userIds.map((userId) =>
            axios.get(
              `${process.env.REACT_APP_SERVER_API}/user/findUserById`,
              {
                params: {
                  id: userId,
                },
              }
            )
          )
        );

        const nicknames = userResponses.map((response) => response.data.nickname);

        setNickname(nicknames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();

    const intervalId = setInterval(fetchEvents, 30000); // 60초마다 데이터 요청

    return () => {
      clearInterval(intervalId);
    };
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

  const saechamAndPoomEvents = events.filter((event) => {
    const timeDifference = Date.now() - new Date(event.created).getTime();
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    return minutesDifference <= 30;
  });


  // 페이지 변경 함수
  const handleDorandoranPageChange = (pageNumber) => {
    setDorandoranCurrentPage(pageNumber);
  };

  const handleBenefitsPageChange = (pageNumber) => {
    setBenefitsCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 아이템 필터링
  const dorandoranStartIndex = (dorandoranCurrentPage - 1) * itemsPerPage;
  const dorandoranEndIndex = dorandoranStartIndex + itemsPerPage;
  const dorandoranItems = dorandoran.slice(dorandoranStartIndex, dorandoranEndIndex);

  const benefitsStartIndex = (benefitsCurrentPage - 1) * itemsPerPage;
  const benefitsEndIndex = benefitsStartIndex + itemsPerPage;
  const benefitsItems = benefits.slice(benefitsStartIndex, benefitsEndIndex);

  useEffect(() => {
    // 이벤트의 참가자 수를 가져오는 API를 호출하고 데이터를 업데이트합니다.
    const fetchEventUserMaps = async (eventId) => {
      try {
        const eventUserMapsResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/eventUserMap/findEventUserMapsByEventId`,
          {
            params: {
              eventId,
            },
          }
        );
        setEventUserMapData(eventUserMapsResponse.data);
        console.log(eventUserMapData.length);

      } catch (error) {
        console.error(error);
      }
    };

    events.forEach((event) => {
      fetchEventUserMaps(event.id); // event.id를 eventId로 사용
    });
  }, [events]);

  return (
    <>
      {type === "saecham" && (
        <BoardItem>
          <Title id="saecham">새참 먹자 & 품앗이</Title>
          <StyledTable>
            <tbody>
              {saechamAndPoomEvents.map((event) => (
                <tr key={event.id}>
                  <TableCell>
                    <UpT>Up</UpT>
                  </TableCell>
                  <StyledTableCell
                    onClick={() => navigate(`/event/${event.id}`)}
                  >{event.title}</StyledTableCell>
                  <TableCell>({eventUserMapData.length}/4)</TableCell>
                  <TableCell>
                    {event.category === "saecham" ? "새참 먹자" : "품앗이"}
                  </TableCell>
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
              {dorandoran && dorandoranItems.map((doran, index) => (
                <tr key={doran.id}>
                  <TableCell>{doran.id}</TableCell>
                  <StyledTableCell
                    onClick={() => navigate(`/dorandoran/${doran.id}`)}
                  >
                    {doran.title}
                  </StyledTableCell>
                  <TableCell>{nickname[index]}</TableCell>
                  <TableCell>{getRelativeTime(doran.created)}</TableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <PaginationContainer>
            {Array.from({ length: Math.ceil(dorandoran.length / itemsPerPage) }).map((_, index) => (
              <PaginationButton
                key={index}
                active={index + 1 === dorandoranCurrentPage}
                onClick={() => handleDorandoranPageChange(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
          </PaginationContainer>
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
              {benefits && benefitsItems.map((benefit) => (
                <tr key={benefit.id}>
                  <TableCell>{benefit.id + 1}</TableCell>
                  <TableCell>{benefit.title}</TableCell>
                  <TableCell>{benefit.name}</TableCell>
                  <TableCell>{getRelativeTime(benefit.created)} 전</TableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <PaginationContainer>
            {Array.from({ length: Math.ceil(benefits.length / itemsPerPage) }).map((_, index) => (
              <PaginationButton
                key={index}
                active={index + 1 === benefitsCurrentPage}
                onClick={() => handleBenefitsPageChange(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
          </PaginationContainer>
        </BoardItem>
      )}
    </>
  );
};

export default Board;
