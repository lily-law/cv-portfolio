import React, { Fragment } from 'react'
import Icon from "./icon"
import Contact from "./contact"

const Footer = () => {
    return (<Fragment>
        <footer>
            <div>
                <Contact />
            </div>
            <a href="https://github.com/lily-law/cv-portfolio" target="__blank" rel="noreferrer">
                <p>Designed and developed by me for you</p>
                <Icon name="repo" className="big" />
                <p>Thank you for visiting</p>
            </a> 
        </footer>
        <style jsx>{`
            footer {
                min-height: 25vh;
                background: linear-gradient(var(--black), var(--yellow-l));
                display: grid;
                place-items: start center;
            }
            div {
                padding: 5vw;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                align-items: center;
            }
            a{
                padding: 5vw;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                align-items: center;
                align-self: end;
                width: 80%;
            }
            p {
                max-width: 200px;
                color: var(--blue-d);
                text-align: left;
            }
            p:first-child { 
                text-align: right;
            }
        `}</style>
    </Fragment>)
}

export default Footer