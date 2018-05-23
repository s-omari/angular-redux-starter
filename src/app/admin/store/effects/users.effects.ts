import { Injectable, Pipe } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromRoot from "../../../store";

import * as usersActions from "../actions/users.action";
import * as fromServices from "../../services";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UsersService
  ) {}

  //load users
  @Effect()
  loadUsers$ = this.actions$.ofType(usersActions.LOAD_USERS).pipe(
    switchMap(() => {
      return this.userService
        .getUsers()
        .pipe(
          map(users => new usersActions.LoadUsersSuccess(users)),
          catchError(error => of(new usersActions.LoadUsersFail(error)))
        );
    })
  );

  //create user
  @Effect()
  createUser$ = this.actions$.ofType(usersActions.CREATE_USER).pipe(
    map((action: usersActions.CreateUser) => action.payload),
    switchMap(user => {
      return this.userService
        .createUser(user)
        .pipe(
          map(user => new usersActions.CreateUserSuccess(user)),
          catchError(error => of(new usersActions.CreateUserFail(error)))
        );
    })
  );

  @Effect()
  createUserSuccess$ = this.actions$
    .ofType(usersActions.CREATE_USER_SUCCESS)
    .pipe(
      map((action: usersActions.CreateUserSuccess) => action.payload),
      map(user => {
        return new fromRoot.Go({
          path: ["/admin/users", user.id]
        });
      })
    );

  //update user
  @Effect()
  updateUser$ = this.actions$.ofType(usersActions.UPDATE_USER).pipe(
    map((action: usersActions.UpdateUser) => action.payload),
    switchMap(user => {
      return this.userService
        .updateUser(user)
        .pipe(
          map(user => new usersActions.UpdateUserSuccess(user)),
          catchError(error => of(new usersActions.UpdateUserFail(error)))
        );
    })
  );

  //remove user
  @Effect()
  removeUser$ = this.actions$.ofType(usersActions.REMOVE_USER).pipe(
   
    map((action: usersActions.RemoveUser) => action.payload),
    switchMap(user => {
      return this.userService
        .removeUser(user)
        .pipe(
          map(user => new usersActions.RemoveUserSuccess(user)),
          catchError(error => of(new usersActions.RemoveUserFail(error)))
        );
    })
  );


  @Effect()
  handleUserSuccess$ = this.actions$
  .ofType(
      usersActions.UPDATE_USER_SUCCESS ,
      usersActions.REMOVE_USER_SUCCESS,
  )
  .pipe(
      map( user => {
          return new fromRoot.Go({
            path: ['/admin/users'],
          })
      })
  )



}
