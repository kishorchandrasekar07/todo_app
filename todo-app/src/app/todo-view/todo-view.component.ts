import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent {
  title = 'todo-app';
  notesCount = 0;
  searchValue : any;
  todoList : any[] = [{text:"Todo App creation",isValid:true}];
  todoListDisplay : any[] = [];
  adding = false;
  todoText = "";
  searchResultsCount = 0;
  constructor(){
      this.todoListDisplay = this.todoList;
      this.notesCount = this.todoList.length;
      this.searchResultsCount = this.todoListDisplay.length;
  }
  searchChange(){
   this.todoListDisplay = this.todoList.filter(x => x.text.includes(this.searchValue));
   this.searchResultsCount = this.todoListDisplay.length;
  }
  createTodoStart(){
    this.adding = true;
  }

  saveTodo(){
    this.todoList.push({isValid:true,text:this.todoText})
    this.notesCount = this.todoList.length;
    this.searchResultsCount = this.todoListDisplay.length;
    this.adding = false;
    this.todoText = "";
  }

  deleteTodo(index:any){
    this.todoList[index].isValid = false;
    this.notesCount = this.todoList.length;
    this.searchResultsCount = this.todoListDisplay.length;
  }

}
