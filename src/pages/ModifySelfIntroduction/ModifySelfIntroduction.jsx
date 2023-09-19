import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6에서는 useNavigate를 사용합니다.
import Grid from "@mui/material/Grid";
import {
  FormContainer,
  ModifySelfIntroLabel,
  StyledInput,
  StyledButton,
  ModifySelfIntroContainer,
  ModifySelfIntroInput,
} from "../../styles/Main";
import Header from "components/Header";

const ModifySelfIntroduction = () => {
  // 폼 데이터 스테이트
  const [formData, setFormData] = useState({
    farm_species: "",
    user_hobit: "",
    farm_want: "",
    farm_why: "",
    user_profileImage: "null",
    farm_name: "",
    farm_address: "",
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
    navigate("/MyPage"); // 이동할 경로를 지정합니다.
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
    <Header/>
      <ModifySelfIntroContainer>
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
            justifyContent="center"
            style={{ width:'400px' }}
          >
            {/* 재배종목 */}
            <Grid item xs={6} style={{ paddingRight: "15px" }}>
              <div>
                <ModifySelfIntroLabel>재배종목</ModifySelfIntroLabel>
                <br />
                <ModifySelfIntroInput
                  name="farm_species"
                  value={formData.farm_species}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 취미 */}
            <Grid item xs={6} style={{ paddingLeft: "15px" }}>
              <div>
                <ModifySelfIntroLabel>취미</ModifySelfIntroLabel>
                <br />
                <ModifySelfIntroInput
                  name="user_hobit"
                  value={formData.user_hobit}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 이런 사람들과 친해지고 싶어요 */}
            <Grid item xs={12}>
              <div>
                <ModifySelfIntroLabel>이런 사람들과 친해지고 싶어요</ModifySelfIntroLabel>
                <br />
                <ModifySelfIntroInput
                  name="farm_want"
                  value={formData.farm_want}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 귀농한 이유 */}
            <Grid item xs={12}>
              <div>
                <ModifySelfIntroLabel>귀농한 이유</ModifySelfIntroLabel>
                <br />
                <ModifySelfIntroInput
                  name="farm_why"
                  value={formData.farm_why}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 농장 주소 */}
            <Grid item xs={12}>
              <div>
                <ModifySelfIntroLabel>농장 주소</ModifySelfIntroLabel>
                <br />
                <ModifySelfIntroInput
                  name="farm_address"
                  value={formData.farm_address}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
          </Grid>
          {/* 농장 사진 */}
          <div style={{ margin:"5px 0 5px -225px", }}>
            <ModifySelfIntroLabel>농장 사진</ModifySelfIntroLabel>
            <div>
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
                  fontWeight:'bold',
                  marginLeft: "0px",
                  marginRight:'5px',
                }}
              >
                업로드
              </StyledButton>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#A4651B",
                }}
              >
                {selectedFileName}
              </span>
            </div>
          </div>
          {/* 회원가입 버튼 */}
          <StyledButton
            type="submit"
            style={{ width: "400px" }}
            backgroundColor="#A4651B"
            border="3px solid #dd923d"
          >
            저장
          </StyledButton>
        </form>
      </ModifySelfIntroContainer>
    </>
  );
};
export default ModifySelfIntroduction;
