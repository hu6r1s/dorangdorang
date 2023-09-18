import BenefitsBoard from "pages/BenefitsBoard/BenefitsBoard";
import Main from "pages/Main/Main";
import Map from "pages/Map/Map";
import ModifyMyInfo from "pages/ModifyMyInfo/ModifyMyInfo";
import MyPage from "pages/MyPage/MyPage";
import NextSignUp from "pages/NextSignUp/NextSignUp";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
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
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/BenefitsBoard" element={<BenefitsBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
