
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup =async (req, res) =>{
    const { username, email, password } = req.body;

    if(!username || !email || !password || username==='' || email==='' || password===''){
        return res.status(400).json({ message: "All fields are required "});
    }
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });

    try{
        await newUser.save();
        res.json('signup succsesful');
    }catch (error){
        if (error.code === 11000) {
            // Duplicate key error (e.g., email already exists)
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: error.message });
        }
       
    }




};