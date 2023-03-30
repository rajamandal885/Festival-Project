

import "./Blog5.css"
import image39 from "../../image/image39.jpg"
import image40 from "../../image/image40.jpg"
import image41 from "../../image/image41.jpg"
import image42 from "../../image/image42.jpg"
import Comment from "../../Comment/Comment"


function Blog5(){
    return(
        <div>
         <div className="container" style={{backgroundColor:"antiquewhite"}} >
          <h1 className="head">LOHRI FESTIVAL</h1>
           
        <img className="img-l"
          src={image39}
          alt=""
          style={{marginTop:"30px"}}
        />
           <div className="topic-lohri"> INTRODUCTION</div>
           <p className="lohri-para"> Lohri is the Harvest festival of  Punjab as well as Haryana too which is famously known as Breadbasket state of  India.
            Thus, people residing in Punjab attach a great significance to Lohri. 
            In Punjab, wheat is the main winter crop, which is sown in October and harvested in March or April.
            In January, the fields come up with the promise of a golden harvest,
            and farmers celebrate Lohri during this rest period before the cutting and gathering of crops.
                For Punjabis, this is more than just a festival, it is also an example of a way of life.
            Lohri is celebrated to denote the last of the coldest days of winter. 
            it is the one of the greatest festival of Haryana and Punjab. 
            Lohri is celebrated on 13th of January and during the month of Paush or magh, a day before Makar sankranti.
            Lohri marks the end of winter on the last day of Paush, and beginning of Magha (around January 12 and 13),
            when the sun changes its course. 
            It is associated with the worship of the sun and fire and is observed by all communities with different names, as Lohri is an exclusively Punjabi festival. 
            The festival is considered as Lal-Loi in the sindhi community.
            Significance of the Lohri Festival
            In the state of Punjab, the breadbasket of India, Wheat is the major winter crop, which is planted in the month of October and reaped in the month of March or in April. In the month of January, the fields turn up with the swear of a golden harvest & farmers celebrate the Lohri festival during this period before the cutting & gathering of the crops.
            During this period of time, the earth which is farthest from the sun, initiates its journey towards the sun, consequently ending the coldest months of the year, Paush. It announces the beginning of Magh & the propitious period of Uttarayan. In accordance with the Bhagawad Gita, Lord Krishna gives evidence of himself in his full splendor this time. The Hindus annul their sins by taking bath in the Ganges River.
            The Bonfire Ritual
            In the dusk, massive bonfires are lit in harvested fields & in front yards of homes. 
            People get together around the flames, circle around the bonfire and toss puffed rice, munchies, 
            \and popcorn into the fire and hum popular folk songs. They pray to the fire god, to sanctify the land with prosperity and abundance. 
            The prasad consists of 5 major items: gajak, til, jaggery, popcorn, and peanuts.
          </p>
            <div><img src={image40} className="img-fluid"  alt="" style={{float:" right",marginTop: "10%", width: "40%"}} /></div>
             <div className="topic-lohri">     Significance of lohri</div>
           <p className="lohri-para"> As per experts, it is believed that after Lohri the sun’s trek northward come to an end on Lohri.
          After Makar Sankranti, the day after this festival, the nights get shorter and the days get longer. 
          In short, the festival is celebrated for the arrival of warmer weather, which is represented by the bonfire. From this day on, a lot of people,
          particularly farmers, start harvesting the crop. On this day,
          people also recite some antiquated mantras so they can feel the warmth of the sun during the chilly winter days.
          The festival holds special importance for a new bride and even a newborn in the family,
          and family members make sure to make their first Lohri a memorable one. They together pray for good health and prosperity.
          <div className="topic-lohri">What are the rituals of Lohri?</div>
          The celebration involves lighting a bonfire, doing parikrama of the bonfire and devoting puffed rice, jaggery, sesame seeds, popcorn,
          and coconut in the fire and pray the almighty for a prosperous New Year. People also sing folk songs and dance, 
          especially bhangra and gidda on this auspicious occasion.
          </p>
          <div><img src={image41} className="img-41"  alt="" style={{ width: "45%",float:"left",marginLeft:"40px",padding:"10px"}} /></div>
          <div><img src={image42} className="img-42"  alt="" style={{ width: "45%",padding:"10px"}} /></div>
        
          <Comment/>
        </div>
        </div>
    )
} 
export default Blog5