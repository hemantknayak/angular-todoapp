import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string;
  desc:string;

  @Output() addThisTodo:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let todo = {
        sno:0,
        title: this.title,
        desc: this.desc,
        active: true
    };
    this.addThisTodo.emit(todo);
  }
}
