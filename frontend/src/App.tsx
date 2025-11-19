import Landing from "./Pages/Landing";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Signup from "./Pages/Signup/SignupPage";
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes}  from "react-router";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
