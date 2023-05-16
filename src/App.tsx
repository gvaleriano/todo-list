import { Header } from "./components/Header"
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";
import styles from "./App.module.css";
import './global.css';
import { useState } from "react";

interface TaskType{
  id: string;
  isCompleted: boolean,
  content: string;
}
function App() {

  const [tasks, setTasks] = useState<TaskType[]>([])
  
  function handleCreateNewTask(taskToInclude: string){
      event?.preventDefault();
      const newTask = {id: Date.now().toString() ,content: taskToInclude, isCompleted: false}
      //console.log(event.target.inputTask.value)
      setTasks((state) => [...state, newTask]);
  }
  
  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(taskList =>{
      return taskList.id !== taskToDelete;
    })
    setTasks(tasksWithoutDeletedOne)
  }


  function checkedTask(id: string) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          id: task.id,
          isCompleted: !task.isCompleted,
          content: task.content
        }
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
      if(task.isCompleted) {
        return acc + 1
      }
      return acc;
    }, 0);

  return (
    <>
      <Header/>
      <TaskInput onCreateTask={handleCreateNewTask}/>
      <header className={styles.taskHeader}>
        <div>
          <label>Tarefas criadas</label>
          <i>{createdTasks}</i>
        </div>
        <div>
          <label>Concluídas</label>
          <i>{tasksCompleted}</i> de <i>{tasks.length}</i>
        </div>
      </header>
        <Task  content={tasks} onDeleteTask={deleteTask} checkedTask={checkedTask}/>
    </>
  )
}

export default App
