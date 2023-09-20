import React from "react";
import AvatarTest from "../../assets/images/logo.png";
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
import Carousel from "components/Carousel";
import Header from "components/Header";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <div style={{ padding: "50px" }}>
        <SmallContainer
          style={{ height: "1000px", width: "600px", padding: "10px" }}
        >
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
                    <MyPageNomalText
                      style={{ fontWeight: "bold", marginRight: "20px" }}
                    >
                      비전동돼김토토로
                    </MyPageNomalText>
                    <MyPageNomalText>24세</MyPageNomalText>
                  </FlexBox>
                  <MyPageNomalText>
                    올 해 3월에 귀농한 고구마 재배 청년 농부 입니다 잘
                    부탁드립니다 :)
                  </MyPageNomalText>
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
          <MyPageSector style={{ padding: "0px" }}>
            <Grid
              container
              rowSpacing={3}
              justifyContent="center"
              style={{ width: "550px", height: "300px", padding: "10px" }}
            >
              <Grid item xs={6} style={{ margin: "10px auto" }}>
                <div>
                  <MyPageSubtitle>재배종목</MyPageSubtitle>
                  <MyPageNomalText>고구마</MyPageNomalText>
                </div>
              </Grid>
              <Grid item xs={6} style={{ margin: "10px auto" }}>
                <div>
                  <MyPageSubtitle>취미</MyPageSubtitle>
                  <MyPageNomalText>축구</MyPageNomalText>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginBottom: "20px", borderTop: "2px solid #7BB144" }}
              >
                <div>
                  <MyPageSubtitle>이런 사람들과 친해지고 싶어요</MyPageSubtitle>
                  <MyPageNomalText>
                    막걸리 좋아하고 축구 좋아하시는 남성분들과 친해지고 싶어요
                  </MyPageNomalText>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginBottom: "10px", borderTop: "2px solid #7BB144" }}
              >
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
          <MyPageTitle style={{ textAlign: "center", margin: "0px" }}>
            농장 사진
          </MyPageTitle>
          <hr style={{ border: "2px solid #7BB144", width: "550px" }} />
          <div style={{ padding: "50px" }}>
            <Carousel></Carousel>
          </div>
        </SmallContainer>
      </div>
    </>
  );
};

export default MyPage;
