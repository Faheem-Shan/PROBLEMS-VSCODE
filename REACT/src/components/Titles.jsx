import React,{useState,useEffect} from "react";
import axios from "axios";

function Titles(){
    const[titles,setTitles]= useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=>setTitles(res.data))
        .catch(err=>console.error(err));
    },[]);

    return(
        <div>
            <h2>Todo Titles</h2>
            <ul>
                {titles.map(todo =>(
                    <li key={todo.id}>{todo.title || todo.task}</li>
                ))}
            </ul>
        </div>
    )

}
export default Titles;