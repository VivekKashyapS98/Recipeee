import React from 'react';
import './main.css';

function Contact(){
    return (
        <div className="contact-jt jumbotron">
            <span className="display-4"><b>Contact</b></span><br/>
            <h3 className="contact-info lead"><b>Contact me through...</b></h3>
            <a className="icon-ln icons" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/vivek-s-886bb5144/"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a className="icons" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/vivek.kashyap.5492216"><ion-icon name="logo-facebook"></ion-icon></a>
            <a className="icons" rel="noopener noreferrer" target="_blank" href="https://github.com/VivekKashyapS98"><ion-icon name="logo-github"></ion-icon></a>
            <a className="icons" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/vivek.kashyap.s/"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
    );
}


export default Contact;