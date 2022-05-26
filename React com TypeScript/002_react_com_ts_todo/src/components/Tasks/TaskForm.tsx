import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ITask } from '../../interfaces/Task';
import styles from './TaskForm.module.css';

interface Props{
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(task: ITask | null ): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {
  const [id , setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty]= useState<number>(0);


  useEffect(() => {
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const InsertOrUpdateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(handleUpdate) {
      const taskItem: ITask = {id : id, title: title, difficulty: difficulty}
      handleUpdate(taskItem)
    } else {
      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = {id, title, difficulty}
  
      setTaskList!([...taskList, newTask])
  
      //clear
      setTitle('')
      setDifficulty(0)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }

    if (e.target.name === 'difficulty') {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={InsertOrUpdateTask} className={styles.form}>
       <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input 
          type="text" 
          name="title" 
          placeholder='Título da tarefa'
          value={title}
          onChange={handleChange}/>
      </div>
       <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input 
          type="text" 
          name="difficulty" 
          placeholder='Dificuldade da tarefa' 
          value={difficulty}
          onChange={handleChange} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm