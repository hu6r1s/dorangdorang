import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6에서는 useNavigate를 사용합니다.
import Grid from "@mui/material/Grid";
import {
  FormContainer,
  StyledLabel,
  StyledInput,
  StyledButton,
  ModifyMyInfoContainer,
  FlexBox,
  SignUpSelect,
  ModifyMyInfoLabel,
  ModifyMyInfoInput,
} from "../../styles/Main";
import Header from "components/Header";

const ModifyMyInfo = () => {
  // 폼 데이터 스테이트
  const [formData, setFormData] = useState({
    user_nickname: "",
    user_age: "",
    user_sex: "",
    user_id: "",
    user_password: "",
    user_description: "",
    user_profileImage: "null",
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

  const fileInputRef = useRef(null); // 파일 입력란의 ref 생성
  const [selectedFileName, setSelectedFileName] = useState("파일을 선택하세요");

  // 파일 입력란에 파일을 선택한 경우 실행되는 함수
  const handleFileInputChange = () => {
    const fileName =
      fileInputRef.current?.files[0]?.name || "파일을 선택하세요";
    setSelectedFileName(fileName);
    setFormData({
      ...formData,
      user_profileImage: fileInputRef.current?.files[0],
    });
  };

  // 렌더링
  return (
    <>
      <Header />
      <ModifyMyInfoContainer>
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
            rowSpacing={1}
            columnSpacing={3}
            justifyContent="center"
            style={{ width: "400px" }}
          >
            {/* 닉네임 */}
            <Grid item xs={6}>
              <div>
                <ModifyMyInfoLabel>닉네임</ModifyMyInfoLabel>
                <br />
                <ModifyMyInfoInput
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
                <ModifyMyInfoLabel>나이</ModifyMyInfoLabel>
                <br />
                <ModifyMyInfoInput
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
                <ModifyMyInfoLabel>성별</ModifyMyInfoLabel>
                <br />
                <SignUpSelect
                  name="user_sex"
                  value={formData.user_sex}
                  onChange={handleChange}
                  required
                >
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </SignUpSelect>
              </div>
            </Grid>
            {/* 아이디 */}
            <Grid item xs={12}>
              <div>
                <ModifyMyInfoLabel>아이디</ModifyMyInfoLabel>
                <br />
                <ModifyMyInfoInput
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
                <ModifyMyInfoLabel>비밀번호</ModifyMyInfoLabel>
                <br />
                <ModifyMyInfoInput
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
                <ModifyMyInfoLabel>한 줄 자기소개</ModifyMyInfoLabel>
                <br />
                <ModifyMyInfoInput
                  name="user_description"
                  value={formData.user_description}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
          </Grid>
          {/* 프로필 사진 */}
          <div style={{ marginBottom: "5px", marginLeft: "-150px" }}>
            <ModifyMyInfoLabel>프로필 사진</ModifyMyInfoLabel>
            <FlexBox>
              <input
                type="file"
                id="fileInput"
                name="user_profile"
                ref={fileInputRef} // ref 연결
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
              <StyledButton
                onClick={() => fileInputRef.current.click()} // ref를 사용하여 파일 입력란 클릭
                style={{
                  width: "60px",
                  height: "30px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginLeft: "0px",
                  marginRight: "5px",
                }}
              >
                업로드
              </StyledButton>
              <div
                style={{
                  width: "150px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#A4651B",
                }}
              >
                {selectedFileName}
              </div>
            </FlexBox>
          </div>
          {/* 회원가입 버튼 */}
          <StyledButton
            style={{ width: "400px" }}
            type="submit"
            backgroundColor="#A4651B"
            border="3px solid #dd923d"
          >
            저장
          </StyledButton>
        </form>
      </ModifyMyInfoContainer>
    </>
  );
};
export default ModifyMyInfo;
