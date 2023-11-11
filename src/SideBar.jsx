import {PlusIcon} from './PlusIcon'
export function SideBar({done, projects, onAdd, onChosen}){
    var projectList = <li></li>
    if (projects){
        projectList = projects.map((items) => (<li key={items}><button onClick={()=>{onChosen(items)}}  className="pt-2 pb-2 my-2" disabled={done}>{items}</button></li>))}

    return (
        <section className={'h-[95%] text-white shrink-0 bg-black basis-1/4 mr-10 rounded-tr-3xl py-10 px-10'}>
        <h2 className='text-2xl font-bold items-center my-10 uppercase'>YOUR PROJECTS</h2>
        <button onClick={onAdd} className="inline-flex items-center px-3 py-3 bg-slate-600 font-semibold rounded-md mb-6" disabled={done}>           
                    <span className="h-4 w-4">
                        <PlusIcon />
                    </span>
                    <span>Add Project</span>
        </button>
        <ul>{projectList}</ul>
        </section>
    )
}