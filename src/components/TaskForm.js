import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ text, priority });
        setText('');
        setPriority('low');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='text-input-field' type="text" value={text} onChange={e => setText(e.target.value)} required />
            <select className='select-btn' value={priority} onChange={e => setPriority(e.target.value)}>
                <option className='option-1' value="low">Low</option>
                <option className='option-2' value="medium">Medium</option>
                <option className='option-3' value="high">High</option>
            </select>
            <button className='add-task-btn' type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;

