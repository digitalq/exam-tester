// import { Suspense } from "react";
// import { useLocation } from "react-router-dom";
// import { Header, Footer, Sidebar } from "./Components/admin";
// import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
// import { Login } from "./Components/Auth/Login";
// import { Register } from "./Components/Auth/Register";
// import { ForgotPassword } from "./Components/Auth/ForgotPassword";
// import { ResetPassword } from "./Components/Auth/ResetPassword";
// import AdminDashboard from "./Components/Dashboard/AdminDashboard";

import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import Layout from "./Components/Layout/Layout";
import { Router } from "./Components/Router";

function App() {
  // let location = useLocation().pathname;

  // let locationSplit = location.split("/");
  // let locationParent = locationSplit[1];
  // let WithoutRouter = ["auth", "error", "utilities"];
  return (
    <>
      {/* {!WithoutRouter.includes(locationParent) &&
        <>
          <Header />
          <Sidebar />
        </>
      } */}
      {/* <Suspense fallback={<h1>Still Loading…</h1>}>
        <Switch> */}
        {/* <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<AdminDashboard />} />
        </Routes>
        </BrowserRouter> */}
        {/* <Layout content={<Router/>} /> */}
        <Router />
     
        {/* </Switch>
      </Suspense> */}

    </>
  );
}

export default App;
