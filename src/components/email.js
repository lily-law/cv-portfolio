import React, { useRef, useState, useEffect } from 'react'

const Email = ({ value, onChange, onTest, focus }) => {
    const [message, setMessage] = useState("")
    const ref = useRef()
    const onInvalid = () => {
        setMessage(value ? "Not a valid email!" : "Email required!")
        ref.current.style.borderColor = "red"
    }
    const reset = () => {
        setMessage("")
        ref.current.style.borderColor = "initial"
    }
    const validate = () => {
        const pass = value && !!value.match(/^\S*@\S*\.\w+/)
        onTest(pass)
        return pass
    }
    const handleOnBlur = () => !validate() && onInvalid()
    useEffect(() => {
        focus && ref.current.focus()
    }, [focus])
    return (<>
        <label>
            <input onFocus={reset} onBlur={handleOnBlur} ref={ref} value={value} onChange={onChange} placeholder="Your Email Address" name="email" type="email" autoComplete="email" />
            <div>{message}</div>
        </label>
        <style jsx>{`
            label {
                display: grid;
                position: relative;
            }
            input {
                background: var(--blue-d);
                color: var(--blue-l);
                padding: 4px;
                padding-left: 16px;
                font-size: 18px;
            }
            div {
                position: absolute;
                right: 8px;
                top: 8px;
                color: var(--yellow-d);
            }
        `}</style>
    </>)
}

export default Email