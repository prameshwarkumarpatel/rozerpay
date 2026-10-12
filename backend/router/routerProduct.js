import express from 'express';
import {controllerproduct,getKey} from '../controller/controllerproduct.js';
const router=express.Router();
router.post("/",controllerproduct);
router.get("/gKey",getKey);
export default router;