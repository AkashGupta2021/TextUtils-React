import React, { useState } from 'react'



export default function TextForm(props) {




    const handleUpclick = () => {
        console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpclick" )
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnchange = (event) => {
        console.log('On change')
        setText(event.target.value);
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleText = () => {
        let newText = ""
        setText(newText)

        props.showAlert("Text has been cleared", "danger")
    }
    const handleclipBoard = () => {


        navigator.clipboard.writeText(text);

        props.showAlert("Text Copied: ", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] +/);
        console.log(newText)
        setText(newText.join(" "))
        props.showAlert("Extra space removed", "warning")
    }
    const [text, setText] = useState('')
    return (

        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.header}  </h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#12466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnchange} id="myBox" rows="8"></textarea>

                </div>
                <button disabled={text.length === 0} className='btn btn-success mx-1 my-1' onClick={handleUpclick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoclick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1' onClick={handleText}>Clear text</button>
                <button disabled={text.length === 0} className='btn btn-info mx-1 my-1' onClick={handleclipBoard}>Copy to clipboard</button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} charcters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to the textbox above to preview it here"}</p>
            </div>
        </>


    )
}
