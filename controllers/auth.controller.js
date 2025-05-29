const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    // validaton 
    if(!name){
        return res.status(400).json({ 
            success: true , 
            message: 'Name required', 
        });
    }
    if(!email){
        return res.status(400).json({ 
            success: true , 
            message: 'Email required', 
        });
    }
    if(!password){
        return res.status(400).json({ 
            success: true , 
            message: 'Password required', 
            error: error.message 
        });
    }
    const checkEmail = await User.findOne({where:{email:email}});    
    if(checkEmail){
        return res.status(400).json({ 
            success: true , 
            message: 'this email already registered', 
        });
    }
    // validaton 

    try {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hash });
        return res.status(201).json({ 
            success: true, 
            message: 'User Registered', 
            data: { 
                id: user.id, 
                email: user.email, 
                name: user.name 
            } 
        });
    } catch (error) {
        return res.status(400).json({ 
            success: false , 
            message: 'Registration failed', 
            error: error.message 
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // validation 
    if(!email){
        return res.status(400).json({ 
            success: true , 
            message: 'Email required', 
        });
    }
    if(!password){
        return res.status(400).json({ 
            success: true , 
            message: 'Password required', 
        });
    }
    // validation 
    
    try {
        const user = await User.findOne({ where: { email } });
        
        if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Login failed',
            error: error.message,
        });
    }
};
