import logo from "./logo.svg";
import "./App.css";
import { SignIn } from "./pages/SignIn";

import { Forgotpassword } from "./pages/Forgotpassword";
import { Enterotp } from "./pages/Enterotp";
import { ResetPassword } from "./pages/ResetPassword";

import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Chart } from "./components/Chart";

import { Profilecard } from "./components/Profilecard";

import { Icon } from "@mui/material";

import { Tabel2 } from "./components/Tabel2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotificationsPanel } from "./components/NotificationsPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot password" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      {/* <NotificationsPanel /> */}
    </>
  );
}

export default App;
