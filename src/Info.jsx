import { useRef } from "react"
export function Info({task, chosen,data,onDelete, onAddTask, onClear}){
    var projectList = '';
    if (data[chosen]?.tasks) {
      projectList = data[chosen].tasks.map((task,index) => (
        <li key={index}>
          <div className="flex justify-between items-center">
            <p>{task}</p>
            <button className="pt-2 pb-2 my-2" onClick={() =>  {onClear(index)}}>
              Clear
            </button>
          </div>
        </li>
      ));
    }
    const formattedDate = new Date(data[chosen]['date']).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    console.log(chosen)
    
    return (
        <section className="flex flex-col shrink basis-2/4  h-5/6 gap-6">
        <header className="flex justify-between">
            <h1 className="text-3xl font-bold">{chosen}</h1>
            <button onClick={()=> onDelete()}>Delete</button>
        </header>
        <p className="text-gray-600">{formattedDate}</p>
        <p className="whitespace-pre-wrap" >{data[chosen]['description']}</p>
        <hr/>
        <h2 className="text-2xl font-bold">Tasks</h2>
        <div className="flex-inline">
        <input ref={task} className="py-1 px-2 bg-gray-200" type="text" required/>
        <button onClick={onAddTask} className="px-3">Add Task</button>
        </div>
        
        {data[chosen]['tasks'] && data[chosen]['tasks'].length > 0  && <ul className="bg-slate-100 rounded-lg px-5 py-3">{projectList}</ul>}
        {(!data[chosen]['tasks'] || data[chosen]['tasks'].length == 0)  && <p>This project does not have any tasks yet</p>}
        </section>
    )
}