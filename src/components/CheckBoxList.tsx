/*{checkboxes.map((item, index) => (
    <div key={index}>
      <label>
        <input
          type="checkbox"
          checked={checkedState[index]}
          onChange={() => handleCheckboxChange(index)}
        />
        {item}
      </label>
    </div>
    <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(0)}/>
  ))}*/
interface Task {
  id: string;
  isCompleted: boolean;
  content: string;
}

interface CheckProps{
    content : Task[];
    handleCheckTask: (id:string) => string;
}
export function CheckBoxList({handleCheckTask, content}:CheckProps){

    return (
      
        <div>
          {content.map(task =>(
              <label>
                <input
                  type="checkbox"
                  onClick={() => handleCheckTask(task.id)}
                />
              </label>
          ))}
            
        </div>
      );
};