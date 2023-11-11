export function Welcome({onAdd}){
    
    return(
        <section  className="flex flex-col shrink-0 basis-3/4  h-5/6 items-center gap-6">
            <span className="h-28 w-28"><img src="src/assets/no-projects.png"></img></span>
            <h2 className="font-bold text-2xl">No Project Selected</h2>
            <p className="text-gray-600">Select a project or get started with a new one</p>
            <button onClick={onAdd} className="px-3 py-2 text-gray-600 bg-black font-semibold rounded-md">Create new project</button>
        </section>
    )
}