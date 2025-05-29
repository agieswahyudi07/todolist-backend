const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name.trim())return res.status(400).json('Name required');
    if(!email.trim())return res.status(400).json('Email required');
    if(!password)return res.status(400).json('Password required');
    
    const checkEmail = await User.findOne({where:{email:email}});    
    if(checkEmail)return res.status(400).json('User already registered');

    try {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hash });
        res.status(201).json({ message: 'User Registered', data: { id: user.id, email: user.email, name: user.name } });
    } catch (error) {
        res.status(400).json({ message: 'Registration failed', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if(!email.trim())return res.status(400).json('Email required');
    if(!password)return res.status(400).json('Password required');
    
    try {
        const user = await User.findOne({ where: { email } });
        
        if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1d'
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};
