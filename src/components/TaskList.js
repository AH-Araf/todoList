import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import useLocalStorage from '../hooks/useLocalStorage';
import '../DesignCSS/Design.css'


function TaskList() {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [filter, setFilter] = useState('all');

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), ...task, isCompleted: false }]);
    };

    const saveEdit = (id, newText, newPriority) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, priority: newPriority } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    };

    const getFilteredTasks = () => {
        return tasks.filter(task => {
            if (filter === 'all') return true;
            return task.priority === filter;
        });
    };

    return (
        <div>
            <TaskForm addTask={addTask} />
            <h3><span className='total-task'>Total Tasks = {tasks.length}</span> <span className='completed-task'>Completed = {tasks.filter(task => task.isCompleted).length}</span></h3>
            <div>
                <button className='btn-all' onClick={() => setFilter('all')}>All</button>
                <button className='btn-low' onClick={() => setFilter('low')}>Low</button>
                <button className='btn-medium' onClick={() => setFilter('medium')}>Medium</button>
                <button className='btn-high' onClick={() => setFilter('high')}>High</button>
            </div>
            {getFilteredTasks().map(task => (
                <Task key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} saveEdit={saveEdit} />
            ))}
        </div>
    );
}

export default TaskList;

