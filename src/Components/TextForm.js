import React, { useState } from "react";

export default function TextForm(props) {
    const[text,setText]=useState(' ')

    const onChangeHandler=(event)=>{
        setText(event.target.value)

    }
    const convertToUpperCase=()=>
    {
        const newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success")
    }

    const convertToLowCase=()=>
    {
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success")
    }
    const clearTextBox=()=>
    {
        setText('');
        props.showAlert("Text Cleared","success")
    }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <h1>ENTER TEXT</h1>
          <textarea style={props.mode==='dark'?{backgroundColor:"#17232f", borderColor:"white",color:"white"}:{backgroundColor:"white", borderColor:"#17232f",color:"#17232f"}} value={text} className="form-control" id="TextArea" rows="3" onChange={onChangeHandler}></textarea>
        </div>
      </form>
      <button className="btn btn-primary  my-3 mx-1" onClick={convertToUpperCase} id="upper">Upper Case</button>
      <button className="btn btn-primary  my-3 mx-1" onClick={convertToLowCase} id="lower">Lower Case</button>
      <button className="btn btn-primary  my-3 mx-1" onClick={clearTextBox} id="clear">Clear</button>
      <p>{text}</p>
    </div>
  );
}
