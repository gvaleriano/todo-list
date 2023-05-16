import { useState } from "react";
import styles from './TaskInput.module.css'
import { PlusCircle } from 'phosphor-react'

interface TaskInputProps{
    //content: string;
    onCreateTask: (task: string) => void;
}

export function TaskInput({onCreateTask}: TaskInputProps){
    const [newTask, setNewTask] = useState('')
    
    function handleCreateTask(){
        onCreateTask(newTask)
        setNewTask('');
    }

    function handleNewTaskChange(event: any){
        console.log(event.target?.value)
        setNewTask(event.target?.value)
    }
    return(
        <form onSubmit={handleCreateTask}>
            <section className={styles.section}>
                <input type="text" className={styles.sectionInput} placeholder='Adicione uma nova tarefa' name="inputTask" onChange={handleNewTaskChange} value={newTask}></input>
                <button className={styles.sectionBtn}>Criar <PlusCircle size={20}/></button>
            </section>
        </form>
    )
}