import React, { useState } from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {

    const [name, setName ] = useState("sushi")
    const [email, setEmail ] = useState("sushi")
    const [text, setText ] = useState("sushi")
    const onSubmit =(event) => {
        event.preventDefault();
       // Accessing form values via `event.target`

    const formElements = event.target.elements;
    setName(formElements.name.value);
    setEmail(formElements.email.value);
    setText(formElements.text.value);
    
    console.log('name:', name);
    console.log('email:', email);
    console.log('text:', text);
    };



return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button
            text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />

            <Button
            
            text="VIA CALL" icon={<MdLocalPhone fontSize="24px"/>} />
            </div>
            
                <Button
                isOutline={true} text="VIA EMAIL FORM" icon={<IoIosMail fontSize="24px"/>} /> 
                
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                    <label htmlFor='name'> Name </label>
                    <input type='text' name='name'/>
                    </div>

                    <div className={styles.form_control}>
                    <label htmlFor='email'> Email </label>
                    <input type='email' name='email'/>
                    </div>

                    <div className={styles.form_control}>
                    <label htmlFor='text'> Text </label>
                    <textarea style={{borderRadius: '10px'}} name='text' rows='6'/>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'end', borderRadius: '10px'}}>
                        <Button text="SUBMIT"/>
                    </div>
                    <div>{name + " " + email + " " + text}</div>
                </form>
        </div>
        <div className={styles.contact_image}>
            <img src='./images/contact-us247.jpg' alt='service-image'/>
        </div>
    </section>
);
}

export default ContactForm;
