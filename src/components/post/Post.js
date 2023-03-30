        import "./post.css";
        import image2 from '../../image/image2.jpg';
        import image3 from '../../image/image3.jpg';
        import image4 from '../../image/image4.jpg';
        import image5 from '../../image/image5.jpg';
        import image6 from '../../image/image6.jpg';
        import { Outlet, Link } from "react-router-dom";
        import 'bootstrap/dist/css/bootstrap.min.css'

        function Post() {
          return (
            <>
              <div className="container">
          <div className="title">
                <h2>Festival Tour</h2>
          </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <Link to ="/Blog1"><img src={image2} className="card-img-top" style={{height:"90%"}} alt="" /></Link>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize:"120%"}}>HORNBILL FESTIVAL, NAGALAND</h5>
                      <p className="card-text" style={{fontSize:"80%"}}>This is a very popular festival of Nagaland.
                                      Often cited as “festival of all festivals”, 
                                      The Hornbill Festival is a grand celebration that is brought to life each year in Nagaland, 
                                      North East India.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <Link to="/Blog2"><img src={image3} className="card-img-top" style={{height:"100%"}}  alt="" /></Link>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize:"120%"}}>HOLI, FESTIVAL OF COLOURS</h5>
                      <p className="card-text" style={{fontSize:"80%"}} >Every spring, people across India and around the world celebrate the Hindu festival Holi,
                                  throwing colored water......</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <Link to="/Blog3"><img src={image4} className="card-img-top" style={{height:"100%"}}  alt="" /></Link>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize:"120%"}}>DURGA PUJA, UNESCO FESTIVAL</h5>
                      <p className="card-text" style={{fontSize:"80%"}}>Durga Puja, major festival of Hinduism, traditionally held for 10 days in the month of Ashvina (September–October),
                              the seventh month of the Hindu calendar.......</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <Link to="/Blog4"><img src={image5} className="card-img-top" alt='' /></Link>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize:"120%"}}>Jaisalmer Desert Festival 2021 in Rajasthan</h5>
                      <p className="card-text" style={{fontSize:"80%"}}>Desert Festival of Jaisalmer is a colorful festival held in February every year.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <Link to="/Blog5"><img src={image6} className="card-img-top" alt='' /></Link>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontSize:"120%"}}>LOHORI FESTIVAL, HARYANA AND PUNJAB</h5>
                      <p className="card-text" style={{fontSize:"80%"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            <Outlet/>
            </>
          )
        }
        export default Post