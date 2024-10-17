import { useState } from 'react';

const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if(task.trim() && task.toLowerCase()){
            setTasks([{text: task, completed: false}, ...tasks]);
            setTask("");
        }
        console.log(tasks)
    };

    const toggleComplete = (index) =>{
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks)
        // console.log(newTasks)
    }

    const deleteTask = (index) =>{
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks)
    }

    return (
        <div className='container border-2 border-black m-auto rounded-xl'>
            <div className="wrapper w-[400px] bg-white m-auto py-4">
                <h2 className='heading-text mb-4'>Task Tracker</h2>
                {/* input and button */}
                <form onSubmit={addTask} className="input&button w-full relative inline-block overflow-hidden mb-4">
                    <input 
                        type="text" 
                        className='w-full border-2 rounded-[5px] px-2 py-1'
                        name="input_field" 
                        id="input_box" 
                        value={task}
                        onChange={(e) => {setTask(e.target.value)}}
                    />
                    <button onClick={addTask} className='bg-black absolute right-[10px] top-[5px] text-white px-2 rounded-[5px]'>&#x27A4;</button>
                </form>
                <ul className="task-list">
                    {tasks.map((task, index) => (<li key={index} className={`flex justify-between mb-2 p-2 border border-grey-300 rounded-lg text-center ${task.completed ? "under" : "" }`}>
                        <div className='flex items-center gap-2'>
                            <input 
                                type="checkbox"
                                checked={task.completed}
                                name="checked" 
                                id="checked" 
                                onChange={() => {toggleComplete(index)}}
                            />
                            <span className={`${task.completed ? "line-through text-gray-400" : ""}`}
                            >
                                {task.text}
                            </span>
                        </div>
                        <button onClick={() => {deleteTask(index)}}>
                        <i className="ri-delete-bin-fill"></i>
                        </button>
                    </li>))}
                    
                </ul>
            </div>
      </div>
    )
}
export default TaskTracker;