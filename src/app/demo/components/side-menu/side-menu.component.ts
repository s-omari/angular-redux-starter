import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()  items;
  @Input()  expanded;

  constructor() { }

  ngOnInit() {
  }

}
