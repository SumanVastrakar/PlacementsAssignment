import express from "express";
const router = express.Router();

import { signup, signin, postProduct, getProduct} from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/postproduct", postProduct);
router.post("/getproduct", getProduct);



export default router;