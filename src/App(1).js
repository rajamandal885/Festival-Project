import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Post from "./components/post/Post";
import Login from "./pages/login/Login";
import Blog1 from "./subpages/blog1/Blog1";
import Blog2  from "./subpages/blog2/Blog2";
import Blog3 from "./subpages/blog3/Blog3";
import Blog4 from "./subpages/blog4/Blog4";
import Blog5 from "./subpages/blog5/Blog5";
import Footer from "./Footer/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />}>
          <Route index element={<Homepage />} />
          <Route path="post" element={<Post />} />
          <Route path="register" element={<Register />} />
          <Route path="write" element={<Write />} />
          <Route path="login" element={<Login />} />
          <Route path="setting" element={<Settings />} />
          <Route path="about" element={<About />} />
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3/>} />
          <Route path="blog4" element={<Blog4/>} />
          <Route path="blog5" element={<Blog5/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;