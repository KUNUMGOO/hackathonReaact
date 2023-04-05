import React from "react";
// import styles from "./Contact.module.scss";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  return (
    <Box className="wrapper">
    <Box className="InfoContact">
      <h2 className="title">Связаться с нами </h2>

      <p className="content">
        Не следует, однако, забывать, что дальнейшее развитие различных форм
        деятельности позволяет оценить значение направлений прогрессивного
        развития. Не следует, однако,
        <br /> забывать, что дальнейшее развитие различных форм деятельности.
      </p>
    </Box>
    <Box className="ourContacts">
      <Box className="ContactUs_left">
        <h4 className="ContactUs_right_h4">Наши контакты</h4>
        <Box className="contactInfo1">
          <img
            className="contactImages"
            src="https://i.ibb.co/7zwkHFQ/telephone-3.png"
            alt="telephone-3"
            border="0"
          />
          <p className="ContactUs_left_p">+(996) 772 74 91 69</p>
        </Box>
        <Box className="contactInfo1">
          <img
            className="contactImages"
            src="https://i.ibb.co/j3qpLbM/envelope-1-1.png"
            alt="envelope-1-1"
            border="0"
          />

          <p className="ContactUs_left_p">online.shop@gmail.com</p>
        </Box>
        <Box className="contactInfo1">
          <img
            className="contactImages"
            src="https://i.ibb.co/CmR4yh6/location-2-1.png"
            alt="location-2-1"
            border="0"
          />
          <p className="ContactUs_left_p">49035, г.Бишкек, ул.Кызгалдак, 11</p>
        </Box>
        <Box className="contactInfo1">
          <img
            className="contactImages"
            src="https://i.ibb.co/xjjkR3c/clock-1-1.png"
            alt="clock-1-1"
            border="0"
          />
          <p className="ContactUs_left_p">
            Офис работает: пн-пт (8:30 - 16:30)
          </p>
        </Box>
        <Box className="ContactUs_right_sot">
          <h4></h4>
        </Box>
        <a href="#">
          <InstagramIcon id="InstagramIcon" />
        </a>
        <a href="#">
          <FacebookIcon id="FacebookIcon" />
        </a>
      </Box>
      <hr />
      <Box className="ContactUs_right">
        <h4 className="ContactUs_right_h4 ">Обратная связь</h4>

        <TextField 
          className="ContactUs_right_inp"
          id="standard-basic"
          label="Ваше имя"
          variant="standard"
        />
        <TextField
          className="ContactUs_right_inp"
          id="standard-basic"
          label="E-mail"
          variant="standard"
        />
        <TextField
          className="ContactUs_right_inp"
          id="standard-basic"
          label="Сообщение"
          variant="standard"
        />
        <Button
          id="ContactUs_right_button"
          variant="contained"
          disableElevation
        >
          Связаться
        </Button>
        <div className="footer_reight">
        <iframe
          className="footer_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1304438103593!2d4.367699815745808!3d50.8472686795321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c482a7578471%3A0xa7713c3e13f82b7d!2sSouth%20Asia%20Democratic%20Forum!5e0!3m2!1sru!2skg!4v1679565990272!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </Box>
    </Box>
  </Box>
  
);
};
  


export default Contact;
