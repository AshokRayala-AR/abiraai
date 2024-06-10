import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUsPage from "./components/contact/ContactUsPage";
import HomePage from "./components/home/HomePage";
import AboutCompanyPage from "./components/about/AboutCompanyPage";
import ServicesPage from "./components/services/ServicesPage";
import NavBarComp from "./components/header/navbar/NavBarComp";
import BlogPage from "./components/blog/BlogPage";

function App() {
  return (
    <BrowserRouter>
      
        <NavBarComp />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/aboutcompany"} element={<AboutCompanyPage />} />
          <Route path={"/services"} element={<ServicesPage />} />
          <Route path={"/contactus"} element={<ContactUsPage />} />
          <Route path={"/blog"} element={<BlogPage />} />
        </Routes>
        {/* <Footer /> */}
      
    </BrowserRouter>
  );
}

export default App;
