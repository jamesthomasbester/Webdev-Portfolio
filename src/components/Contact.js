import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_oxmqxha","template_7fqlpgs", form.current , "GI1aBFUH4FTaNtUaJ")
            .then(() => console.log("message sent"))

    }

    return (
        <div class="contact">
            <h1>Contact me</h1>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" name='user_name' placeholder="name" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="email" placeholder="email" name='user_email' required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea placeholder='message' class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                    <button type="submit" class="btn btn-primary" value="Send">Submit</button>
            </form>
        </div>
        )
}

export default Contact;