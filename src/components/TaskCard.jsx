import {useContext} from 'react'

import {TaskContext} from '../context/taskContext'

function TaskCard({task}) {

    const {deleteTask} = useContext(TaskContext)

    return <div className="col-md-3 col-sm-6 p-3 gap">
        <h1>{task.title}</h1>
        <p className='text-secondary'>{task.description}</p>
        <button onClick={() => { deleteTask(task.id) }} className="btn btn-danger bg-danger">
            Delete
        </button>
    </div> 
}

export default TaskCard