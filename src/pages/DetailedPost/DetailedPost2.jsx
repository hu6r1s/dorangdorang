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
  const [userId, setUserId] = useRecoilState(userState);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const boardResponse = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/dorandoran/findDoranDoranByDoranDoranId`,
        {
          params: {
            id,
          },
        }
      );
      setBoardData(boardResponse.data);
      console.log(boardResponse)

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
    };

    fetchData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  }
  return (
    <>
      {/* 페이지 헤더 */}
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
