import React, { Fragment } from "react"
import ContactForm from "./contactForm"
import Contact from "./contact"

const Footer = () => {
    return (<Fragment>
        <footer>
            <div className="contactForm">
                <ContactForm />
            </div>
            <div className="links">
                <Contact />
            </div>
            <div className="contact-info-for-print-media">
                lilylaw.dev@gmail.com
            </div>
        </footer>
        <style jsx>{`
            footer {
                min-height: 25vh;
                background: linear-gradient(to right, var(--black), var(--yellow-d), var(--black));
                display: grid;
                place-items: center center;
                grid-template-rows: auto 1fr;
                padding-bottom: 150px;
                grid-gap: 32px;
            }
            div {
                display: grid;
                place-items: center center;
            }
            .contactForm {
                margin-top: 80px;
                width: 100%;
            }
            .links {
                display: grid;
                place-items: center center;
                grid-template-columns: repeat(4, 1fr);
                width: 80%;
                max-width: 480px;
            }
            .contact-info-for-print-media {
                display: none;
            }
            @media print {
                .contactForm, .links {
                    display: none;
                }
                .contact-info-for-print-media {
                    display: block;
                    text-align: center;
                    font-size: 32px;
                }
            }
        `}</style>
    </Fragment>)
}

export default Footer