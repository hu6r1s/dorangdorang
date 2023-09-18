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
import BenefitsBoard from "pages/BenefitsBoard/BenefitsBoard";
import ModifySelfIntroduction from "pages/ModifySelfIntroduction/ModifySelfIntroduction";

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<BenefitsBoard />} />
=======
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
>>>>>>> c085065a1b9f974983a5c93acd5b3e7aa1c96314
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/NextSignUp" element={<NextSignUp />} />
        <Route path="/ModifyMyInfo" element={<ModifyMyInfo />} />
        <Route path="/ModifySelfIntroduction" element={<ModifySelfIntroduction />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/BenefitsBoard" element={<BenefitsBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
