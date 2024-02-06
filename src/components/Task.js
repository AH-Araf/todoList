import React, { useState } from 'react';

function Task({ task, toggleComplete, deleteTask, saveEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    const [editedPriority, setEditedPriority] = useState(task.priority);

    const handleSaveEdit = () => {
        saveEdit(task.id, editedText, editedPriority);
        setIsEditing(false);
    };

    return (
        <div style={{ backgroundColor: getPriorityColor(task.priority), textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {isEditing ? (
                <>
                    <input className='text-input-field' type="text" value={editedText} onChange={e => setEditedText(e.target.value)} /> <br />
                    <select className='select-btn' value={editedPriority} onChange={e => setEditedPriority(e.target.value)}>
                        <option className='option-1' value="low">Low</option>
                        <option className='option-2' value="medium">Medium</option>
                        <option className='option-3' value="high">High</option>
                    </select>
                    <button className='button-edit' onClick={handleSaveEdit}>Save</button>
                    <button className='button-delete' onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                    <>
                    <div className='task-sec'>
                            <span className='task-lists'>{task.text}</span> <br />
                            <button className='button-com' onClick={() => toggleComplete(task.id)}>Completed</button>
                            <button className='button-delete' onClick={() => deleteTask(task.id)}>Delete</button>
                            <button className='button-edit' onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                </>
            )}
        </div>
    );

    function getPriorityColor(priority) {
        switch (priority) {
            case 'high': return 'Tomato';
            case 'medium': return 'Orange';
            case 'low': return 'MediumSeaGreen';
            default: return 'transparent';
        }
    }
}

export default Task;
