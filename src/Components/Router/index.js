import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {GeneralDashboard} from "../../Dashboard/GeneralDashboard";
import { ForgotPassword } from "../Auth/ForgotPassword";
import { Login } from "../Auth/Login";
import { Register } from "../Auth/Register";
import { ResetPassword } from "../Auth/ResetPassword";
import AdminDashboard from '../Dashboard/AdminDashboard'
import  {AddNewQuestion}  from "../Pages/QuestionBank/AddNewQuestion.js";
import { QuizList } from "../Pages/Quiz/QuizList";
import { AddNewUser } from "../Pages/Users/AddNewUser";
import { Myappointment } from "../Pages/Users/Myappointment";
import { UsersList } from "../Pages/Users/UsersList";
// import "./App.css";

export const Router = () => {
  return (
    <div >
      <BrowserRouter >
        <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/new-user" element={<AddNewUser />} />
        <Route path="/user-list" element={<UsersList />} />
        <Route path="/new-question" element={<AddNewQuestion />} />
        <Route path="/my-appointment" element={<Myappointment/>} />
        <Route path="/quiz-list" element={<QuizList/>}/>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}