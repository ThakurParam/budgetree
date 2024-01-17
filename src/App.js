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
import { Profilecard2 } from "./components/Profilecard2";
import { Icon } from "@mui/material";

import { Tabel2 } from "./components/Tabel2";

function App() {
  return (
    <>
      <SignIn />
      <Forgotpassword />
      <Enterotp />
      <ResetPassword />
      <Signup />
      <Dashboard />
    </>
  );
}

export default App;
