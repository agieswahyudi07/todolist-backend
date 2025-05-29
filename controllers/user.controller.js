const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.getUser = async (req, res) => {
    const { id } = req.body;

    // validaton 
    if(!id){
        return res.status(400).json({ 
            success: true , 
            message: 'ID required', 
        });
    }
    // validaton 

    try {
        const user = await User.findOne({ id, id });
        return res.status(201).json({ 
            success: true, 
            message: 'Succes to get user data', 
            data: user
        });
    } catch (error) {
        return res.status(400).json({ 
            success: false , 
            message: 'Failed to get user data', 
            error: error.message 
        });
    }
};
