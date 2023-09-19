import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // React Router v6에서는 useNavigate를 사용합니다.
import { FormContainer, RoundedLogo1, StyledLabel, StyledInput, StyledButton } from '../../styles/Main'
import logo2 from "assets/images/logo2.png";


const SignIn = () => {
  // 폼 데이터 스테이트
  const [formData, setFormData] = useState({
    user_id: "",
    user_password: "",
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
    console.log('제출된 데이터:', formData);
    navigate('/Main'); // 이동할 경로를 지정합니다.
  };

  // 렌더링
  return (
    <>
        <FormContainer>
          <RoundedLogo1 src={logo2} />
          {/* 로그인 폼 */}
          <form onSubmit={handleSubmit}>
            {/* 아이디 */}
            <div style={{ marginBottom: "50px", marginTop: "100px" }}>
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
            <div style={{ marginBottom: "30px" }}>
              <StyledLabel>비밀번호</StyledLabel>
              <br />
              <StyledInput
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
                placeholder="PASSWORD"
                required
              />
            </div>
            {/* 로그인 버튼 */}
            <StyledButton type="submit" variant="contained">로그인</StyledButton>
          </form>
          {/* 회원가입 버튼 */}
          <Link to="/SignUp"> 
          <StyledButton
            variant="contained"
            backgroundColor="#A4651B"
            border="3px solid #dd923d"
            >
            회원가입
          </StyledButton>
            </Link>
        </FormContainer>
    </>
  );
};
export default SignIn;
