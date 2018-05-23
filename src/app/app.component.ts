import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromRoot from "./store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  layoutState$ : Observable<any>;
  rightExpanded$: Observable<boolean>;
  showRight$: Observable<boolean>;
  showLeft$: Observable<boolean>;
  leftExpanded$: Observable<boolean>;
  centerExpanded$: Observable<boolean>;
  showCenter$: Observable<boolean>;
  rightContent$: Observable<string>;

  
constructor( private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.layoutState$ = this.store.select<any>(fromRoot.getLayoutState);
    this.rightExpanded$ = this.store.select<boolean>(fromRoot.getRightExpanded);
    this.showRight$ = this.store.select<boolean>(fromRoot.getShowRight);
    this.leftExpanded$ = this.store.select<boolean>(fromRoot.getLeftExpanded);
    this.showLeft$ = this.store.select<boolean>(fromRoot.getShowLeft);
    this.centerExpanded$ = this.store.select<boolean>( fromRoot.getCenterExpanded );
    this.showCenter$ = this.store.select<boolean>(fromRoot.getShowCenter);
    this.rightContent$ = this.store.select<string>(fromRoot.getRightContent);
}


  onToggleLeft(LeftState) {

    
    if (LeftState == 'false') {
      this.store.dispatch(new fromRoot.ExpandLeft());
      console.log(LeftState)
    }  if (LeftState == 'true') {
      this.store.dispatch(new fromRoot.CloseLeft());
      console.log(LeftState)
    }
    
  }
  
  


}



