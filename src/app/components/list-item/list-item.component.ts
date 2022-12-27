import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input() itemAssingment:string
  @Input() itemStatus:boolean
  @Input() index: number
  @Input() deleteMe: (args: any) => void;

  ngOnInit(): void {
  }

  public  btnDone(){
    switch(this.itemStatus){
      case true:
        this.itemStatus = false
        break
      case false:
        this.itemStatus = true;
        break
    }
  }
  public btnDelete(){
    this.deleteMe(this.index)
  }

}
