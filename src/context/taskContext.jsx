import {createContext, useState, useEffect} from 'react'

import Task from '../assets/task'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {
    const [tasks, setTask] = useState([])

    const createTask = ({title, description}) => {
        setTask([...tasks, {
            id: tasks.length,
            title,
            description
        }])
    }

    const deleteTask = (taskId) => {
        setTask(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTask(Task)
    }, [])

    return(
        <TaskContext.Provider value={ {tasks, createTask, deleteTask} }>
            { props.children }
        </TaskContext.Provider>
    )
}