// import React from 'react';

// function App() {
//   return (
//     <button onClick={() => alert('Button Clicked!')}>
//       Click Me
//     </button>
//   );
// }

// export default App;

// function TodoList(){
//   const todos=[
//     {
//       id:101,task:"Code"
//     },
//     {id:202,task:"Test"}
//   ]

//   const todoItems=todos.map(todo=><li key={todo.id}>{todo.task}</li>);
//   return(
//     <div>
//       <h3>My todo list</h3>
//       <ul>{todoItems}</ul>
//     </div>
//   )

// }

// export default TodoList

//inline event handler
// function App(){
//   return(
//     <button onClick={()=>alert("Inline event!!")}>Click</button>
//   )
// }
// export default App

//passing argument to handler
// function App(){
//   const logItem=(item)=>alert(item);
//   return(
//     <button onClick={()=>logItem("hellooo")}>Log itemm</button>
//   )
// }
// export default App

//Multiple event
// function App(){
//   const handleClick=()=>alert('clicked');
//   const handleMouse=()=>alert('Hovered');

//   return(
//     <button
//     onClick={handleClick} onMouseEnter={handleMouse}>Hover or click me</button>
//   )
// }
// export default App

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// import { useRef } from "react";

// function LoginForm() {
//   const usernameRef = useRef(null);

//   function focusInput() {
//     usernameRef.current.focus(); // pointer to input
//   }

//   return (
//     <div>
//       <input ref={usernameRef} placeholder="Username" />
//       <button onClick={focusInput}>Focus Username</button>
//     </div>
//   );
// }



// import React, { useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("Component mounted!");
//   }, []); // empty array → runs only once

//   return <h2>Hello World</h2>;
// }

// export default Hello;

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const incrementTwice = () => {
//     // Using previous state ensures correct updates
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementTwice}>Increment Twice</button>
//     </div>
//   );
// }

// export default Counter;
// import React, { useState } from 'react';

// function Toggle() {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn(prevIsOn => !prevIsOn); // Toggle based on previous state
//   };

//   return (
//     <button onClick={toggleSwitch}>
//       {isOn ? 'ON' : 'OFF'}
//     </button>
//   );
// }

// export default Toggle;

// function App() {
//   const [count, setCount] = React.useState(0);

//   const incrementIncorrect = () => {
//     setCount(count + 1);
//     setCount(count + 1); // Uses the same stale count twice
//   };

//   const incrementCorrect = () => {
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1); // Correctly increments twice
//   };

//   return (
//     <div>
//       <p>Count: {count} </p>
//       <button onClick={incrementIncorrect}>Incorrect Increment Twice</button>
//       <button onClick={incrementCorrect}>Correct Increment Twice</button>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// function SimpleForm() {
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       setError('Name is required');
//     } else {
//       alert(`Hello, ${name}`);
//       setError('');
//       setName(''); 
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         placeholder="Enter your name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default SimpleForm;

//CSS:

// import React from 'react';
// function inline(){
//   return(
//     <div style={{backgroundColor: "lightblue",color:"black",fontSize:'20px'}}>
//       Hello Ram
//       </div>
//   )
// }
// export default inline;

// import React from 'react';
// import './App.css';

// function Stylesheet(){
//   return(
//     <h2 className="header">Welcome to React,lets study</h2>
//   )
// }
// export default Stylesheet

// import React from 'react';
// import styles from './mystyle.module.css';

// function CSSModule(){
//   return (
//     <h2 className={styles.title}>
//       This is styled with a css Module!
//       </h2>
//   )
// }
// export default CSSModule;



// import React,{useState} from "react";
// function App(){
//   const [isDark,setIsDark]=useState(false);
//   const toggleTheme=()=>{
//     setIsDark(!isDark);
//   }
//   const appStyle={
//     height:"100vh",
//     margin:0,
//     display:'flex',
//     justifyContent:'center',
//     alignItems: 'center',
//     backgroundColor: isDark ? '#121212' : '#ffffff',
//     //If isDark is true, make the background dark gray (#121212). Otherwise, make it white (#ffffff).
//     color: isDark ? '#ffffff' : '#161515ff',
//     transition: 'background-color 0.3s, color 0.3s',
//     flexDirection: 'column'
//   }

//   return(
//     <div style={appStyle}>
//       <h1>{isDark ? 'Dark Theme':'Light Theme'}</h1>
//       <button onClick={toggleTheme}>Switch Theme</button>
//     </div>
//   )
// }

// export default App;


//task-1
// import React,{useState} from "react";
// function App(){
//   const[isDark,setIsDark]=useState(false);
//   const toggleTheme=()=>{
//     setIsDark(!isDark);
//   }
//   const appStyle={
//     height:"100vh",
//     margin:0,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:isDark? '#121212':'#ffffff',
//     color: isDark ? '#ffffff' : '#161515ff',
//     transition:'background-color 0.3s ,color 0.3s',
//     flexDirection:'column'
//   }

//   return(
//     <div style={appStyle}>
//       <h1>{isDark? 'Dark theme':'Light theme'}</h1>
//       <button onClick={toggleTheme}>switch theme</button>
//     </div>
//   )
// }
// export default App;

// import React,{useState,useEffect} from 'react';
// function App(){
//   const[quotes,setquotes]=useState([]);
//   useEffect(()=>{
//     fetch("https://dummyjson.com/quotes")
//     .then(res=>res.json())
//     .then(data=>{
//       setquotes(data.quotes.slice(0,10));
//     })
//     .catch(err=>console.error(err));
//   },[])



//   return(
//     <div>
//       {quotes.map((quote)=>(
//         <h3 key={quote.id}>{quote.quote}</h3>
//       ))}
//     </div>
//   )
// }
// export default App;


// import React,{useState} from 'react';
// function Counter(){
//     const[count,setCount]=useState(0);
//     return(
//         <div>
//             <p>Count:{count}</p>
//             <button onClick={()=>setCount(count+1)}>Increase Value</button>
//             <button onClick={()=>setCount(0)}>Reset</button>
//         </div>
//     )
// }

// export default Counter;

// import React from 'react';
// function Todolist(){
//     const todos=[{id:101,task:"code"},{id:102,task:"Test"}];
//     const todoItems=todos.map(todo=>
//         <li key={todo.id}>{todo.task}</li>
//     )
//     return(
//         <div>
//             <h3>My todo list</h3>
//             <ul>{todoItems}</ul>
//         </div>
//     )
// }
// export default Todolist;

// import React,{useState,useRef} from 'react';
// function focus(){
//     const[value,setValue]=useState("");
//     const inputRef = useRef(null);//ref to input DOM

//     const focusInput=()=>{
//         inputRef.current.focus(); //focus the input element
//     }

//     return(
//         <div>
//             <input
//             ref={inputRef}//link the ref to input
//             value={value}
//             onChange={(e)=>setValue(e.target.value)}
//             placeholder='Type smthng'/>
//             <button onClick={focusInput}>Focus input</button>
//         </div>
//     )
// }
// export default focus;

// import React,{useState} from 'react';
// function App(){

//     const[task,setTask]= useState('white');
//     return(
//         <div>
//             <button style={{backgroundColor:task,color:'white',height:'50px',width:'100px',textAlign:'center',paddingTop:'30px',
//             transition:'0.5s ease'}} onClick={()=>setTask('red')}>Button-1</button><br />

//             <button style={{backgroundColor:task,height:'50px',color:'white',width:'100px',textAlign:'center',paddingTop:'30px',
//             transition:'0.5s ease'}} onClick={()=>setTask('blue')}>Button-2</button><br />


//         </div>
//     )
// }

// export default App();

// import React, { useState } from 'react';

// function App() {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const handleAddTask = () => {
//     if (task.trim() === '') return;
//     setTasks([...tasks, task]);
//     setTask('');
//   };

//   const handleDeleteTask = (idx) => {
//     setTasks(tasks.filter((_, i) => i !== idx));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Tailwind-styled Navbar (Showcase only, non-functional) */}
//       <nav className="bg-blue-600 py-4 px-8 shadow mb-8">
//         <div className="max-w-xl mx-auto flex justify-between items-center">
//           <span className="text-white text-2xl font-bold">Todolist App</span>
//           {/* <div>
//             <button className="text-white hover:text-blue-200 transition">Home</button>
//           </div> */}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
//         <div className="flex gap-2 mb-6">
//           <input
//             className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Add a new task"
//             value={task}
//             onChange={e => setTask(e.target.value)}
//             onKeyDown={e => e.key === 'Enter' && handleAddTask()}
//           />
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
//             onClick={handleAddTask}
//           >
//             Add Task
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {tasks.map((t, idx) => (
//             <li key={idx} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded shadow hover:bg-gray-100">
//               <span>{t}</span>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
//                 onClick={() => handleDeleteTask(idx)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React,{useReducer} from 'react';

// function reducer(state,action){
//     switch(action.type){
//         case 'increment':
//             return {count:state.count +1};
//         case 'decrement':
//             return {count:state.count -1};
//         // case 'set':
//         //     return {count:action.payload}
//         case 'reset':
//             return {count:0};
//         default:
//             return state;
//     }
// }

// function Counter(){
//     const[state,dispatch]=useReducer(reducer,{count:0});

//     return(ff
//         <div>
//             <p>Count:{state.count}</p>
//             <button onClick={()=>dispatch({type:'increment'})}>+</button>
//             <button onClick={()=>dispatch({type:'decrement'})}>-</button>
//             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//         </div>
//     )
// }

// export default Counter;

// import React,{useReducer,useState} from 'react';
// function reducer(state,action){
//     switch(action.type){
//         case 'increment':
//             return {count:state.count +1};
//         case 'decrement':
//             return {count:state.count-1};
//         case 'set':
//             return {count:action.payload};
//         default:
//             return state;
//     }
// }

// function Counter(){
//     const[state,dispatch]=useReducer(reducer,{count:0});
//     const[inputValue,setInputValue] = useState("");

//     return(
//     <div>
//         <p>Count:{state.count}</p>
//         <button onClick={()=>dispatch({type:'increment'})}>+</button>
//         <button onClick={()=>dispatch({type:'decrement'})}>-</button>
//         <br />

//         <input
//         type='number'
//         value={inputValue}
//         onChange={(e)=>setInputValue(e.target.value)}
//         />

//         <button onClick={()=>dispatch({type:'set',payload:Number(inputValue)})}>
//             Set Count
//         </button>
//     </div>
// )}

// export default Counter;

// import React,{useState,useEffect} from "react";
// import axios from 'axios';
// function App(){
//     const[posts,setPosts]=useState([]);

//     useEffect(()=>{
//         axios.get('http://localhost:4000/posts')
//         .then(res=>setPosts(res.data))
//         .catch(err=>console.error(err));
//     },[])


// return (
//     <div>
//         {posts.map(p=><h1 key={p.id}>{p.title}</h1>)
//         }
//     </div>
// )
// }
// export default App

// import axios from 'axios';
// axios.post('http://localhost:4000/posts',{
//     title:'New Post',
//     author:'Luffy'
// })

// .then(res=>console.log(res.data))
// .catch(err=>console.error(err));

// import React, { createContext, useContext } from 'react';

// const ColorContext = createContext();

// function App() {
//   const color = "Green";

//   return (
//     <ColorContext.Provider value={color}>
//       <Child />
//     </ColorContext.Provider>
//   );
// }

// function Child() {
//   const myColor = useContext(ColorContext);
//   return <h1>My fav color is {myColor}</h1>;
// }

// export default App;

// function useTimer(startValue) {
//   const [count, setCount] = useState(startValue);
//   useEffect(() => {
//     const timer = setInterval(() => setCount(c => c + 1), 1000);
//     return () => clearInterval(timer);
//   }, []);
//   return count;
// }
// function TimerComponent() {
//   const time = useTimer(0);
//   return <div>Timer: {time}s</div>;
// }

// export default TimerComponent;
// import React from "react";
// function JustInfo(){
//   console.log("Render just info");

//   return (
//     <div>
//       Just Info</div>
//   )

// }
// const Newcomp=React.memo(JustInfo);

// export default Newcomp;

// import React,{useState} from "react";
// const JustInfo = React.memo(({text})=>{
//   console.log("Render just info");
//   return <div>{text}</div>
// })

// function App(){
//   const[count,setCount]=useState(0);

//   return(
//     <div>
//       <JustInfo text="Hello" />
//       <p>Count:{count}</p>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//     </div>
//   )
// }
// export default App;

import React,{useState,memo} from "react";
const Child= memo(({text})=>{
  console.log("child Rendered");
  return <div>{text}</div>
}) 
function App() {
  const[count,setCount]=useState(0);

  return(
    <div>
       <Child text="Hi Butterfly" />
    <p>Count: {count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
export default App;

// import React, { useState, memo } from "react";

// const Child = memo(({ onClick }) => {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Child Button</button>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => console.log("Clicked");

//   return (
//     <div>
//       <Child onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;

// import React,{useState,useCallback} from "react";
// import Title from './Title';
// import Count from './Count';
// import Button from './Button';

// function App(){
//   const [count1,setCount1] = useState(0);
//   const [count2,setCount2] = useState(5);

//   const increment1=useCallback(()=>{
//     setCount1(count1+1)
//   },[count1])

//   const increment2=useCallback(()=>{
//     setCount2(count2+1)
//   },[count2])

//   return(
//     <div>
//       <Title /><br />
//       <Count text="Counter1" count={count1} /> 
//       {/* Two props are passed here text and count */}
//       <Button handleClick={increment1}>+1</Button>
//       <Count text="counter2" count={count2}/>
//       <Button handleClick={increment2}>+2</Button>
//     </div>
//   )
// }
// //Here 3 components are there imported,directly we can give ,

// export default React.memo(App);
// import React,{useState} from 'react';

// function Counter(){
//   const [count1,setCount1]=useState(0);
//   const [count2,setCount2]=useState(0);

//   const Increment1=()=>{
//     setCount1(count1+1)
//   }
//   const Increment2=()=>{
//     setCount2(count2+1)
//   }
//   const EvenorOdd = ()=>{
//     return count1%2===0
//   }

//   return(
//     <div>
//       <button onClick={Increment1}>Count1 : {count1}</button>
//       <span>{EvenorOdd() ? 'even' : 'odd'}</span><br /><br />
//       <button onClick={Increment2}>Count 2 : {count2}</button>
//     </div>
//   )

// }
// export default Counter;

//Router router  
// import React from "react";
// import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

// function Home(){
//   return <h2>Home Page </h2>
// }
// function About(){
//   return <h2>About page</h2>
// }
// function Contact(){
//   return <h2>Contact page</h2>
// }

// function App(){
//   return(
//     <BrowserRouter>
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>


//     </BrowserRouter>
//   )
// }

// export default App;

//Annother example of routing using external components
// import React from "react";
// import Routing from "./components/Routing";
// import { BrowserRouter,Routes,Route } from "react-router-dom";

// function App(){
//     return (
//         <div>
//          <BrowserRouter>
//             <Routes>
//                <Route path="/" Component={Routing} />  
//             </Routes>
//          </BrowserRouter>
//         </div>
//     )
// }
// export default App;

//Usereducer and useState,add product,delete,update
// import React from 'react';
// import ProductManager from './components/ProductManager';

// function App(){
//     return(
//         <div>
//             <h1>Welcome to Product management</h1>
//             <ProductManager />
//         </div>
//     )
// }
// export default App;

// import React, { createContext, useContext, useState } from "react";
// import { BrowserRouter as Router, Route, Link, useNavigate, Routes } from "react-router-dom";

// const userContext = createContext();


// function App() {
//     const [user, setUser] = useState({ id: 1, name: "Faheem" });

//     return (
//         <userContext.Provider value={{ user, setUser }} >
//             <Router>
//                 <nav>
//                     <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>

//                 </nav>

//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/profile" element={<Profile />} />
//                 </Routes>
//             </Router>

//         </userContext.Provider>
//     )
// }

// function Home() {
//     const { user, setUser } = useContext(userContext);
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h2>Home page</h2>
//             <p>Current user:{user.name}</p>
//             <button onClick={() => {
//                 setUser({ id: 2, name: "Arun" });
//                 navigate("/profile")
//             }}>Go to Profile</button>
//         </div>
//     )
// }

// function Profile(){
//     const{user}=useContext(userContext);
//     return(
//         <div>
//             <h2>Profile page</h2>
//             <p>USer ID:{user.id}</p>
//             <p>user Name:{user.name}</p>
//         </div>
//     )
// }

// export default App;

// import React,{useEffect,useState} from 'react';
// import axios from 'axios';

// function todoList(){
//     const[todos,setTodos]=useState([]);

//     useEffect(()=>{
//         axios.get("http://localhost:5000/todos")
//         .then(res=>setTodos(res.data))
//         .catch(err=>console.error(err));
//     },[]);

//     return(
//         <div>
//             <h2>Todo List</h2>
//             <ul>
//                 {todos.map(todo=>(<li key={todo.id}>{todo.task}</li>))}
//             </ul>
//         </div>
//     )
// }
// export default todoList;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import axios from "axios";

// function Home() {
//   const fetchData = () => {
//     axios.get("http://localhost:5000/users")
//       .then(res => console.log("Fetched Data:", res.data))
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={fetchData}>Fetch Users (Manual)</button>
//       <p>Check the console for fetched data.</p>
//       <Link to="/users">Go to Users Page</Link>
//     </div>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <h2>Users Page</h2>
//       <p>This is another route — routing works!</p>
//       <Link to="/">Go Back Home</Link>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Titles from "./pages/Titles";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/titles" element={<Titles />} />
//     </Routes>
//   );
// }

// export default App;
import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Titles from "./components/Titles";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/titles" element={<Titles />} />
        </Routes>
    )
}

export default App;