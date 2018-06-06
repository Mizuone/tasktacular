import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.scss']
})
export class DisplaytaskComponent implements OnInit {

  @Input() tasks: Array<Object>

  @Output('taskMenu')
  taskMenuEmitter = new EventEmitter();

  constructor() { }

  public taskMenu(task) {
    this.taskMenuEmitter.emit(task);
  }

  ngOnInit() {
  }

}
