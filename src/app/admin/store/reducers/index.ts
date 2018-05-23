import {ActionReducerMap , createFeatureSelector} from '@ngrx/store';
import * as fromUsers from './users.reducer';


export interface AdminState {
    users: fromUsers.UserState ;
    
}

// register reducer
export const reducers: ActionReducerMap<AdminState> = {
    users: fromUsers.reducer ,
};


//this will be a constatnt which holds our selector for the entire 
//lazy loaded module using createFeatureSelector to crete selector
export const getAdminState = createFeatureSelector<AdminState>('admin');

