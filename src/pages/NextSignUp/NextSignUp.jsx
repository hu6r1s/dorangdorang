import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router v6에서는 useNavigate를 사용합니다.
import Grid from "@mui/material/Grid";
import {
  FormContainer,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "../../styles/Main";

const NextSignUp = () => {
  // 폼 데이터 스테이트
  const [formData, setFormData] = useState({
    farm_species: "",
    user_hobit: "",
    farm_want: "",
    farm_why: "",
    user_profileImage: "null",
    farm_name:'',
    farm_address:'',
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
    navigate("/"); // 이동할 경로를 지정합니다.
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
    <div style={{ padding: "50px" }}>
      <FormContainer
        style={{ margin: "0 auto" }}
      >
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
            rowSpacing={1.5}
            justifyContent="center"
            style={{ margin: "40px"}}
          >
            {/* 재배종목 */}
            <Grid item xs={4} style={{ paddingRight: "15px" }}>
              <div>
                <StyledLabel style={{fontSize:'20px'}}>재배종목</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"30px"}
                  fontSize={"20px"}
                  name="farm_species"
                  value={formData.farm_species}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 취미 */}
            <Grid item xs={4} style={{ paddingLeft: "15px" }}>
              <div>
                <StyledLabel style={{fontSize:'20px'}}>취미</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"30px"}
                  fontSize={"20px"}
                  name="user_hobit"
                  value={formData.user_hobit}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 이런 사람들과 친해지고 싶어요 */}
            <Grid item xs={8}>
              <div>
                <StyledLabel style={{fontSize:'20px'}}>이런 사람들과 친해지고 싶어요</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"30px"}
                  fontSize={"20px"}
                  name="farm_want"
                  value={formData.farm_want}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 귀농한 이유 */}
            <Grid item xs={8}>
              <div>
                <StyledLabel style={{fontSize:'20px'}}>귀농한 이유</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"30px"}
                  fontSize={"20px"}
                  name="farm_why"
                  value={formData.farm_why}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 빈줄 */}
            <Grid item xs={10}/>
            {/* 농장 이름 */}
            <Grid item xs={4} style={{ paddingRight: "15px" }}>
              <div>
                <StyledLabel style={{fontSize:'20px'}}>농장 이름</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"30px"}
                  fontSize={"20px"}
                  name="farm_name"
                  value={formData.farm_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
            {/* 농장 주소 */}
            <Grid item xs={4} style={{ paddingLeft: "15px" }}>
              <div>
                <StyledLabel style={{fontSize:'20px'}}>농장 주소</StyledLabel>
                <br />
                <StyledInput
                  width={"100%"}
                  height={"30px"}
                  fontSize={"20px"}
                  name="farm_address"
                  value={formData.farm_address}
                  onChange={handleChange}
                  required
                />
              </div>
            </Grid>
          </Grid>
          {/* 농장 사진 */}
          <div style={{ marginBottom: "30px", paddingRight: "280px" }}>
            <StyledLabel style={{fontSize:'20px'}}>농장 사진</StyledLabel>
            <div style={{marginRight:'100px'}}>
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
                  width: "100px",
                  height: "50px",
                  fontSize: "20px",
                  margin:'5px 10px 0px 0px'
                }}
              >
                업로드
              </StyledButton>
              <span
                style={{
                  fontSize: "20px",
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
            style={{ width: "680px", fontSize:'40px'}}
            backgroundColor="#A4651B"
            border="3px solid #dd923d"
          >
            회원가입
          </StyledButton>
        </form>
      </FormContainer>
    </div>
  );
};
export default NextSignUp;
