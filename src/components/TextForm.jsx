import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Input Your Text");
    // setTextnp("Enter Your Text");

    const HandleOnChange = (event) => {
        // console.log("On change"); 
        setText(event.target.value)

    }

    const HandleUpChange = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const HandleLowerChange = () => {
        // console.log("Btn Click");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const HandleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const HandleClear = () => {
        let newText = "";
        setText(newText);
    }

    const HandleCopy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const HandleRemoveSpace = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    return (
        <div>
            <div className="container my-5">
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={HandleOnChange}></textarea>
                <button className='btn btn-outline-primary mt-3' disabled={text.length === 0} onClick={HandleUpChange}>Convert To Upper Care</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info mt-3' disabled={text.length === 0} onClick={HandleLowerChange}>Convert To Lower Care</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-success mt-3' disabled={text.length === 0} onClick={HandleSpeak}>Speak</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-danger mt-3' disabled={text.length === 0} onClick={HandleClear}>Clear</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-danger mt-3' disabled={text.length === 0} onClick={HandleCopy}>Copy</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-danger mt-3' disabled={text.length === 0} onClick={HandleRemoveSpace}>Remove Extra Text</button>&nbsp;&nbsp;&nbsp;
            </div>

            <div className='container'>
                <h2>Youe Text Summary</h2>
                <p>{text.split("").filter((element) => { return element.length !== 0 }).length} Words</p>
                <p>{text.length} Characters</p>
                <p>{0.008 * text.split("").filter((element) => { return element.length !== 0 }).length} Reading Time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>

    )
}
