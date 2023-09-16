import React, { useRef, useState } from "react";
import {
  FormContainer,
  StyledButton,
  StyledLabel,
  StyledInput,
} from "../SignIn/SignIn";
import Grid from "@mui/material/Grid";

const ModifyMyInfo = () => {
  const fileInputRef = useRef(null); // 파일 입력란의 ref 생성
  const [selectedFileName, setSelectedFileName] = useState("파일을 선택하세요");

  // 파일 입력란에 파일을 선택한 경우 실행되는 함수
  const handleFileInputChange = () => {
    const fileName =
      fileInputRef.current?.files[0]?.name || "파일을 선택하세요";
    setSelectedFileName(fileName);
  };
  return (
    <div style={{ padding: "50px" }}>
      <FormContainer
        style={{ margin: "0 auto", width: "1000px", height: "1000px" }}
      >
        <Grid
          container
          rowSpacing={3}
          justifyContent="center"
          style={{ margin: "50px"}}
        >
          {/* 닉네임 */}
          <Grid item xs={4}>
            <div>
              <StyledLabel>닉네임</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 나이 */}
          <Grid item xs={2} style={{paddingLeft:'30px'}}>
            <div>
              <StyledLabel>나이</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 성별 */}
          <Grid item xs={2} style={{paddingLeft:'30px'}}>
            <div>
              <StyledLabel>성별</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 아이디 */}
          <Grid item xs={8}>
            <div>
              <StyledLabel>아이디</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 비밀번호 */}
          <Grid item xs={8}>
            <div>
              <StyledLabel>비밀번호</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
          {/* 한 줄 자기소개 */}
          <Grid item xs={8}>
            <div>
              <StyledLabel>한 줄 자기소개</StyledLabel>
              <br />
              <StyledInput width={"100%"} height={"50px"} fontSize={"25px"} />
            </div>
          </Grid>
        </Grid>
        {/* 프로필 사진 */}
        <div style={{ marginBottom: "80px", marginRight: "280px" }}>
          <StyledLabel>프로필 사진</StyledLabel>
          <div>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef} // ref 연결
            onChange={handleFileInputChange}
            style={{ display: "none" }}
            />
          <StyledButton
            onClick={() => fileInputRef.current.click()} // ref를 사용하여 파일 입력란 클릭
            style={{width:'200px', height:'80px', fontSize:'30px', marginLeft:'0px'}}
            >
            업로드
          </StyledButton>
          <span style={{fontSize:'20px', fontWeight:'bold',color:'#A4651B'}}>{selectedFileName}</span>
          </div>
        </div>
        {/* 회원가입 버튼 */}
        <StyledButton
          style={{width: "680px" }}
          backgroundColor="#A4651B"
          border="3px solid #dd923d"
        >
          회원가입
        </StyledButton>
      </FormContainer>
    </div>
  );
};
export default ModifyMyInfo;
