import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function TextForm(props) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log(text + " copied ");
          })
          .catch((error) => {
            console.error('Error copying text: ', error);
          });
        props.showalert("Copied to clipboard", "success")
    }
        
    const handleUpClick = ()=>{
        // console.log('Upper Case was clicked:  ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Coverted to Upper Case ", "success")
    }
    const handleLwClick = ()=>{
        // console.log('Lower Case was clicked:  ' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Coverted to Lower Case", "success")
    }
    const handleClClick = ()=>{
        // console.log('Clear Text was clicked:  ' + text);
        alert("Are you sure?")
        let newText = "";
        setText(newText);
        props.showalert("Cleared Text", "success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text; 
        // Get all available voices
        let voices = window.speechSynthesis.getVoices();  
        // let femaleVoice = voices[0];
        // Set the selected voice
        msg.voice = voices[2];  //manually entering the female voice through voice array element
        // Speak the message
        window.speechSynthesis.speak(msg);
        props.showalert("Speaking", "success")
    }
    
    const handleInvclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        props.showalert("Text Inverted", "success")
    };
    const replaceAll = () => {
        var a = prompt("Replace this : ");
        var b = prompt("With this : ");
        let newText = text.replaceAll(a, b);
        setText(newText)    
        props.showalert("Text Replaced", "success") 
    }
    const handleUndoClick = ()=>{
        let  newText = text.substr(0,text.length-1);
         setText(newText)
        props.showalert("Text Restored", "success")
    }

    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }

    const lengthofword = (text)=>{
        let count = 0
        for (let i = 0; i < text.split(" ").length; i++) {
            if (text.split(" ")[i] === "") {
                count++
            }
        }
        return text.split(" ").length - count
    }

    const[text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode === 'light'? 'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'? 'white':'grey', color:props.mode === 'light'? 'black':'white'}} placeholder='Enter your text here' id="mytext" rows="8"></textarea>
                </div>
                <button className="btn btn-info mx-3" onClick={copyToClipboard}>Copy Text</button>
                <button className="btn btn-info mx-3" onClick={handleUpClick}>Convert to UpperCase</button> 

                {/* MX is used as margin to horizontal or margin on right and left side of a box */}
                {/* MY is used as margin to vertical or margin on top and bottom side of a box*/}

                <button className="btn btn-info mx-3" onClick={handleLwClick}>Convert to LowerCase</button>
                <button className="btn btn-info mx-3" onClick={handleInvclick}>Convert to Inverse Text</button>
                <button className='btn btn-info mx-3' onClick={replaceAll} > Replace Word</button>
                <button className="btn btn-info mx-3" onClick={handleUndoClick}>Undo</button>
                <button className="btn btn-success mx-3" type="submit" onClick={speak}>Speak</button>
                <button className="btn btn-danger mx-3" onClick={handleClClick}>Clear Text</button>



            </div>
            <div className="container my-3" style={{color:props.mode === 'light'? 'black':'white'}}>
                <h1>Your text summary</h1>
                <p>{lengthofword(text)} words, {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes needed to read</p>
                <h2>Preview Text: </h2>
                <p>{text.length>0?text:"Enter the text to preview it"}</p>
                <Link to="/about"></Link>
                {/* Link is used to navigate to About page without reloading the whole website */}

            </div>
        </>
    )
}
