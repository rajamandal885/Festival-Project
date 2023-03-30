    import "./about.css";
    import image8 from '../../image/image8.png'
    function About() {
      return (
        <div className="container">

          <div className="row">
          <div className="aboutItem">
            <img
              src={image8}
              alt=""
            />
            <div className="col">
        <div className="about">
            <p>
              India is a vast country with various religions and various cultural practices.
              People with different cultural beliefs stay together in harmony.
              They celebrate festivals together and share love and respect with each other.
              Some major festivals celebrated in India are Holi, Diwali, Dussehra, Eid, Christmas, etc.
              The festivals can be national or religious. Some national festivals are Independence day, Republic day, Gandhi Jayanti, etc.
              The national festivals are celebrated for the nation which sees no caste and religion.
              These festivals reflect the love for the nation and share love and respect for each other.
              We also pay tribute to the nation and the heroes of our nation.
            </p>
          </div>
          <div className="aboutItem">
            <span className="aboutTitle">CATEGORIES</span>
            <div className="aboutList">
              <b>Three types of festivals are mainly celebrated in India</b>
              <p>
                1. National Festivals are celebrated with proud and have super-patriotic fervor.<br />
                Republic day, Independence day and Gandhi Jayanti are the three national festivals of India.<br />

                2. Religious Festivals shows the religious association of people with the festival.<br />
                The major religious festivals includes Holi, Raksha Bandhan, Diwali, Krishna Janamastami, Durga-Puja, Dussehra, Maha Shivaratri, Eid, Christmas, Easter, Buddha Purnima, Mahavir Jayanti, etc.<br />

                3. Seasonal and Harvesting festivals are celebrated to mark the harvesting of crops and the change of seasons.<br />
                The major seasonal and harvesting festivals that are celebrated in India includes Basant Panchami, Pongal, Makar Sankranti, Lohri, Onam, Baisakhi, Bhogali bihu, etc <br />
              </p>
            </div>
          </div>
          <div className="aboutItem">
            <span className="aboutTitle">FOLLOW US</span>
            <div className="aboutSocial">
              <i className="aboutIcon fab fa-facebook-square"></i>
              <i className="aboutIcon fab fa-instagram-square"></i>
              <i className="aboutIcon fab fa-pinterest-square"></i>
              <i className="aboutIcon fab fa-twitter-square"></i>
            </div>
          </div>
            </div>
        </div>
          </div>
        </div>
      );
    }
    export default About