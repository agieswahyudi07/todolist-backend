const { Task } = require('../models');

exports.getAllTasks = async (req, res) => {
    const filter = req.query.completed ? req.query.completed : '';
    const where = { userId: req.user.id };
    try {
        if (filter.trim() != '') {
            where.completed = filter.trim()
        }
        const tasks = await Task.findAll({ where });
        res.json({
            success: true,
            message: 'Tasks fetch successful',
            data: tasks,
        });
    } catch (error) {
        res.status(500).json({ message: "something's wrong", error: error.message});
    }
};

exports.createTask = async (req, res) => {
    const { title, } = req.body;

    if(!title){
        return res.status(400).json({ 
            success: true , 
            message: 'Title required', 
        });
    }

    try {
        const task = await Task.create({ title: title, userId: req.user.id, completed: 0 });
        res.status(201).json({
            success: true,
            message: 'Tasks Created',
            data: task,
        });
    } catch (error) {
        res.status(500).json({ 
            success: false , 
            message: 'Creat task failed', 
            error: error.message 
        });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    if(!title){
        return res.status(400).json({ 
            success: true , 
            message: 'Title required', 
        });
    }

    const task = await Task.findOne({ where: { id, userId: req.user.id } });
    if (!task) return res.status(404).json({ 
            success: true , 
            message: 'Task not found.', 
        });
    
    try {
        task.title = title ?? task.title;
        task.completed = completed ?? task.completed;
        await task.save();
        res.status(201).json({
            success: true,
            message: 'Tasks Updated',
            data: task,
        });
    } catch (error) {        
        res.status(500).json({ 
            success: false , 
            message: 'Update task failed', 
            error: error.message 
        });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Task.destroy({ where: { id, userId: req.user.id } });
        if (!deleted) return res.status(404).json({ message: 'Task not found' });
        res.json({
            success: true,
            message: 'Tasks Deleted',
        });
    } catch (error) {
        res.status(500).json({ 
            success: false , 
            message: 'Delete task failed', 
            error: error.message 
        });
    }
};
