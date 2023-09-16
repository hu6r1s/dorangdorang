import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // React Router v6에서는 useNavigate를 사용합니다.
import logo1 from "../../assets/images/누끼로고1.png";
import {
  FormContainer,
  RoundedLogo1,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "../../styles/Main";

import Grid from "@mui/material/Grid";

const SignUp = () => {
  // 폼 데이터 스테이트
  const [formData, setFormData] = useState({
    user_nickname: "",
    user_age: "",
    user_sex: "",
    user_id: "",
    user_password: "",
    user_description: "",
  });
  // 인풋 데이터 감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // 제출 버튼 클릭 시 작동 함수
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 함수를 가져옵니다.

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("제출된 데이터:", formData);
    navigate("/NextSignUp"); // 이동할 경로를 지정합니다.
  };



  // 렌더링
  return (
    <div>
      <FormContainer style={{ paddingTop: "100px" }}>
        <RoundedLogo1 src={logo1} />
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 6 }}
          justifyContent="center"
          style={{ margin: "50px" }}
        >
          {/* 닉네임 */}
          <Grid item xs={3}>
            <div>
              <StyledLabel>닉네임</StyledLabel>
              <br />
              <StyledInput
                width={"100%"}
                height={"50px"}
                fontSize={"25px"}
                name="user_nickname"
                value={formData.user_nickname}
                onChange={handleChange}
                required
              />
            </div>
          </Grid>
          {/* 나이 */}
          <Grid item xs={3}>
            <div>
              <StyledLabel>나이</StyledLabel>
              <br />
              <StyledInput
                width={"100%"}
                height={"50px"}
                fontSize={"25px"}
                name="user_age"
                value={formData.user_age}
                onChange={handleChange}
                required
              />
            </div>
          </Grid>
          {/* 성별 */}
          <Grid item xs={3}>
            <div>
              <StyledLabel>성별</StyledLabel>
              <br />
              <StyledInput
                width={"100%"}
                height={"50px"}
                fontSize={"25px"}
                name="user_sex"
                value={formData.user_sex}
                onChange={handleChange}
                required
              />
            </div>
          </Grid>
          {/* 줄 채우기 */}
          <Grid item xs={10}></Grid>
          {/* 아이디 */}
          <Grid item xs={9}>
            <div>
              <StyledLabel>아이디</StyledLabel>
              <br />
              <StyledInput
                width={"100%"}
                height={"50px"}
                fontSize={"25px"}
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
                required
              />
            </div>
          </Grid>
          {/* 비밀번호 */}
          <Grid item xs={9}>
            <div>
              <StyledLabel>비밀번호</StyledLabel>
              <br />
              <StyledInput
                width={"100%"}
                height={"50px"}
                fontSize={"25px"}
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
                required
              />
            </div>
          </Grid>
          {/* 한 줄 자기소개 */}
          <Grid item xs={9}>
            <div>
              <StyledLabel>한 줄 자기소개</StyledLabel>
              <br />
              <StyledInput
                width={"100%"}
                height={"50px"}
                fontSize={"25px"}
                name="user_description"
                value={formData.user_description}
                onChange={handleChange}
                required
              />
            </div>
          </Grid>
        </Grid>
        {/* 회원가입 버튼 */}
        <StyledButton type="submit">다음</StyledButton>
        </form>
      </FormContainer>
    </div>
  );
};

export default SignUp;
