import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { CoursesPage } from "./pages/CoursesPage";
import { BlogsPage } from "./pages/BlogsPage";
import { ContactPage } from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { CourseDetailsPage } from "./pages/CourseDetailsPage";
import { Toaster } from "@/components/ui/Toaster";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
