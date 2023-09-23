import logo2 from "assets/images/logo2.png";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // React Router v6에서는 useNavigate를 사용합니다.
import { useRecoilState } from "recoil";
import { userState } from "states/GlobalState";
import Header from '../../components/Header';
import { FormContainer, RoundedLogo1, StyledButton, StyledInput, StyledLabel } from '../../styles/Main';

const SignIn = () => {
  // 폼 데이터 스테이트
  const [formData, setFormData] = useState({
    user_id: "",
    user_password: "",
  });

  const [userId, setUserId] = useRecoilState(userState);
  // 인풋 데이터 감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 제출 버튼 클릭 시 작동 함수
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 함수를 가져옵니다.

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/user/login`,
        null,
        {
          params: {
            accountId: formData.user_id,
            password: formData.user_password,
          }
        }
      );
      console.log(response);
      if (typeof response.data === "number") {
        setUserId(response.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 렌더링
  return (
    <>
      <Header />
      <div>
        <FormContainer style={{ padding: '10px' }}>
          <RoundedLogo1 src={logo2} />
          {/* 로그인 폼 */}
          <form>
            {/* 아이디 */}
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
              <StyledLabel>아이디</StyledLabel>
              <br />
              <StyledInput
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
                placeholder="ID"
                required
              />
            </div>
            {/* 비밀번호 */}
            <div style={{ marginBottom: "20px" }}>
              <StyledLabel>비밀번호</StyledLabel>
              <br />
              <StyledInput
                name="user_password"
                value={formData.user_password}
                type="password"
                onChange={handleChange}
                placeholder="PASSWORD"
                required
              />
            </div>
            {/* 로그인 버튼 */}
            <StyledButton type="submit" variant="contained" onClick={login}>로그인</StyledButton>
          </form>
          {/* 회원가입 버튼 */}
          <Link to="/SignUp">
            <StyledButton
              variant="contained"
              backgroundColor="#A4651B"
              border="3px solid #dd923d"
              style={{ marginRight: '5px' }}
            >
              회원가입
            </StyledButton>
          </Link>
        </FormContainer>
      </div>
    </>
  );
};
export default SignIn;
