import React, { useState, useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import  { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'


const Result = () => {
    return(
        <p className="cc__contact-confirmation">Your message has been successfully sent. I will get back to you ASAP!</p>

    )
}


const Contact = () => {

    const [result, showResult] = useState(false);
    const [error, showError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const onSubmit = (data) => {
        console.log(data);
    }

    const sendEmail = (e) => {
        

        emailjs.
        sendForm(
            "portfolio",
            "template_mmubvwp",
            "#contact-form",
            "user_crXD0RcAI9mBeLjjK8KMA"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text)
            }
        );

        if(!e) {
            console.log("e is null");
        }
        reset();
        showResult(true);
        showError(true);
    };

    setTimeout(() => {
        showResult(false)
        showError(false)
    }, 5000);

  return (
    <div className="cc__contact-container">
        <h3 className="cc__contact-subtitle">Ready to start building something great?</h3>
        <h1 className="cc__contact-title">Let's Get In Touch</h1>

        <div className="cc__contact-form-wrapper">

       <div className="cc__contact-link-container-upper">
       <a href="mailto:cody.reeves@codingreeves.com"><FaEnvelope size={45} color="#5B29A6"/></a>
<a href="https://github.com/TechnoGecko"><FaGithub size={45} color="#5B29A6"/></a>
<a href="https://www.linkedin.com/in/codingreeves/"><FaLinkedin size={45} color="#5B29A6"/></a>
       </div>

            <form id="contact-form" className="cc__contact-form" onSubmit={handleSubmit(sendEmail)}>
               <label for="fullName">
                   Enter your full name:
               
                <input type="text"
                {...register("fullName", {
                    required: "Please enter your name",
                    minLength: {
                        value: 2,
                        message: "Must be at least 2 characters",
                    },
                })}
                placeholder="Full Name"
                id="fullName"
                />
                <p className="cc__contact-form-error">{ errors.fullName?.message }</p>
                </label>
                <label for="email">
                    Enter your email address:
                    <input
                    type="text"
                    {...register("email", {
                        required: "Reply Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        minLength: {
                            value: 8,
                            message: "E-mail must be at least 8 characters",
                        }, 
                    })}
                    placeholder="E-mail address"
                    id="email"
                    />
                </label>
                    <p className="cc__contact-form-error">{errors.email?.message }</p>
                    <label for="company">
                    Company Name (optional):
                    <input
                    type="text"
                    {...register("company", {
                        required: false,
                    
                    })}
                    placeholder="Company Name"
                    id="company"
                    />
                </label>
                <p className="cc__contact-form-error">{errors.company?.message }</p>
                    <label for="message">
                        Message Here:
                        <textarea
                        rows="7"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Please include a message"
                            },
                            maxLength: {
                                value: 1500,
                                message: "Your message can't exceed 1,500 characters -- please directly email me if you need more space!",
                            }
                        })}
                        placeholder="Message"
                        id="message"
                        />
                    </label>
                        <p className="cc__contact-form-error">{errors.message?.message}</p>
                    <button type="submit" className="cc__contact-form-submit-button">
                        Send
                    </button>
                    <div className="row">{result ? <Result /> : null}</div>
                </form>

                <h1 className="cc__contact-links-title">Links</h1>
            <div className="cc__contact-link-container link-container-1">
                <a href="mailto:cody.reeves@codingreeves.com"><FaEnvelope size={75} color="#5B29A6"/></a><a className="cc__contact-link email-link" href="mailto:cody.reeves@codingreeves.com"><p>cody.reeves@codingreeves.com</p></a>
            </div>    
            <div className="cc__contact-link-container link-container-2">    
                <a href="https://github.com/TechnoGecko"><FaGithub size={75} color="#5B29A6"/></a><a className="cc__contact-link github-link" href="https://github.com/TechnoGecko"><p>https://github.com/TechnoGecko</p></a>
                </div>
                <div className="cc__contact-link-container link-container-3"> 
                <a href="https://www.linkedin.com/in/codingreeves/"><FaLinkedin size={75} color="#5B29A6"/></a><a className="cc__contact-link linkedin-link" href="https://www.linkedin.com/in/codingreeves/"><p>https://www.linkedin.com/in/codingreeves/</p></a>
                </div>

            
            
        </div>
    </div>
  )
}

export default Contact