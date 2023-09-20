import Grid from "@mui/material/Grid";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6에서는 useNavigate를 사용합니다.
import logo1 from "../../assets/images/logo2.png";
import Header from "../../components/Header";
import {
  FormContainer,
  RoundedLogo1,
  SignUpSelect,
  StyledButton,
  StyledInput,
  StyledLabel,
} from "../../styles/Main";

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

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 함수를 가져옵니다.

  // 인풋 데이터 감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const YesClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/user/create`,
        null,
        {
          params: {
            nickName: formData.user_nickname,
            age: formData.user_age,
            sex: formData.user_sex,
            password: formData.user_password,
            description: formData.user_description,
            accountId: formData.user_id,
          },
        }
      );
      console.log(response.data);
      navigate("/NextSignUp", {
        state: { userId: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const NoClick = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/user/create`,
        null,
        {
          params: {
            nickName: formData.user_nickname,
            age: formData.user_age,
            sex: formData.user_sex,
            password: formData.user_password,
            description: formData.user_description,
            accountId: formData.user_id,
          },
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // 렌더링
  return (
    <div>
      <Header />
      <FormContainer style={{ padding: "40px 0", height: "400px" }}>
        <RoundedLogo1 src={logo1} />
        <form
          // onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            rowSpacing={0.5}
            columnSpacing={{ xs: 3 }}
            justifyContent="center"
            style={{ width: "300px" }}
          >
            {/* 닉네임 */}
            <Grid item xs={4}>
              <div style={{ position: "relative" }}>
                <StyledLabel style={{ fontSize: "15px" }}>닉네임</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"20px"}
                  fontSize={"15px"}
                  name="user_nickname"
                  value={formData.user_nickname}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 나이 */}
            <Grid item xs={4}>
              <div>
                <StyledLabel style={{ fontSize: "15px" }}>나이</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"20px"}
                  fontSize={"15px"}
                  type="number"
                  name="user_age"
                  value={formData.user_age}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 성별 */}
            <Grid item xs={4}>
              <div>
                <StyledLabel style={{ fontSize: "15px" }}>성별</StyledLabel>
                <br />
                <SignUpSelect
                  name="user_sex"
                  value={formData.user_sex}
                  onChange={handleChange}
                  required
                >
                  <option value="male">남자</option>
                  <option value="female">여자</option>
                </SignUpSelect>
              </div>
            </Grid>
            {/* 아이디 */}
            <Grid item xs={12}>
              <div style={{ position: "relative" }}>
                <StyledLabel style={{ fontSize: "15px" }}>아이디</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"20px"}
                  fontSize={"15px"}
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>

            {/* 비밀번호 */}
            <Grid item xs={12}>
              <div>
                <StyledLabel style={{ fontSize: "15px" }}>비밀번호</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"20px"}
                  fontSize={"15px"}
                  name="user_password"
                  value={formData.user_password}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>

            {/* 한 줄 자기소개 */}
            <Grid item xs={12}>
              <div>
                <StyledLabel style={{ fontSize: "15px" }}>
                  한 줄 자기소개
                </StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"20px"}
                  fontSize={"15px"}
                  name="user_description"
                  value={formData.user_description}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
          </Grid>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#A4651B",
              margin: "50px 0px 5px 0px",
            }}
          >
            현재 농사 중 이신가요?
          </div>
          {/* 회원가입 버튼 */}
          <div style={{ display: "flex" }}>
            <StyledButton
              type="submit"
              style={{ width: "120px", marginRight: "10px" }}
              backgroundColor="#f79b33"
              border="3px solid #75c13e"
              onClick={YesClick}
            >
              예
            </StyledButton>
            <StyledButton
              type="submit"
              onClick={NoClick}
              style={{ width: "120px" }}
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
