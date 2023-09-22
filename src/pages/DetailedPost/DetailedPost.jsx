import axios from "axios";
import Header from "components/Header";
import { Fragment, useEffect, useState } from "react";
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
import axios from "axios";

const DetailedPost = () => {
  const [inputValue, setInputValue] = useState("");
  const [boardData, setBoardData] = useState({});
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useRecoilState(userState);
  const { id } = useParams();

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
      console.log(commentCreateResponse);
      const commentMessage = commentCreateResponse.data; // 예시: "31번 이벤트 등록 완료"
      const commentId = commentMessage.split("번")[0].trim();
      console.log(2, commentId)

      try {
        const eventData = await axios.post(
          `${process.env.REACT_APP_SERVER_API}/eventCommentMap/create`,
          null,
          {
            params: {
              eventId: boardData.id, // commentId를 eventId로 사용
              commentId: parseInt(commentId),
            }
          }
        );
        console.log(eventData);
      } catch (error) {
        console.error("Error registering for event:", error);
      }
    } else {
      console.log("err")
    }
    setInputValue("");
  }

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/eventCommentMap/findCommentsByEventId`,
        {
          params: {
            eventId: boardData.id, // 현재 이벤트의 ID를 파라미터로 전달
          },
        }
      );
      console.log(1, response)

      // 각 댓글의 작성자 정보를 가져오기 위한 Promise 배열
      const fetchUserPromises = response.data.map(async (comment) => {
        try {
          const userResponse = await axios.get(
            `${process.env.REACT_APP_SERVER_API}/user/findUserById`,
            {
              params: {
                id: comment.comment.userId,
              },
            }
          );
          comment.comment.user = userResponse.data; // 댓글 작성자 정보 추가
          return comment;
        } catch (error) {
          console.error("Error fetching user data for comment:", error);
          return comment; // 실패할 경우 원래 comment 유지
        }
      });

      // 모든 댓글의 작성자 정보를 가져온 후 반환
      const commentsWithUser = await Promise.all(fetchUserPromises);
      return commentsWithUser;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return []; // 오류 발생 시 빈 배열 반환 또는 오류 처리
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const boardResponse = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/event/findEventByEventId`,
        {
          params: {
            id: parseInt(id),
          },
        }
      );
      setBoardData(boardResponse.data);
      console.log(boardResponse)

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
          console.log("user", userResponse);
        } else {
          console.log("User ID not found in boardData:", boardData.userId);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }

      const commentData = await fetchComments();
      console.log("Comments:", commentData);
      setComments(commentData);
    };


    fetchData();

    const intervalId = setInterval(() => {
      fetchData(); // 주기적으로 데이터 업데이트
    }, 3000); // 5초마다 업데이트 (1000ms = 1초)

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => {
      clearInterval(intervalId);
    };
  }, [id, boardData.userId]);

  const eventAttend = async () => {
    try {
      const eventData = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/eventUserMap/create`,
        null,
        {
          params: {
            eventId: boardData.id,
            userId,
          }
        }
      );
      console.log(eventData);
    } catch (error) {
      console.log(error);
    }
  };

  function renderNewlines(text) {
    if (typeof text === 'string') {
      const newText = text.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ));
      return newText;
    }
  };

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
      {/* ㅠㅔ이지 헤더 */}
      <Header />
      {/* 게시자 정보 */}
      <DetailedPostContainer>
        <FlexBox>
          <PublisherProfile src={testProfile}></PublisherProfile>
          <DetailedPostPublisher
            nickname={userData.nickname}
            time={getRelativeTime(boardData.created)}
            category={boardData.category === "saecham" ? "새참 먹자" : "품앗이"}
          />
          <DetailedPostSendButton
            onClick={eventAttend}
          >참가확정</DetailedPostSendButton>
          {/* 게시글 제목, 본문 */}
        </FlexBox>
        <DetailedPostHorizon />
        <DetailedPostTitle>{boardData.title}</DetailedPostTitle>
        <DetailedPostContents>
          {renderNewlines(boardData.description)}
        </DetailedPostContents>
        <DetailedPostHorizon />
        {/* 댓글 */}
        <DetailedPostCommentContainer>
          {comments.map((comment) => (
            <DetailedAnothers
              key={comment.comment.id}
              src={testProfile}
              nickname={comment.comment.user.nickname}  // 닉네임 또는 댓글 데이터에서 가져온 사용자 정보 사용
              time={getRelativeTime(comment.comment.created)} // 댓글 생성 시간
              comment={comment.comment.text} // 댓글 내용
            />
          ))}
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

export default DetailedPost;
