import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskmenu',
  templateUrl: './taskmenu.component.html',
  styleUrls: ['./taskmenu.component.scss']
})
export class TaskmenuComponent implements OnInit {

  @Input() taskDetails: any;

  @Output()
  taskMenuAction = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) clickout(event) {
    // Click outside of the menu was detected
    console.log('here');
    this.taskMenuAction.emit(true);
  }

  handleAsideClick(event: Event) {
    event.stopPropagation(); // Stop the propagation to prevent reaching document
  }

}
