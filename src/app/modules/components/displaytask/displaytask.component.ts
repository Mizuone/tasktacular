import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.scss']
})
export class DisplaytaskComponent implements OnInit {

  @Input() tasks: Array<Object>

  constructor() { }

  ngOnInit() {
  }

}
