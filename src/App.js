import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import JoinPage from "./pages/Join/JoinPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import PostUploadPage from "./pages/Post/PostUploadPage";
import LoginEmail from "./pages/Login/LoginEmail";
import SearchPage from "./pages/Search/SearchPage";
import ProductUploadPage from "./pages/ProductUpload/ProductUploadPage";
import ProfileEditPage from "./pages/Profile/ProfileEditPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/login/email" element={<LoginEmail />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
          <Route path="/post/upload" element={<PostUploadPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/profile/:accountname" element={<ProfilePage />}></Route>
          <Route path="/profile/edit" element={<ProfileEditPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/product" element={<ProductUploadPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
