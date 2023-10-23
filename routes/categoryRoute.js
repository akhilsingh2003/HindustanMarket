import express from 'express';
const router=express.Router();
import {requireSignIn ,isAdmin} from '../middlewares/authmiddleware.js'
import {createCategoryController, updateCategoryController ,categoryController,singleCategoryController ,deleteCategoryController} from '../controllers/categoryController.js'





router.post("/create-category",requireSignIn,isAdmin ,createCategoryController)

router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)

router.get("/get-category",categoryController)
router.get("/single-category/:slug",singleCategoryController)
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
module.exports=router