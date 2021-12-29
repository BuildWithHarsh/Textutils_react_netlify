import React , {useState} from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("handleupclick was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleDownClick=()=>{
        // console.log("handleupclick was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleOnChange=(event)=>{
        // console.log("handleonchange was invoked");
        setText(event.target.value);
    }

    const handleClearClick=()=>{
        // console.log("handleupclick was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","warning");
    }

    const countWord=(text)=>{
        var count=0;
        for(var i = 0 ; i<text.length ; i++){
            var currentChar = text[i];
            if(currentChar=== " " || currentChar===text[text.length-1]){
                count+=1;
            }
        }
        return count;
    }

    const[text,setText] = useState("");



    return (
        <>
        <div className="container mt-3 pt-2" style={{backgroundColor:props.mode==='dark'?'#17093f':'white' ,color:props.mode==='dark'?'#e2e2e2':'black'}}>
        <h1 className="display-4">{props.heading}</h1>
            <div className="my-4">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#02142f':'white',color:props.mode==='dark'?'#e2e2e2':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className="container" style={{backgroundColor:props.mode==='dark'?'#17093f':'white',color:props.mode==='dark'?'#e2e2e2':'black'}}>
            <div className="row text-center mt-3 pt-2" >
            <div className="col">
                    <div className="card" style={{backgroundColor:props.mode==='dark'?'#17093f':'white',color:props.mode==='dark'?'#e2e2e2':'black'}}>
                    <h5 className="card-title">Total Words</h5>
                        <p>{countWord(text)} words </p>
                    </div>                
                </div>
                <div className="col" >
                    <div className="card" style={{backgroundColor:props.mode==='dark'?'#17093f':'white',color:props.mode==='dark'?'#e2e2e2':'black'}}>
                    <h5  className="card-title">Total Characters</h5>
                        <p >{text.length} Characters</p>
                    </div>                
                </div>
                <div className="col">
                    <div className="card" style={{backgroundColor:props.mode==='dark'?'#17093f':'white',color:props.mode==='dark'?'#e2e2e2':'black'}}>
                    <h5 className="card-title">Time To Read</h5>
                        <p>{((0.08 * text.length)/60).toFixed(2)} minutes</p>
                    </div>                
                </div>

            </div>
            <h2>Your Text</h2>
            <p>{text.length>0?text:'Enter something in text area'}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
   heading :  PropTypes.string.isRequired
}