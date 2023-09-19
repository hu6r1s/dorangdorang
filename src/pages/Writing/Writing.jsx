import Header from "components/Header";
import MuiSelect from "components/MuiSelect";
import React, { useState } from "react";
import {
  FlexBox,
  WritingContainer,
  WritingSubmitBtton,
  WritingTextArea,
  WritingTitleInput,
} from "styles/Main";

const Writing = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    contents: "",
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

  
  return (
    <>
      <Header />
      <form>
        <WritingContainer>
          <FlexBox>
            <WritingTitleInput name="title" value={formData.title} onChange={handleChange} placeholder="제목" required />
            <MuiSelect />
          </FlexBox>
          <WritingTextArea name="contents" value={formData.contents} onChange={handleChange} placeholder="내용" required />
          <WritingSubmitBtton>글 작성</WritingSubmitBtton>
        </WritingContainer>
      </form>
    </>
  );
};

export default Writing;
