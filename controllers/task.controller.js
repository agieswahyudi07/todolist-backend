const { Task } = require('../models');

exports.getAllTasks = async (req, res) => {
    const filter = req.query.status ? req.query.status : '';
    const where = { userId: req.user.id };
    try {
        if (filter.trim() != '') {
            where.status = filter.trim()
        }
        const tasks = await Task.findAll({ where });
        res.json({ data: tasks});
    } catch (error) {
        res.status(500).json({ message: "something's wrong, please try again later", error: error.message});
    }
};

exports.createTask = async (req, res) => {
    const { title } = req.body;

    try {
        const task = await Task.create({ title: title, userId: req.user.id });
        res.status(201).json({message: 'Task Created!', data: task});
    } catch (error) {
        res.status(500).json({ message: "something's wrong, please try again later", error: error.message});
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = await Task.findOne({ where: { id, userId: req.user.id } });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    
    try {
        task.title = title ?? task.title;
        task.completed = completed ?? task.completed;
        await task.save();
        res.status(201).json({message: 'Task Updated!', data: task});
    } catch (error) {        
        res.status(500).json({ message: "something's wrong, please try again later", error: error.message});
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Task.destroy({ where: { id, userId: req.user.id } });
        if (!deleted) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: "something's wrong, please try again later", error: error.message});
    }
};
