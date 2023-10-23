import express from 'express'
const router =express.Router();
import {requireSignIn, isAdmin} from '../middlewares/authmiddleware.js'
import {registerController, loginController, testController
    ,forgotPasswordController,updateProfileController
    ,getOrdersController,getAllOrdersController,orderStatusController} from '../controllers/authController.js'

router.post("/register",registerController);
router.post('/login', loginController);
router.post('/forgot-password',forgotPasswordController)
router.get('/test',requireSignIn,isAdmin,testController);
router.get('/user-auth',requireSignIn,(req, res)=>{
    res.status(200).send({ok:true});
})
router.get('/admin-auth',requireSignIn,isAdmin,(req, res)=>{
    res.status(200).send({ok:true});
})

router.put("/profile" , requireSignIn,updateProfileController);
router.get("/orders" ,requireSignIn,getOrdersController )

router.get("/all-orders",requireSignIn,isAdmin, getAllOrdersController)
// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
  
module.exports=router;
