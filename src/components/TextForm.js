import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event)=>{
        
         setText(event.target.value);
    }
    const handleUpChange = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Uppercase","success");
    }
    const handleLoChange = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lowercase","success");
    }
    

  
    
    return (
      
        <>
        <div className="container"  style={{color: props.mode === 'dark'?'white':'black'}} >
          
            <div className="mb-3">
             <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Here</label>
             <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#3f2474':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button className={`btn btn-${props.btnmode}`} onClick={handleUpChange}>Convert to Uppercase</button> &nbsp;
            <button className={`btn btn-${props.btnmode}`}  onClick={handleLoChange}>Convert to Lowercase</button>
            
        </div>
        <div className="container my-4"  style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Characters</p>

        </div>
        </>

    )
}

