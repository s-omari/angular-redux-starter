import { Component, OnInit } from '@angular/core';


import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromRoot from "../store";


import { MenuItems} from './sideMenuConfig';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  menuItems = MenuItems; //imported menu file
    //layout
    layoutState$ : Observable<any>;
    rightExpanded$: Observable<boolean>;
    showRight$: Observable<boolean>;
    showLeft$: Observable<boolean>;
    leftExpanded$: Observable<boolean>;
    centerExpanded$: Observable<boolean>;
    showCenter$: Observable<boolean>;
    rightContent$: Observable<string>;
  
  
    //router State
    routerUrl$: Observable<string>;
    queryParams$: Observable<string>;
    params$: Observable<string>;


  constructor(  private store: Store<fromRoot.State>) { }

  ngOnInit() {

        //  this.routerUrl$ = this.store.select<string>(fromRoot.getRouterState);
        //layout state selectors , TODO create admin container and move layout there
        this.layoutState$ = this.store.select<any>(fromRoot.getLayoutState);
        this.rightExpanded$ = this.store.select<boolean>(fromRoot.getRightExpanded);
        this.showRight$ = this.store.select<boolean>(fromRoot.getShowRight);
        this.leftExpanded$ = this.store.select<boolean>(fromRoot.getLeftExpanded);
        this.showLeft$ = this.store.select<boolean>(fromRoot.getShowLeft);
        this.centerExpanded$ = this.store.select<boolean>( fromRoot.getCenterExpanded );
        this.showCenter$ = this.store.select<boolean>(fromRoot.getShowCenter);
        this.rightContent$ = this.store.select<string>(fromRoot.getRightContent);

  }



  onCloseRight() {
    this.store.dispatch(new fromRoot.CloseRight());
  }
  onExpandRight() {
    this.store.dispatch(new fromRoot.ExpandRight());
  }
  onShrinkRight() {
    this.store.dispatch(new fromRoot.ShrinkRight());
  }


  onCloseLeft() {
    this.store.dispatch(new fromRoot.CloseLeft());
  }
  onExpandLeft() {
    this.store.dispatch(new fromRoot.ExpandLeft());
  }
  onShrinkLeft() {
    this.store.dispatch(new fromRoot.ShrinkLeft());
  }


  

}
