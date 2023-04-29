import  express from "express";
import { getAllData , insertItem, deleteItem} from "../controller/defaultController.js";
const router = express.Router();

router.get('/',getAllData );
router.post('/additem',insertItem);
router.delete('/deleteitem/:id', deleteItem)

export default router;