import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("Enter Text Here");
    const handleUpCase = () => {
        console.log(text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case !", "Success");
    }
    const handleLowCase = () => {
        console.log(text);
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case !", "Success");
    }
    const handleCopyText =() =>{
        let textbox = document.getElementById("my-text");
        navigator.clipboard.writeText(textbox.value);
        props.showAlert("Copied to clipboard !", "Success");
    }
    const handleInvertCase = () => {
        let newText = "";
        for (let index = 0; index < text.length; index++) {
            const char = text[index];
            if (char.toUpperCase()===char){
                newText += char.toLocaleLowerCase();
            }else{
                newText += char.toUpperCase();
            }
        }
        setText(newText);
        props.showAlert("Cases Inverted !", "Success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const countWord = (text)=> {
        let words = text.split(" ");
        let counter = 0;
        for (let i = 0; i<words.length; i++){
            if (words[i] != ""){
                counter++;
            }
        }
        return counter;
    }
    return (
        <>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':"#091e99"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="my-text" rows="8" style={{backgroundColor : props.mode==='dark'?'gray':"white", color:props.mode==='dark'?'white':"#091e99"}} placeholder='Text' value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowCase}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleInvertCase}>Invert Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>

                <h2 className='my-4'>Your Text Summary</h2>
                <p>Text contains {countWord(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
