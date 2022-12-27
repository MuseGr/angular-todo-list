import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todolist-card',
  templateUrl: './todolist-card.component.html',
  styleUrls: ['./todolist-card.component.css']
})
export class TodolistCardComponent implements OnInit {

  constructor() { }

  public itemsList = [
    {
      "assingment": "Add your first Task",
      "status": true
    }
  ]

  public newItem: string = ""

  ngOnInit(): void {
    // alert(this.itemsList.length) 8max
  }

  deleteItem = (args: any): void => {
    this.itemsList.splice(args,1)
  }

  getValue(vaule: string){
    this.newItem = vaule;
  }
  public addItem(){
    if(this.itemsList.length == 8){
      alert("Maxim items is 8!")
      return
    }
    if(this.newItem == ""){
      alert("No item!")
      return
    }
    //dodaj
    this.itemsList.push({
      "assingment": this.newItem,
      "status": true
    })
  }

}
