        import image18 from"../../image/image18.jpg"
        import image19 from"../../image/image19.jpg"
        import image21 from"../../image/image21.jpg"
        import image20 from "../../image/image20.jpg"
        import image22 from "../../image/image22.jpg"
        import imagehornbill from "../../image/imagehornbill.jpg"
        import "./Blog1.css"
        import Comment from "../../Comment/Comment"

       
       
        function Blog1(){
            return(
                <div className="container-sm" style={{backgroundColor:"antiquewhite"}}>
                     <h1 className="head">The Hornbill Festival Nagaland</h1>   
                <img
                src={image18} className="img-fluid" alt="" style={{  width: "130vh", marginTop: "5vh",  padding:" 0px 40px 0px 80px"}}/>
                   
                <div>
                <div className="topic"> INTRODUCTION</div>
                        <p className="para-b">
                        This is a very popular festival of Nagaland.
                        Often cited as “festival of all festivals”, 
                        The Hornbill Festival is a grand celebration that is brought to life each year in Nagaland, 
                        North East India.
                        The festival is gritting in its element and a powerful representation of the Naga culture through splendid traditional music,
                        dance and performances.
                            The performances are perhaps extremely eye catching and demand attention.
                            All diverse tribes in Nagaland offer their heartfelt contribution towards making the festival more vibrant and entertaining.
                            All people come together, united under one wing to make this celebration an extraordinary possibility.
                            People from all over the world come to visit this promising occasion either to merely witness or participate or sometimes, both. 
                            To visitors, the festival offers a clearer glimpse into understanding the Naga culture better. 
                            People are welcome to partake in various extravagant dance and musical performances as well as competitions. 
                            It a very beautiful display of the cultural practices of Nagaland.
                                The people of Nagaland are all the more kind with their helping hands and smiles. 
                                This charming festival has been compelling tourists and travelers who visit the festival over holidays.<br/>
                        </p>

                           

                            <div className="topic"> HISTORY OF THE FESTIVAL</div>
                            <div className="row">
                                <div className="col-5">
                                <img src={imagehornbill} className="img-fluid" style={{padding:" 0px 30px 10px" }} alt=""/>  
                                </div>
                                <div className="col-7">
                                      <p className="para-b">  The festival gets its name from the Indian Hornbill.
                                The Hornbill is a common bird among the folklores and tribes of Nagaland and can be commonly seen prancing around in the forests of Nagaland.
                                The different tribes in Nagaland address their culture with utter respect and thus find it purely essential to grace the festival with their cultural presence.
                                And so it is celebrated with such pride and gusto.
                                    The festival is being celebrated since 16 years now. 
                                    What started out as a mélange of cultural exhibit in the year 2000 is still getting stronger every year.
                                    The aim of this festival is to ensure the Naga culture is preserved and protected.
                                    The festival brings about unity and better relation among the various tribes in Nagaland.
                                    It has been because of the hard work of the tourism department of Nagaland that the festival has attained such immense success.<br/>
                                      </p>

                                </div>
                            </div>
                          <div className="topic"> DURATION OF THE FESTIVAL</div>
                           <p className="para-b">     The Hornbill festival is celebrated annually.
                                The festival opens in the first week of December each year.
                                The government of Nagaland organizes the cultural event. 
                                The celebrations stretches between the expanse from 1st December to 7th December. 
                                Kohima, the capital city of Nagaland is the initial location where the festival takes place.<br/>
                          </p>
                          <div className="img-g"><img src={image19} className="img-19" alt="" style={{width:"40%",height:"30%",padding:" 0px 30px 10px"}} /> </div> 
                          <div className="img-g"> <img src={image21} className="img-21" alt="" style={{width:"40%",height:"30%",padding:" 25px 20px 0px 23px"}} /></div> 
                               <div className="topic">HIGHLIGHTS/ IMPORTANT RITUALS OF THE FESTIVAL</div>
                               <p className="para-b"> There are religious and ceremonial parades.<br/>
                                Each tribe has their own ceremonial performance that is elegantly beautiful and delivered in an eccentric manner.<br/>
                                Energetic traditional folk dance and musical performances that ensue during the gradual course of events is a closely knit representation of the cultural heritages of Nagaland.<br/>
                                Various sports, crafts, dance, fashion shows, beauty competitions are held. Naga culture and ethnicity are performed and enjoyed during the festival to bring out the competitive spirit in people.<br/>
                                The festival is lush with various food fair, games, songs, musical concerts and entertainment to keep the lively spirits of the celebration going.<br/>
                                Traditional art work, wood crafts, handy crafts, sculptures, paintings, and wood carvings are displayed. Sales and exhibition of these art pieces are held. There are also herbal medicine stalls and display of flower shows.<br/>
                                There are various food stalls that serve different varieties of food, including the traditional Naga food which is deliciously indulging.<br/>
                                People indulge in traditional archery, Naga wrestling, indigenous games, other athletic sports and other activities.<br/>
                                The Hornbill International Rock Festival is a significant highlight of the Hornbill Festival. Various local and international rock bands perform at Indira Gandhi Stadium.<br/>
                                The celebrations and concerts are carried out throughout the night.

                               </p>
                        <div className="img-g"> <img src={image20} className="img-20" alt="" style={{width:"50%",height:"30%",float:"right",padding:"10px"}} /></div>
                        <div className="img-g"> <img src={image22} className="img-20" alt="" style={{width:"48%",height:"30%",padding:"10px"}} /></div>
                </div>
                    <Comment/>
                </div>
            )
        }
        export default Blog1