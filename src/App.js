import BenefitsBoard from "pages/BenefitsBoard/BenefitsBoard";
import DetailedPost from "pages/DetailedPost/DetailedPost";
import DetailedPost2 from "pages/DetailedPost/DetailedPost2";
import Main from "pages/Main/Main";
import Map from "pages/Map/Map";
import ModifyMyInfo from "pages/ModifyMyInfo/ModifyMyInfo";
import ModifySelfIntroduction from "pages/ModifySelfIntroduction/ModifySelfIntroduction";
import MyPage from "pages/MyPage/MyPage";
import NextSignUp from "pages/NextSignUp/NextSignUp";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import Writing from "pages/Writing/Writing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/NextSignUp" element={<NextSignUp />} />
        <Route path="/ModifyMyInfo" element={<ModifyMyInfo />} />
        <Route
          path="/ModifySelfIntroduction"
          element={<ModifySelfIntroduction />}
        />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/benefits/:id" element={<BenefitsBoard />} />
        <Route path="/event/:id" element={<DetailedPost />} />
        <Route path="/dorandoran/:id" element={<DetailedPost2 />} />
        <Route path="/Writing" element={<Writing />} />
      </Routes>
    </Router>
  );
}

export default App;
