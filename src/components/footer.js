import React, { Fragment } from 'react'
import Icon from "./icon"
import Contact from "./contact"

const Footer = () => {
    return (<Fragment>
        <footer>
            <div>
                <Contact />
            </div>
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
            }
        `}</style>
    </Fragment>)
}

export default Footer