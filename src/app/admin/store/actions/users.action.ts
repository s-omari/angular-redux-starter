import {Action} from '@ngrx/store';
import { User } from '../../models/user.model';

// load Users
export const LOAD_USERS = '[Admin] Load Users';
export const LOAD_USERS_FAIL = '[Admin] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[Admin] Load Users Success';


// action creators 
export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}
export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;
    constructor(public payload:any) {}
}
export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload:User[]) {}
}


//create user actions
export const CREATE_USER = '[Admin] Create User';
export const CREATE_USER_FAIL = '[Admin] Create User Fail';
export const CREATE_USER_SUCCESS = '[Admin] Create User Success';


export class CreateUser implements Action {
    readonly type = CREATE_USER;
    constructor(public payload: User) {}
}
export class CreateUserFail implements Action {
    readonly type = CREATE_USER_FAIL;
    constructor(public payload: any) {}
}
export class CreateUserSuccess implements Action {
    readonly type = CREATE_USER_SUCCESS;
    constructor(public payload: User) {}
}


 
//update users
export const UPDATE_USER = '[Admin] Update User';
export const UPDATE_USER_FAIL = '[Admin] Update User Fail';
export const UPDATE_USER_SUCCESS = '[Admin] Update User Success';


export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload: User) {}
}
export class UpdateUserFail implements Action {
    readonly type = UPDATE_USER_FAIL;
    constructor(public payload: any) {}
}
export class UpdateUserSuccess implements Action {
    readonly type = UPDATE_USER_SUCCESS;
    constructor(public payload: User) {}
}



//remove user
export const REMOVE_USER = '[Admin] Remove User';
export const REMOVE_USER_FAIL = '[Admin] Remove User Fail';
export const REMOVE_USER_SUCCESS = '[Admin] Remove User Success';


export class RemoveUser implements Action {
    readonly type = REMOVE_USER;
    constructor(public payload: User) {}
}
export class RemoveUserFail implements Action {
    readonly type = REMOVE_USER_FAIL;
    constructor(public payload: any) {}
}
export class RemoveUserSuccess implements Action {
    readonly type = REMOVE_USER_SUCCESS;
    constructor(public payload: User) {}
}




//export action type
export type UsersAction = | LoadUsers | LoadUsersFail | LoadUsersSuccess 
                        |CreateUser | CreateUserFail | CreateUserSuccess 
                        | UpdateUser | UpdateUserFail | UpdateUserSuccess
                        | RemoveUser | RemoveUserFail | RemoveUserSuccess;