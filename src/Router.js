import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Principal from "./pages/Principal";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
