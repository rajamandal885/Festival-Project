import "./write.css";
import image45 from "../../image/image45.jpg"

 function Write() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="write">
            <img
              className="writeImg"
              src={image45}
              alt=""
            />
            
            <form className="writeForm">
              <div className="writeFormGroup">
                <label className="fileInput">
                  <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                  className="writeInput"
                  placeholder="Title"
                  type="text"
                  autoFocus={true}
                />
              </div>
              <div className="writeFormGroup">
                <textarea
                  className="writeInput writeText"
                  placeholder="Tell your story..."
                  type="text"
                  autoFocus={true}
                />
              </div>
              <button className="writeSubmit" type="submit">
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Write