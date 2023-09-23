import Grid from "@mui/material/Grid";
import axios from "axios";
import Carousel from "components/Carousel";
import Header from "components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "states/GlobalState";
import {
  FlexBox,
  MyPageNomalText,
  MyPageSector,
  MyPageSubtitle,
  MyPageTitle,
  SmallContainer
} from "../../styles/Main";


const MyPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useRecoilState(userState);
  const [userMyInfo, setUserMyInfo] = useState({});
  const [userSelfIntro, setuserSelfIntro] = useState({});



  useEffect(() => {
    const loadMyInfo = async () => {
      try {
        const eventsResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/user/findUserById`,
          {
            params: {
              id: userId,
            },
          }
        );
        setUserMyInfo(eventsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadMyInfo();

    const loadSelfIntro = async () => {
      try {
        const eventsResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_API}/farm/findAllFarms`,
          null,
          {
            params: {
              userId: userId,
            }
          }
        );
        const findedFarm = eventsResponse.data.filter((item) => item.userId === userId);
        const findedFarmOut = findedFarm[0]; // 배열에서 객체 빼내기
        setuserSelfIntro(findedFarmOut);
      } catch (error) {
        console.error(error);
      }
    };
    loadSelfIntro();
  }, []);

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
          </FlexBox>
          <MyPageSector>
            <FlexBox>
              <div style={{ display: "flex", alignItems: "center", marginLeft: '20px' }}>
                <div>
                  <FlexBox style={{ alignItems: 'center', marginBottom: '5px' }}>
                    {/* 닉네임 */}
                    <MyPageNomalText
                      style={{ fontWeight: "bold", marginRight: "10px", fontSize: '20px' }}
                    >
                      {userMyInfo.nickname}
                    </MyPageNomalText>
                    {/* 나이 */}
                    <MyPageNomalText style={{ fontSize: '12px' }}>{userMyInfo.age}세</MyPageNomalText>
                  </FlexBox>
                  {/* 한 줄 소개 */}
                  <MyPageNomalText style={{ fontSize: '15px' }}>
                    {userMyInfo.description}
                  </MyPageNomalText>
                </div>
              </div>
            </FlexBox>
          </MyPageSector>
          {/* 자기 소개 섹터*/}
          <FlexBox style={{ alignItems: "center" }}>
            <MyPageTitle style={{ marginRight: "20px" }}>자기 소개</MyPageTitle>
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
                  <MyPageNomalText>
                    {/* 고구마 */}
                    {userSelfIntro.species}
                  </MyPageNomalText>
                </div>
              </Grid>
              <Grid item xs={6} style={{ margin: "10px auto" }}>
                <div>
                  <MyPageSubtitle>취미</MyPageSubtitle>
                  <MyPageNomalText>
                    {/* 축구 */}
                    {userSelfIntro.hobit}
                  </MyPageNomalText>
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
                    {/* 막걸리 좋아하고 축구 좋아하시는 남성분들과 친해지고 싶어요 */}
                    {userSelfIntro.want}
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
                    {/* 대기업 다니다가 수직적인 문화와 복잡한 도시생활에 질려 귀농했어요 */}
                    {userSelfIntro.why}
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
