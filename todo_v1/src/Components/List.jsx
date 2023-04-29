import React from "react";

function List(props){
    return(  
            <div>
                <ul>
                {props.Items.map((element)=>{
                    // console.log(element.item);
                    return <li onClick={()=>{props.onDelete(element._id)}} key={element._id} > {element.item}</li>
                })}
                </ul>
            </div>);
}

export default List;