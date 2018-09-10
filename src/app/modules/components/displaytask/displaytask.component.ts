import { Component, OnInit, Input, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.scss']
})
export class DisplaytaskComponent implements OnInit {
  // TODO fix task menu not disappearing when clicking on different task
  public taskMenuOpen: boolean;

  @Input() tasks: Array<Object>;

  @Output()
  taskMenuEmitter = new EventEmitter();

  constructor() { }

  public taskMenu(event: Event, task: any) {
    if (this.taskMenuOpen) {
      this.taskMenuOpen = false;
    } else {
      event.stopPropagation();
      this.taskMenuOpen = true;
    }
  }

  handleTaskMenuAction(actionInfo: any) {
    if (actionInfo) {
      this.taskMenuOpen = false;
    }
  }

  ngOnInit() {
  }

}
