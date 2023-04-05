import React from "react";
// import styles from "./Contact.module.scss";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Company = () => {
  return (
    <div>
        <h1>About US</h1>
        <img width={800} src="https://www.highsnobiety.com/static-assets/thumbor/YKokav6OE0XAvQG8UAJL9FoZzCU=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/06/20145328/best-sportswear-brands-world-right-now-2-main.jpg" alt="sport" />
        <div className="text" >
          <h2><strong>Our missions</strong></h2>
    <p >When thinking about the best sports brands, an old soccer expression comes to mind: form is temporary, but class is permanent. Popularity ebbs and flows, but quality and legacy endure.
Availability, not exclusivity, is key to sportswear brands financially. Limited releases and exclusive collabs might wind up in plenty of social media feeds and add a new level of cool to a sports brand, but those sneakers usually don't end up in everyone's closets. Yet, while widespread availability and visibility do equal cold, hard cash for sportswear brands, exclusivity and collaborations remain a form of soft power every label wants to wield.
The hype that drives the high end of the market and sends collectors and media outlets such as ourselves into a frenzy is a means for sports brands to elevate their general releases and everyday wear and keep profits ticking upwards. And it's working. Market research firm Statista estimates the global sports apparel market generated revenue of $178 billion in 2021 and it's set to keep growing to $204 billion by 2023.</p>
    </div>
   </div>
  

  )
}


export default Company;
