import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import Header from "components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "states/GlobalState";
import {
  FlexBox,
  WritingContainer,
  WritingSubmitBtton,
  WritingTextArea,
  WritingTitleInput,
} from "styles/Main";

const Writing = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useRecoilState(userState);
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
  };

  const eventWriting = async (e) => {
    e.preventDefault();
    try {
      if (formData.category === "gomin") {
        await axios
          .post(`${process.env.REACT_APP_SERVER_API}/dorandoran/create`, null, {
            params: {
              title: formData.title,
              description: formData.contents,
              userId,
            },
          })
          .then((response) => {
            console.log(response);
          });
      } else {
        if (userId) {
          await axios
            .post(`${process.env.REACT_APP_SERVER_API}/event/create`, null, {
              params: {
                title: formData.title,
                description: formData.contents,
                category: formData.category,
                status: 1,
                userId,
              },
            })
            .then((response) => {
              console.log(response);
              navigate("/");
            });
        } else {
          console.log("err");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={eventWriting}>
        <WritingContainer>
          <FlexBox>
            <WritingTitleInput
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="제목"
              required
            />
            <Box
              sx={{
                minWidth: 120,
                width: "140px",
                height: "70px",
                marginLeft: "30px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.category}
                  label="카테고리"
                  onChange={handleChange}
                  name="category"
                >
                  <MenuItem value="saecham">새참 먹자</MenuItem>
                  <MenuItem value="poom">품앗이</MenuItem>
                  <MenuItem value="gomin">고민 토론</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </FlexBox>
          <WritingTextArea
            name="contents"
            value={formData.contents}
            onChange={handleChange}
            placeholder="내용"
            required
          />
          <WritingSubmitBtton>글 작성</WritingSubmitBtton>
        </WritingContainer>
      </form>
    </>
  );
};

export default Writing;
