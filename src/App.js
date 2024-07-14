import React from "react";
import Header from "./components/Header";
import TodoItem from"./components/TodoItems";
import Button from "./components/Button";
import "./style.css";
const App =()=>{
return (
<div class="todo-container">
<Header/>
<TodoItem/>
<TodoItem/>
<TodoItem/>
<Button/>
</div>
);
};
export default App;