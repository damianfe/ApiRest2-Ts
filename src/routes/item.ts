import {Router, Response, Request} from "express";
import { deleteItem, getItem, getItems, postItem, updatetItem } from "../controllers/item";


const router = Router()

/** 
 * http://localhost:3002/items [GET]
*/
router.get("/", getItems);

router.get("/:id", getItem);

router.post("/",postItem);

router.put("/:id",updatetItem);

router.delete("/:id", deleteItem);



export {router};