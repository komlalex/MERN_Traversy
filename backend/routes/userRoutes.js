import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import { authUser, logoutUser, registerUser, getUserProfile, updateUserProfile } from "../controllers/userControllers.js";


const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
   
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);


export default router;
