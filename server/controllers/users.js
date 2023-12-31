import mongoose from 'mongoose'
import users from '../models/auth.js'


export const getAllUsers=async(req,res)=>{
    try{
        const allUsers=await users.find();
        const allUsersDetails=[]
        allUsers.forEach(user=>{
            allUsersDetails.push({id:user._id,name:user.name,about:user.about,tags:user.tags,joinedOn:user.joinedOn})
        })
        res.status(200).json(allUsersDetails)
    }
    catch(error){
        res.status(404).json({message:"error.message"})
    }
}

export const updateProfile=async(req,res)=>{

    const {id:_id}=req.params;
    const {name,about,tags}=req.body;
    console.log(tags)
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question invalid...')
      }

    try {
        const updatedProfile=await users.findByIdAndUpdate(_id,{$set:{'name':name,'about':about,'tags':tags}},{new:true})
        console.log(updatedProfile.tags)
        res.status(200).json(updatedProfile)
    } catch (error) {
        console.log(error)
    }

}