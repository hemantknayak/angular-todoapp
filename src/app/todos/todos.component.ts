import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { 
    //this.todos = [];
    let todoItem = localStorage.getItem('myTodos');
    this.todos = JSON.parse(todoItem);
      
  }

  ngOnInit(): void {
  }

  todoAdd(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem('myTodos',JSON.stringify(this.todos));
  }

  deleteTodo(todo:Todo){
    console.log("inside todos component");
    let index = this.todos.indexOf(todo);
    console.log("index: "+index);
    this.todos.splice(index,1);
    localStorage.setItem('myTodos',JSON.stringify(this.todos));
  }

}
