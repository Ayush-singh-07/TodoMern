import React from "react";

function InputArea(props){

    return <div>
                <form className="form">
                    <input autoComplete="off" onChange={props.handleChange} type="text" name="text" value={props.newItem}/>
                    <button onClick={(e)=>{
                        props.onAdd(e,props.newItem)
                    }}> <span>Add</span></button>
                </form>
            </div>;
}


export default InputArea;