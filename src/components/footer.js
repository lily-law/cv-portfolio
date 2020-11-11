import React, {Fragment} from 'react';
import ContactForm from './contactForm';
import Contact from './contact';

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="contactForm">
                    <ContactForm />
                </div>
                <div className="links">
                    <Contact />
                </div>
                <div className="contact-info-for-print-media">
                    <p>lilylaw.dev@gmail.com</p>
                    <p>github.com/lily-law</p>
                    <p>linkedin.com/in/lily-law-66602b1a3/</p>
                </div>
            </footer>
            <style jsx>{`
                footer {
                    min-height: 25vh;
                    background: linear-gradient(
                        to right,
                        var(--black),
                        var(--yellow-d),
                        var(--black)
                    );
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    grid-template-rows: auto 1fr;
                    padding-bottom: 150px;
                    grid-gap: 32px;
                }
                div {
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }
                .contactForm {
                    margin-top: 80px;
                    width: 100%;
                }
                .links {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around;
                    width: 80%;
                    max-width: 480px;
                }
                .contact-info-for-print-media {
                    display: none;
                }
                @media print {
                    .contactForm,
                    .links {
                        display: none;
                    }
                    .contact-info-for-print-media {
                        display: block;
                        text-align: center;
                        font-size: 32px;
                    }
                }
            `}</style>
        </Fragment>
    );
};

export default Footer;
