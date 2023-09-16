import Grid from "@mui/material/Grid";
import logo2 from "assets/images/logo2.png";
import {
  FormContainer,
  RoundedLogo2,
  StyledButton,
  StyledInput,
  StyledLabel,
} from "../SignIn/SignIn";

const SignUp = () => {
  return (
    <div>
      <FormContainer style={{ paddingTop: "100px" }}>
        <RoundedLogo2 src={logo2} />
        <Grid container rowSpacing={3} columnSpacing={{ xs: 6 }} justifyContent="center" style={{ margin: '50px' }}>
          {/* 닉네임 */}
          <Grid item xs={3}>
            <div>
              <StyledLabel>닉네임</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 나이 */}
          <Grid item xs={3}>
            <div>
              <StyledLabel>나이</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 성별 */}
          <Grid item xs={3}>
            <div>
              <StyledLabel>성별</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 줄 채우기 */}
          <Grid item xs={10}></Grid>
          {/* 아이디 */}
          <Grid item xs={9}>
            <div>
              <StyledLabel>아이디</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 비밀번호 */}
          <Grid item xs={9}>
            <div>
              <StyledLabel>비밀번호</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 한 줄 자기소개 */}
          <Grid item xs={9}>
            <div>
              <StyledLabel>한 줄 자기소개</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
        </Grid>

        {/* 회원가입 버튼 */}
        <StyledButton>다음</StyledButton>
      </FormContainer>
    </div>
  );
};

export default SignUp;
