import { Component, OnInit , ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromRoot from "../../../store";
import * as fromStore from "../../store";

import { User } from "../../models/user.model";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"] ,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser$: Observable<User>;

  //layout
  rightExpanded$: Observable<boolean>;
  showRight$: Observable<boolean>;
  centerExpanded$: Observable<boolean>;
  showCenter$: Observable<boolean>;
  rightContent$: Observable<string>;

  selectedUser: any; //TOTO get rid of this , implement selectedUser$ with store
 // rightContent: string; // ADD to layout store
  constructor(private store: Store<fromStore.AdminState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadUsers());
     //   this.store.dispatch(new fromRoot.CloseRight());
    this.onCloseRight();
    this.users$ = this.store.select<any>(fromStore.getAllUsers);
    this.selectedUser$ = this.store.select<any>(fromStore.getSelectedUser);

    //layout state selectors , TODO create admin container and move layout there
    this.rightExpanded$ = this.store.select<boolean>(fromRoot.getRightExpanded);
    this.showRight$ = this.store.select<boolean>(fromRoot.getShowRight);
    this.centerExpanded$ = this.store.select<boolean>( fromRoot.getCenterExpanded );
    this.showCenter$ = this.store.select<boolean>(fromRoot.getShowCenter);
    this.rightContent$ = this.store.select<string>(fromRoot.getRightContent)
  }

  onSelect(user: User) {
    console.log(user);
    this.selectedUser = user;
     //   this.store.dispatch(new fromRoot.Go({path: ["admin/users/"+user.id]}));
    this.store.dispatch(new fromRoot.RightContent('ViewSelected'));
    this.store.dispatch(new fromRoot.ShrinkRight());
  }
  onCreate(event: any) {
    this.selectedUser = event;
    this.store.dispatch(new fromStore.CreateUser(event));
    this.store.dispatch(new fromRoot.RightContent('ViewSelected'));
  }
  onUpdate(event: User) {
    this.store.dispatch(new fromStore.UpdateUser(event));

    this.selectedUser = event;
    this.store.dispatch(new fromRoot.RightContent('ViewSelected'));
  }
  onDelete(event: User) {
    const remove = window.confirm("are you sure you want to delete this user?"+event);
    if (remove) {
      console.log(event);
      this.store.dispatch(new fromStore.RemoveUser(event));
      this.onCloseRight();

    }
  }

  onViewSelected() {
    this.store.dispatch(new fromRoot.RightContent('ViewSelected'));
  }

  onOpenUpdateForm() {
    this.store.dispatch(new fromRoot.RightContent('UpdateForm'));
  }
  onOpenCreateForm() {
    this.selectedUser = ""; //TODO start using store observable
    this.store.dispatch(new fromRoot.RightContent('CreateForm'));
    this.store.dispatch(new fromRoot.ShrinkRight());
  }

  onCloseRight() {
    this.selectedUser = "";
    this.store.dispatch(new fromRoot.CloseRight());
    this.store.dispatch(new fromRoot.RightContent(''));
  }
  onExpandRight() {
    this.store.dispatch(new fromRoot.ExpandRight());
  }
  onShrinkRight() {
    this.store.dispatch(new fromRoot.ShrinkRight());
  }
}
