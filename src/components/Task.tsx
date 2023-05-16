import styles from './Task.module.css'
import { ClipboardText, Trash } from 'phosphor-react'

interface Task {
    id: string;
    isCompleted: boolean;
    content: string;
  }

interface TaskProps{
    content: Task[];
    onDeleteTask: (task: string) => void;
    checkedTask: (id: string) => void;
}

export function Task({content, onDeleteTask, checkedTask}: TaskProps){

    function handleDeleteTask(id:string){
        onDeleteTask(id)
    }

    function handleCheckTask(id:string) {
        checkedTask(id);
      }
    return(
        <>
            <section className={styles.taskContainer}>
                <main>
                    { content.length == 0 ?
                    <div className={styles.taskGridEmpty}>
                        <ClipboardText/>
                        <label>Você ainda não tem tarefas cadastradas</label>
                        <label>Crie tarefas e organize seus itens a fazer</label>
                    </div>

                    :
                    <div className={styles.taskGrid}>
                        { content.map(task => (
                            <div className={styles.taskItem} key={task.id}>
                                <label>
                                    <input
                                    type="checkbox"
                                    onClick={() => handleCheckTask(task.id)}
                                    />
                                </label>
                                    <div className={styles.taskItemContent}>
                                        <label>{task.content}</label>
                                        <button title='Deletar tarefa' onClick={() => handleDeleteTask(task.id)}>
                                            <Trash size={20}/>
                                        </button>
                                    </div>                                 
                            </div>
                        ))}
                    </div>
                }
                </main>
            </section>
        </>
    )
}