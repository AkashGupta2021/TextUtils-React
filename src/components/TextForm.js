import React, {useState} from 'react'



export default function TextForm(props) {
            
    const handleUpclick=()=>{
        console.log("Uppercase was clicked " + text)
        let newText= text.toUpperCase();
       // setText("You have clicked on handleUpclick" )
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnchange=(event)=>{
        console.log('On change')
        setText(event.target.value);
    }
    const handleLoclick=()=>{
        let newText= text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to LowerCase", "success");
    }
    const handleText=()=>{
        let newText=" "
        setText(newText)
        props.showAlert("Text has been cleared", "danger")
    }
    const handleclipBoard=()=>{
       console.log("I am copy")
       
        navigator.clipboard.writeText(text);
        // alert("Copied: " + text)
        props.showAlert("Text Copied: " +text, "success");
       }
const handleExtraSpaces=()=>{
    let newText= text.split(/[ ] +/);
    console.log(newText)
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "warning")
} 
    const [text, setText]= useState('')
    return (

        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' :'#042743'}}>
        <h1>{props.header}  </h1>
            <div className="mb-3">

                <textarea className="form-control" value = {text} style={{backgroundColor: props.mode === 'dark' ? 'grey' :'white', color: props.mode === 'dark' ? 'white' :'#042743'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>

            </div>
        <button className='btn btn-success mx-0' onClick={handleUpclick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoclick}>Convert to Lowercase</button>
        <button className='btn btn-danger mx-2' onClick={handleText}>Clear text</button>
        <button className='btn btn-info mx-2' onClick={handleclipBoard}>Copy to clipboard</button>
        <button className='btn btn-danger mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
        </div>
            
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' :'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length-1} words, {text.length} charcters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length >0 ? text : "Enter something to the textbox above to preview it here"}</p>
        </div>
        </>


    )
}
