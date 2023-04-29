import express, { json } from "express";
import Item from '../model/defaultModel.js';

const getAllData = (req, res)=>{
     Item.find({})
     .then((result)=>{res.send(result)})
     .catch(err => {console.log(err)})
}


const insertItem = (req, res)=>{
    const newItem = new Item({
        item: req.body.name,
    })
    newItem.save()
    .then(()=>{res.status(200).json(newItem)})
    .catch((err)=>{console.log(err)})
}


const deleteItem =(req, res)=>{
    // console.log(JSON.stringify(req.params));
    Item.findOneAndDelete({_id: req.params.id })
    .then(()=>{res.sendStatus(200);})
    .catch(err => {console.log(err)})
    
}


export {getAllData, insertItem , deleteItem};