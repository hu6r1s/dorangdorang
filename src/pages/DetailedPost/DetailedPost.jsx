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

const DetailedPost = () => {
  const [inputValue, setInputValue] = useState("");
  const [boardData, setBoardData] = useState({});
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
    } else {
      console.log("err")
    }
    setInputValue("");
  }

  useEffect(() => {
    const fetchData = async () => {
      const boardResponse = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/event/findEventByEventId`,
        {
          params: {
            id,
          },
        }
      );
      setBoardData(boardResponse.data);
      console.log(boardResponse)


    };

    fetchData();
  }, []);

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

  return (
    <>
      {/* ㅠㅔ이지 헤더 */}
      <Header />
      {/* 게시자 정보 */}
      <DetailedPostContainer>
        <FlexBox>
          <PublisherProfile src={testProfile}></PublisherProfile>
          <DetailedPostPublisher
            nickname="비전동돼김토토로"
            time="24분 전"
            category="새참 먹자"
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

export default DetailedPost;
