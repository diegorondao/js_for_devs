import React, { useState } from 'react';
import styles from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import TaskForm from './components/Tasks/TaskForm';
import TaskList from './components/Tasks/TaskList';
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const handlerHideOrShowModal = (display: boolean): void => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task:ITask): void => {
    handlerHideOrShowModal(true)
    setTaskToUpdate(task)
  }
  const updateTask = (task: ITask) => {
    const updateTaskItems = taskList.map((item) => {
      return item.id === task.id ? task : item
    })
    setTaskList(updateTaskItems)
    handlerHideOrShowModal(false)
  }

  return (
   <div>
     <Modal 
      children={
        <TaskForm 
          btnText='Editar Tarefa' 
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />}/>
     <Header/>
     <main className={styles.main}>
        <div>
          <h2>o que voce vai fazer ?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}  />
        </div> 
        <div>
          <h2>Suas tarefas: </h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask} 
            handleEdit={editTask}/>
        </div>
     </main>
     <Footer/>
   </div>
  )
}

export default App;
