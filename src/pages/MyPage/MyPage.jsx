import React from "react";
import AvatarTest from "../../assets/images/누끼로고1.png";
import {
  SmallContainer,
  MyPageSector,
  StyledAvatar,
  FlexBox,
  MyPageNomalText,
  MyPageTitle,
  MyPageModifyButton,
  MyPageSubtitle,
} from "../../styles/Main";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Carousel from '../../components/Carousel'
import styled from "styled-components";


const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px" }}>
      <SmallContainer style={{height:'1500px'}}>
        {/* 내 정보 섹터 */}
        <FlexBox style={{ alignItems: "center" }}>
          <MyPageTitle style={{ marginRight: "20px" }}>내 정보</MyPageTitle>
          <MyPageModifyButton onClick={() => navigate("/ModifyMyInfo")}>
            수정
          </MyPageModifyButton>
        </FlexBox>
        <MyPageSector>
          <FlexBox>
            <StyledAvatar src={AvatarTest} style={{ marginRight: "20px" }} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <FlexBox>
                  <MyPageNomalText style={{ marginRight: "20px" }}>
                    비전동돼김토토로
                  </MyPageNomalText>
                  <MyPageNomalText>24세</MyPageNomalText>
                </FlexBox>
                <div style={{ fontSize: "20px" }}>
                  올 해 3월에 귀농한 고구마 재배 청년 농부 입니다 잘
                  부탁드립니다 :)
                </div>
              </div>
            </div>
          </FlexBox>
        </MyPageSector>
        {/* 자기 소개 섹터*/}
        <FlexBox style={{ alignItems: "center" }}>
          <MyPageTitle style={{ marginRight: "20px" }}>자기 소개</MyPageTitle>
          <MyPageModifyButton
            onClick={() => navigate("/ModifySelfIntroduction")}
          >
            수정
          </MyPageModifyButton>
        </FlexBox>
        <MyPageSector>
          <Grid
            container
            rowSpacing={3}
            justifyContent="center"
            style={{ padding: "10px" }}
          >
            <Grid item xs={6} style={{margin:'20px auto'}}>
              <div>
                <MyPageSubtitle>재배종목</MyPageSubtitle>
                <MyPageNomalText>고구마</MyPageNomalText>
              </div>
            </Grid>
            <Grid item xs={6} style={{margin:'20px auto'}}>
              <div>
                <MyPageSubtitle>재배종목</MyPageSubtitle>
                <MyPageNomalText>고구마</MyPageNomalText>
              </div>
            </Grid>
            <Grid item xs={12} style={{marginBottom:'20px', borderTop: '3px solid #7BB144'}}>
              <div>
                <MyPageSubtitle>이런 사람들과 친해지고 싶어요</MyPageSubtitle>
                <MyPageNomalText>
                  막걸리 좋아하고 축구 좋아하시는 남성분들과 친해지고 싶어요
                </MyPageNomalText>
              </div>
            </Grid>
            <Grid item xs={12} style={{marginBottom:'20px', borderTop: '3px solid #7BB144'}}>
              <div>
                <MyPageSubtitle>귀농한 이유</MyPageSubtitle>
                <MyPageNomalText>
                  대기업 다니다가 수직적인 문화와 복잡한 도시생활에 질려
                  귀농했어요
                </MyPageNomalText>
              </div>
            </Grid>
          </Grid>
        </MyPageSector>
        {/* 농장 사진 */}
        <MyPageTitle style={{textAlign:'center', margin:'0px'}}>농장 사진</MyPageTitle>
        <hr style={{border:'2px solid #7BB144', width:'700px'}}/>
        <Carousel></Carousel>
      </SmallContainer>
  );
};

export default MyPage;
