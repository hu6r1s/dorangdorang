import Header from "components/Header";
import React, { useState } from "react";
import {
    DetailedAnothers,
    DetailedPostSendButton,
  DetailedPostContainer,
  DetailedPostContents,
  DetailedPostPublisher,
  DetailedPostTitle,
  FlexBox,
  PublisherNickName,
  PublisherProfile,
  PublisherTimeNCategory,
  SmallContainer,
  DetailedPostHorizon,
  DetailedPostCommentContainer,
  DetailedPostInput,
} from "styles/Main";
import testProfile from "../../assets/images/logo2.png";

const DetailedPost = () => {
    const [inputValue,setInputValue] = useState("")
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }
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
          <DetailedPostSendButton>참가확정</DetailedPostSendButton>
        {/* 게시글 제목, 본문 */}
        </FlexBox>
        <DetailedPostHorizon/>
        <DetailedPostTitle>새참 먹을 사람 구함@@@</DetailedPostTitle>
        <DetailedPostContents>
          시간:30분 후<br />
          장소:벚꽃정자 앞<br />
          메뉴:제육덮밥
        </DetailedPostContents>
        <DetailedPostHorizon/>
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
        <DetailedPostInput onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />
        <DetailedPostSendButton type="submit">전송</DetailedPostSendButton>
        </FlexBox>
        </form>
      </DetailedPostContainer>
    </>
  );
};

export default DetailedPost;
