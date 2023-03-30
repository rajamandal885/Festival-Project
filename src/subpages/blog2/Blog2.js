import holi from "../../image/holi.jpg"
import image23 from "../../image/image23.jpg"
import image24 from "../../image/image24.jpg"
import image25 from "../../image/image25.jpg"
import image26 from "../../image/image26.jpg"
import image27 from "../../image/image27.jpg"

import "./Blog2.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Comment from "../../Comment/Comment"

function Blog2(){
    return(
        <div>
         <div className="container" style={{backgroundColor:"antiquewhite"}} >
            <h1 className="head">HOLI FESTIVAL OF COLOURS</h1>
                  
                  <img className="img-H" src={image23}   alt="" style={{marginTop:"30px"}} />


            <div className="topic"> INTRODUCTION</div>
               
               <p className="holi-para">
                    Every spring, people across India and around the world celebrate the Hindu festival Holi,
                    throwing colored water and powders on one another in joyous celebration. On this one day—the full-moon day of the Hindu month of Phalguna—societal rankings such as caste, gender, age, and status are eschewed in the spirit of making merry together,
                    and everyone is fair game to be doused with color.

                    Holi’s traditions vary throughout the country and have their roots in Indian mythology.
                    In many places the festival is associated with the legend of Hiranyakashipu, a demon king in ancient India.
                    Hiranyakashipu enlisted the help of his sister, Holika, to kill his son, Prahlada, a devoted worshipper of Vishnu.
                    In an attempt to burn Prahlada, Holika sat with him on a pyre while wearing a cloak that protected her from the fire.
                        But the cloak protected Prahlada instead, and Holika burned. Later that night Vishnu succeeded in killing Hiranyakashipu,
                        and the episode was heralded as a triumph of good over evil. In many places in India,
                        a large pyre is lit on the night before Holi to celebrate this occasion.

                    In other places, the story of Krishna and Radha is central. 
                    The story goes that Krishna, a Hindu deity who is considered a manifestation of Vishnu, fell in love with the milkmaid Radha, 
                    but he was embarrassed that his skin was dark blue and hers fair. 
                    In order to rectify this, he playfully colored her face during a game with her and the other milkmaids. 
                    This is thought to be an origin of the colored water and powder throwing. 
                    The general merrymaking is also seen as characteristic of Krishna, who is known for his pranks and play.
               </p>


            <div><img src={holi} className="img-fluid"  alt="" style={{float:" right",marginTop: "10%", width: "40%"}} /></div>

           <div className="topic-holi"> What is the Holi Spirit | Holi Festival India Historical Background </div>
 

           <p className="holi-para"> Although it is a Hindu festival, it is popular among non-Hindus.
            People gather the night before Holi and perform religious rituals and then pray for the destruction of their internal evil.
            The next morning people start the real carnival traditions and smear each other with colored powders; 
            they sometimes use water guns and water-filled balloons for more fun. Groups of people march the streets with drums and other instruments, 
            singing and dancing. People also gather with their families and friends to color each other and share Holi delicacies.
            The event lasts for a night and day, from the evening of the full moon (Purnima). Holika Dahan, the burning demon Holika, 
            is the first evening of the event. On this night, people gather,
            perform religious rituals on a bonfire and pray that the evil inside them is destroyed the way Holika was killed in the fire. 

           </p>
            <div className="topic-holi"> The Original Story behind the Holi of Colors </div>
           
           <p className="holi-para"> The festival of Colors is celebrated all over India since ancient times. 
            Originally, the festival was an agricultural festival, celebrating the arrival of spring.
            It represents throwing off the gloom of winter and enjoying the liveliness of spring. 
            The legend associated with the festival involves an evil king called Hiranyakashipu. 
            He forbade his son from worshipping Vishnu. However, Radhu proceeded offering prayers to the gods.
            Hiranyakashipu challenged Prahlad to sit on a pyre with his aunt Holika who was to be immune to fire.
            When the fire started, Holika was burnt to death whereas Prahlad survived without a scar. 
            Burning Holika is celebrated as Holi.
            The morning after also known as Rangwali Holi is where people smear each other with colors and enjoy delicious gujiyas together, sharing the love.
            Water guns and water-filled balloons are also a part of the celebrations, making every moment of the event memorable.
           </p>
           <div><img src={image24} className="img-fluid"  alt="" style={{ width: "50%"}} /></div>

            <div className="topic-holi">  The Legend of Holi</div>

            <p className="holi-para"> The Festival is based on the Hindu legend Holika, the female demon and the sister of the demon Hiranyakashayap.
                It is believed that Hiranyakashayap was the ruler of the universe and also superior to all gods.
                However, Hiranyakashayap'sHiranyakashayap's son Prahlad went against his mother by following Lord Vishnu.
                This action left his father with no choice but to collaborate with Holika to kill him. 
                Prahlad escaped his fate with the saving hand of Vishnu while Holka died in the flames. But later on, 
                Vishnu killed Prahlad and his mother and became King. The moral behind the story is that good always wins over evil.
                The name festival of colors came from Lord Krishna's childhood antics.
                Lord Krishna was a reincarnation of the Lord Vishnu, who enjoyed playing pranks on girls from the village by drenching them in water and smearing them with colors.

                There are other Hindu Traditions that are linked to this legend. For instance, Shaivism and Shaktism, 
                where goddess Parvati awaits to bring back Shiva into the world while seeking help from the Hindu god of love Kamadeva and Vasant Panchami. However, the god of love shoots arrows at Shiva.
                This causes yogi to open his third eye and burn the Kama to ashes.
                The results of yogi'syogi's actions not only upset Rati Kama's wife but Parvati as well.
                Rati asks for forgiveness from Shiva. Finally, Shiva decides to forgive and restore the god of love, and on this day, 
                Hindu celebrate it as Holi.
            </p>
            <div><img src={image25} className="img-25"  alt="" style={{ width: "28%"}} /></div>
            <div><img src={image26} className="img-26"  alt="" style={{ width: "30%"}} /></div>
            <div><img src={image27} className="img-27"  alt="" style={{ width: "29%"}} /></div>
            <Comment/>
         </div> 
        </div>
    )
}
export default Blog2