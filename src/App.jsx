// src/App.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import BorrowedBooksPage from "./pages/BorrowedBooksPage";
import ProfilePage from "./pages/ProfilePage";
import BookManagementPage from "./pages/BookManagementPage";
import BorrowManagementPage from "./pages/BorrowManagementPage";
import ReviewManagementPage from "./pages/ReviewManagementPage";
import AddBookPage from "./pages/AddBookPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchPublicBookAction } from "./features/book/bookAction";
import { useDispatch } from "react-redux";
import { autoLoginUser } from "./features/auth/authAction";

const userRole = "admin";

function App() {
  // load public book only once for whole application
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublicBookAction());
    dispatch(autoLoginUser());
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <AppNavbar />
      {/* main content should grow */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* private routes */}
          <Route
            path="/dashboard"
            element={<DashboardLayout userRole={userRole} />}
          >
            <Route index element={<DashboardHome />} />
            <Route path="borrowed" element={<BorrowedBooksPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="books" element={<BookManagementPage />} />
            <Route path="books/add" element={<AddBookPage />} />
            <Route path="books/edit" element={<AddBookPage />} />
            <Route path="borrows" element={<BorrowManagementPage />} />
            <Route path="reviews" element={<ReviewManagementPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
