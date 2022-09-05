import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
const getItem = (req: Request,res:Response) =>{
    try {
        
    } catch (e) {
       handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = (req: Request,res:Response) =>{
    try {
        
    } catch (e) {
       handleHttp(res, 'ERROR_GET_ITEMS')
    }

}

const updatetItem = (req: Request,res:Response) =>{
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM")
    }

}

const postItem = async ({body}: Request,res:Response) =>{
    try {
        const responseItem = await (body);
    res.send(responseItem);
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM");
    }

}
const deleteItem = (req: Request,res:Response) =>{
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }

}

export{getItem,getItems,updatetItem,postItem,deleteItem};