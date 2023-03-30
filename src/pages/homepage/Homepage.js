import Header from "../../components/header/Header";
import "./homepage.css";
import Post from "../../components/post/Post"

function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Post/>
      </div>
    </>
  );
}
export default Homepage