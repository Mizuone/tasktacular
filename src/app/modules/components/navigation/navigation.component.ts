import { Component, OnInit } from '@angular/core';
import M from 'node_modules/materialize-css/dist/js/materialize';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initalizeNavigation();
  }

  private initalizeNavigation() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});
  }

}