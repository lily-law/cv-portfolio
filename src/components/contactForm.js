/* 
    Set up for sending email through google sheets. Set up script using steps 1 to 6:
    https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
*/

import React, { useState, useRef } from "react"
import Email from "./email"
import Spinner from "./spinner"

const ContactForm = () => {
    const [email, setEmail] = useState("")
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [focusEmail, setFocusEmail] = useState(0)
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState()
    const [isBot, setIsBot] = useState()
    const formRef = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        if (!emailIsValid) {
            setFocusEmail(focusEmail + 1)
            return
        }
        setResponse("inProgress")
        if (isBot) {
            return 
        }
        const gSheetsScriptUrl = "https://script.google.com/macros/s/AKfycbwhat6VqS3pcO2o5mGNVZJzEr9rgNAK6E_DB8Gm/exec"
        const data = new FormData(formRef.current)
        const request = new XMLHttpRequest()
        request.open("POST", gSheetsScriptUrl, true)
        request.onreadystatechange = () => {
            if(request.readyState === XMLHttpRequest.DONE) {
                const status = request.status
                if (status === 0 || (status >= 200 && status < 400)) {
                    console.log(request.responseText)
                    setResponse(JSON.parse(request.responseText))
                } 
                else {
                    setResponse("Error")
                }
            }
        }
        request.send(data)
    }

    const Response = ({children}) => (<>
        <div className="response">
            <div>
                {children}
            </div>
            <button onClick={() => setResponse(null)}>&lt;</button>
        </div>
        <style jsx>{`
            .response {
                display: grid;
                align-items: center;
                justify-items: center;
                border: 1px solid var(--blue-l);
                background: var(--blue-d);
                padding: 16px;
                color: var(--blue-l);
            }
            button {
                justify-self: end;
                background: var(--yellow-d);
            }
        `}</style>
    </>)
    const Sent = () => (
        <Response>
            <p>Thank you!</p>
            <p>I'll get back to you ASAP</p>
        </Response>
    )
    const NotSent = () => (
        <Response>
            <p>Wooops... Sorry!</p> 
            <p>Somethings not working...</p>
            <p>Please try again or contact me using one of the links below</p>
        </Response>
    )
    return (<>
        <form ref={formRef}>
            <h1>Message me!</h1>
            {!response ? <>
                    <Email value={email} onChange={e => setEmail(e.target.value)} onTest={setEmailIsValid} focus={focusEmail} />
                    <textarea placeholder="Your message/challenge/invitation" value={message} onChange={e => setMessage(e.target.value)} name="message" rows="10" />
                    <input className="hide" type="text" value={isBot} onChange={e => setIsBot(e.target.value)} />
                    <button onClick={handleSubmit}><span className="send">Send</span></button>
                </> :
                response === "inProgress" ? 
                    <div className="sending">
                        <Spinner/>
                        <p>Sending</p>
                    </div> :
                    response?.result === "success" ? 
                        <Sent /> :
                        <NotSent />
            }
        </form>
        <style jsx>{`
            form {
                display: grid;
                grid-gap: 16px;
                height: 450px;
                width: 90%;
                max-width: 550px;
                align-items: center;
                justify-items: center;
            }
            h1 {
                color: var(--blue-l);
                background: linear-gradient(to right, var(--blue-l), var(--blue-d), var(--blue-l));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin: 0;
                text-align: center;
                font-size: 48px;
            }
            .hide {
                display: none;
            }
            .sending {
                width: 50%;
                position: relative;
            }
            p {
                font-size: 24px;
                color: var(--blue-l);
                background: linear-gradient(to right, var(--blue-l), var(--blue-d), var(--blue-l));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                position: absolute;
                top: calc(50% - 36px);
                left: calc(50% - 24px);
                z-index: 100;
            }
            textarea {
                width: 100%;
                background: var(--blue-l);
                padding: 16px;
                color: var(--blue-d);
                font-size: 16px;
                resize: none;
            }
            button {
                width: 100%;
                background: linear-gradient(to right, var(--blue-l), var(--blue-d), var(--blue-l));
                display: grid;
                align-items: center;
                justify-items: center;
            }
            .send {
                color: var(--yellow-d);
                background: linear-gradient(to right, var(--yellow-l), var(--yellow-d), var(--yellow-l));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                width: 180px;
                font-size: 48px;
                font-weight: 900;
                margin: 0;
            }
        `}</style>
    </>)
}

export default ContactForm