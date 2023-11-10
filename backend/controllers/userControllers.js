import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// @desc Auth user/set token
// @route POST api/users/auth 
// @access public

const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Login User"})
})

// @desc Register new user
// @route POST api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    if (!name || !password || !email) {
        res.status(400);
        throw new Error("Fill all required fields")
    }
    
    const userExist = await User.findOne({email:email});

    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    
    const user = await User.create({
        name, 
        email, 
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error("Invalid User Data")
    }
    
})

// @desc Logout user
// @route POST api/users/logout  
// @access public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Logout User"})
})

// @desc Get user profile 
// @route GET api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get user profile"})
})

// @desc Update user profile
// @route PUT api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Update user"})
})

// @desc Delete user
// @route DELETE api/users
// @access private
const deleteUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Delete User"})
})


export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile}