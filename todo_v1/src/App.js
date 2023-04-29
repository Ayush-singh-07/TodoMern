import React,  { useState, useEffect }  from "react";  
import InputArea from "./Components/InputArea";
import Heading from "./Components/Heading"
import List from "./Components/List";
import axios from 'axios';

function App() {

  const [newItem , setNewItem] = useState("");
  const [Items , setItems] = useState([]);


  useEffect(()=>{
    axios.get('/api/')
    .then((result)=>{setItems(result.data)})
    .catch(err =>{console.log(err)})
  }, [])

  function handleChange(e){
      const {name, value} = e.target;
      setNewItem(value);
  }

  function addItem(e, newItem){
    if(newItem.trim() !== ''){
      axios.post('/api/addItem/', {name: newItem})  //sending data as JSON format
      .then((res)=>{
        setItems(prev=>{
          return [...prev, res.data]
        })
      })
      .catch(err =>{console.log(err)})
    }
    setNewItem("");
    e.preventDefault();
  }


  function onDelete(item_id){
    axios.delete("/api/deleteitem/"+item_id)
    .then(() => {
      setItems((prevItems)=>{
      return prevItems.filter((item)=>{
        return item._id !== item_id;
      });
    });
    })
    .catch(err =>{console.log(err)})
  }

  return (
    <div className="container">
      <Heading/>
      <InputArea  handleChange={handleChange} onAdd={addItem} newItem={newItem}/>
      <List onDelete={onDelete} Items={Items}/>
    </div>
  );
}

export default App;
