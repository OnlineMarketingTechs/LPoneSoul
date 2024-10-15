'use client'

import { useState } from 'react'

export default function ContactFormFaq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="contact-form-faq-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="contact-form-eight">
                                <div className="title">
                                    <h2>Send Your Message to Us</h2>
                                    <p>Please feel free to get in touch using the form below.<br /> We'd love to hear for you.
                                    </p>
                                </div>
                                <form method="post" action="sendemail.php" className="contact-form-h8">
                                    <div className="row clearfix">
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <textarea name="form_message" placeholder="Message goes here" />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="theme-btn btn-style-eight" type="submit" name="submit-form">
                                                <span className="btn-title">Send request</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-content-eight">
                                <div className="sec-title style-eight">
                                    <h4>Get Answers</h4>
                                    <h2>Do You have Questions about<br /> Seeing a Psychologist?</h2>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
            </section>
        </>
    )
}
