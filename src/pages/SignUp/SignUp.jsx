import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6에서는 useNavigate를 사용합니다.
import logo1 from "../../assets/images/logo.png";
import {
  FormContainer,
  RoundedLogo1,
  StyledLabel,
  StyledInput,
  StyledButton,
  DuplicateCheckButton
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

  // 예 아니오 버튼 클릭 감지
  const [whatButton, setWhatButton] = useState('');

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
    if (whatButton==='YES') {
      navigate("/NextSignUp"); // 아니오 버튼을 클릭했을 때 / 페이지로 이동
    } else {
      navigate("/"); // 그 외의 경우에는 /NextSignUp 페이지로 이동
    }
  };

  // 렌더링
  return (
    <div>
      <FormContainer style={{ paddingTop: "100px" }}>
        <RoundedLogo1 src={logo1} />
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 6 }}
            justifyContent="center"
            style={{ margin: "50px" }}
          >
            {/* 닉네임 */}
            <Grid item xs={3}>
              <div style={{position:'relative'}}>
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
                <DuplicateCheckButton>중복검사</DuplicateCheckButton>
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
              <div style={{position:'relative'}}>
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
                <DuplicateCheckButton>중복검사</DuplicateCheckButton>
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
          <div
            style={{ fontSize: "40px", fontWeight: "bold", color: "#A4651B" }}
          >
            현재 농사 중 이신가요?
          </div>
          {/* 회원가입 버튼 */}
          <div style={{ display: "flex" }}>
            <StyledButton
              type="submit"
              style={{ width: "300px" }}
              backgroundColor="#f79b33"
              border="3px solid #75c13e"
              onClick={()=>setWhatButton('YES')}
            >
              예
            </StyledButton>
            <StyledButton
              type="submit"
              onClick={() => navigate("/")}
              style={{ width: "300px" }}
              backgroundColor="#b97d38"
              border="3px solid #dd923d"
            >
              아니오
            </StyledButton>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default SignUp;
