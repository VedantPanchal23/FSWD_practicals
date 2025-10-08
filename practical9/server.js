const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const MONGO_URI = 'mongodb://localhost:27017/Practical9'; 

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully to local instance'))
  .catch(err => console.error('MongoDB connection error:', err));


const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

const Task = mongoose.model('Task', taskSchema);

app.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('tasks', { tasks: tasks });
  } catch (err) {
    res.status(500).send('Error fetching tasks');
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
    });
    await newTask.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error creating task');
  }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error updating task');
    }
});

app.post('/tasks/delete/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting task');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});