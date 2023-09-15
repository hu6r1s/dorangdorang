import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "pages/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
