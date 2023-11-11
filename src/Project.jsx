import { useRef } from "react"
export function Project({title,description, date, onClose, onSave,...props}){
    return(
        <section {...props} className="flex flex-col shrink-0 basis-2/4  h-5/6">
            <div className="self-end">
            <button onClick= {onClose} className="p-5 pt-2 pb-2">Cancel</button>
            <button onClick={onSave} className="p-5 pt-2 pb-2 bg-slate-950 rounded-md text-white">Save</button>
            </div>
        <label className ="font-bold text-gray-600" >TITLE</label>
        <input ref={title} className="bg-gray-200 mb-6 pt-1 pb-1 border-b-slate-600 border-b-2 focus:outline-0" id='title' type="text"></input>
        <label className="font-bold  text-gray-600 ">DESCRIPTION</label>
        <textarea ref={description} className="bg-gray-200 mb-6 pt-1 pb-1 border-b-slate-600 border-b-2 focus:outline-0" name="" id="description" cols="" rows="2"></textarea>
        <label className="font-bold  text-gray-600" >DUE DATE</label>
        <input ref={date} className="bg-gray-200 pt-1 pb-1 border-b-slate-600 border-b-2 focus:outline-0" type="date" pattern={`\d{2}.\d{2}.\d{2}`} ></input>
        </section>
  
    )
}