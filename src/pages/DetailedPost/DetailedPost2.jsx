import axios from "axios";
import Header from "components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "states/GlobalState";
import {
  DetailedAnothers,
  DetailedPostCommentContainer,
  DetailedPostContainer,
  DetailedPostContents,
  DetailedPostHorizon,
  DetailedPostInput,
  DetailedPostPublisher,
  DetailedPostSendButton,
  DetailedPostTitle,
  FlexBox,
  PublisherProfile
} from "styles/Main";
import testProfile from "../../assets/images/logo2.png";

const DetailedPost2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [boardData, setBoardData] = useState({});
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useRecoilState(userState);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const boardResponse = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/dorandoran/findDoranDoranByDoranDoranId`,
        {
          params: {
            id: parseInt(id),
          },
        }
      );
      setBoardData(boardResponse.data);
      console.log(boardData)

      try {
        if (boardData.userId) {
          const userResponse = await axios.get(
            `${process.env.REACT_APP_SERVER_API}/user/findUserById`,
            {
              params: {
                id: boardData.userId,
              }
            }
          );
          setUserData(userResponse.data);
          console.log(userResponse.data.userId);
        } else {
          console.log("User ID not found in boardData:", boardData.userId);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    // const intervalId = setInterval(fetchData, 3000); // 60초마다 데이터 요청

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [id, boardData.userId]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userId) {
      const commentCreateResponse = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/comment/create`,
        null,
        {
          params: {
            text: inputValue,
            status: 1,
            userId,
          }
        }
      );
      console.log("asd", userId)
      console.log(commentCreateResponse);
    } else {
      console.log("error")
    }
    setInputValue("");
  }

  const getRelativeTime = (eventTime) => {
    const parsedEventTime = new Date(eventTime);
    const currentDate = new Date();
    const timeDifference = currentDate - parsedEventTime;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

    if (!isNaN(minutesDifference) && isFinite(minutesDifference)) {
      if (minutesDifference < 60) {
        return rtf.format(-minutesDifference, "minute");
      } else {
        const hoursDifference = Math.floor(minutesDifference / 60);
        return rtf.format(-hoursDifference, "hour");
      }
    } else {
      return "Invalid time difference"; // 유효하지 않은 값 처리
    }
  };

  return (
    <>
      {/* 페이지 헤더 */}
      <Header />
      {/* 게시자 정보 */}
      <DetailedPostContainer>
        <FlexBox>
          <PublisherProfile src={testProfile}></PublisherProfile>
          <DetailedPostPublisher
            nickname={userData.nickname}
            time={getRelativeTime(boardData.created)}
            category="도란 도란"
          />
          {/* 게시글 제목, 본문 */}
        </FlexBox>
        <DetailedPostHorizon />
        <DetailedPostTitle>{boardData.title}</DetailedPostTitle>
        <DetailedPostContents>
          {boardData.description}
        </DetailedPostContents>
        <DetailedPostHorizon />
        {/* 댓글 */}
        <DetailedPostCommentContainer>
          <DetailedAnothers src={testProfile} nickname='댓글러1' time='10분 전' comment='테스트 댓글123'></DetailedAnothers>
          <DetailedAnothers src={testProfile} nickname='댓글러1' time='10분 전' comment='테스트 댓글123'></DetailedAnothers>
          <DetailedAnothers src={testProfile} nickname='댓글러1' time='10분 전' comment='테스트 댓글123'></DetailedAnothers>
          <DetailedAnothers src={testProfile} nickname='댓글러1' time='10분 전' comment='테스트 댓글123'></DetailedAnothers>
          <DetailedAnothers src={testProfile} nickname='댓글러1' time='10분 전' comment='테스트 댓글123'></DetailedAnothers>
          <DetailedAnothers src={testProfile} nickname='댓글러1' time='10분 전' comment='테스트 댓글123'></DetailedAnothers>
        </DetailedPostCommentContainer>
        {/* 인풋 */}
        <form onSubmit={onSubmit}>
          <FlexBox>
            <DetailedPostInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            <DetailedPostSendButton type="submit">전송</DetailedPostSendButton>
          </FlexBox>
        </form>
      </DetailedPostContainer>
    </>
  );
};

export default DetailedPost2;
