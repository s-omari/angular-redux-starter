import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  constructor() { }


  @Input() entities: any;
  @Input() selectedEntityId: number;
  @Output() onEntitySelect = new EventEmitter();

  @Input() columns: any;


  ngOnInit() {

  }


  selectEntity(event) {
    this.onEntitySelect.emit(event);
  }



}
