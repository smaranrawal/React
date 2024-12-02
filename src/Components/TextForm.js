import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    // console.log("Uppercase was Clicked" )
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","sucesss");
  }
  const handleLoClick =()=>{
    // console.log("Uppercase was Clicked" )
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","sucesss");
  }
  const handleCleClick =()=>{
    // console.log("Uppercase was Clicked" )
    let newText='';
    setText(newText);
    props.showAlert("Text cleared!","sucesss");
  }

  const handleOnChange=(event)=>{
    // console.log("on chnage");
    setText(event.target.value);
  }

  const handleCopy =()=>{
    
   var text = document.getElementById("exampleFormControlTextarea1");
   text.select();
    navigator.clipboard.writeText(text.value);  
    props.showAlert("Copied to clipboard!","sucesss");
  }

  // const handleExtreSpace =()=>{
    
  //   let newText=text.split(/[ ]+/);
  //   setText.(newText.join(" "))
  //  }
 
  const [text , setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
 <h1>{props.head}</h1>

<div className="mb-3" style={{backgroundColor:`${props.mode==='light'}?'dark':'light'`}}>
  
  <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
</div>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled ={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCleClick}>Clear Text</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
{/* <button className="btn btn-primary mx-2" onClick={handleExtreSpace}>Remove extra space</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
    <h1>Preview</h1>
    <p>{text}</p>
    </div>
    </>

  )
}
