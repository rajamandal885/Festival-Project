import "./settings.css";
import image15 from "../../image/image15.jpg"

function Settings() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={image15}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none"}}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Name" name="name" style={{marginRight:"75%"}} />
          <label>Gmail</label>
          <input type="Gmail" placeholder="name@gmail.com" name="gmail" style={{marginRight:"75%"}} />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password"style={{marginRight:"75%"}}  />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
export default Settings