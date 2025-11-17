import Landing from "./Pages/Landing";
import LoginPage from "./Pages/LoginPage/LoginPage";
import {BrowserRouter, Route, Routes}  from "react-router";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
