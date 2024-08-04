
import asyncHandler from "express-async-handler";

const authUser = asyncHandler (async(req,res) =>{
    res.status(200).json({message: "Auth User"})
});

const registerUser = async(req,res) =>{
    res.status(200).json({message: "Register User"})
}
const logOutUser = async(req,res) =>{
    res.status(200).json({message: "Logout User"})
}
const getUserProfile = async(req,res) =>{
    res.status(200).json({message: "Get User Profile"})
}
const updateUserProfile = async(req,res) =>{
    res.status(200).json({message: "Update User Profile"})
}
export  {
    authUser,
    registerUser,
    logOutUser,
    getUserProfile,
    updateUserProfile
}