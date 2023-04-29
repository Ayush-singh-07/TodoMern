import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    item: {
        type: String,
        // required: true,
    },
})

const Item = new mongoose.model('item' , todoSchema);

export default Item;