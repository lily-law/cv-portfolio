/* 
    Set up for sending email through google sheets. Set up script using steps 1 to 6:
    https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
*/

import React, { useState, useRef } from "react"
import Email from "./email"

const ContactForm = () => {
    const [email, setEmail] = useState("")
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [focusEmail, setFocusEmail] = useState(0)
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
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
            <button onClick={() => setResponse(null)}>&lt;</button>
            <div>
                {children}
            </div>
        </div>
        <style jsx>{`
            .response {
                display: grid;
                place-items: center center;
            }
            button {
                justify-self: end;
            }
        `}</style>
    </>)
    const Sent = () => (
        <Response>
            <p>Thank you {name}!</p>
            <p>I'll get back to you ASAP</p>
        </Response>
    )
    const NotSent = () => (
        <Response>
            <p>Sorry somethings not working :S</p>
            <p>Please email me directly</p>
        </Response>
    )
    return (<>
        <form ref={formRef}>
            <h1>Message me!</h1>
            {!response ? <>
                    <Email value={email} onChange={e => setEmail(e.target.value)} onTest={setEmailIsValid} focus={focusEmail} />
                    <label>
                        <textarea placeholder="Your message/challenge/invitation" value={message} onChange={e => setMessage(e.target.value)} name="message" rows="10" />
                    </label>
                    <input className="hide" type="text" value={isBot} onChange={e => setIsBot(e.target.value)} />
                    <button onClick={handleSubmit}><span className="send">Send</span></button>
                </> :
                response === "inProgress" ? 
                    <div>sending...</div> :
                    response.result === "success" ? 
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
            label { 
                display: grid;
            }
            .hide {
                display: none;
            }
            textarea {
                background: var(--blue-l);
                padding: 16px;
                color: var(--blue-d);
                font-size: 16px;
                resize: none;
            }
            button {
                background: linear-gradient(to right, var(--blue-l), var(--blue-d), var(--blue-l));
                display: grid;
                place-items: center center;
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



// https://script.google.com/macros/s/AKfycbwhat6VqS3pcO2o5mGNVZJzEr9rgNAK6E_DB8Gm/exec