import {createSelector} from '@ngrx/store';

import * as fromRoot from '../../../store'
import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/users.reducer';

import {User} from '../../models/user.model';

export const getUserState = createSelector(
    fromFeature.getAdminState , 
    (state: fromFeature.AdminState) => state.users
);




// retrieves all users as entity objects
export const getUsersEntities = createSelector(
    getUserState , 
    fromUsers.getUsersEntities
);

// retrieves all users as array
export const getAllUsers = createSelector(
    getUsersEntities , 
    (entities) => {
        return Object.keys(entities).map(
            id => entities[parseInt(id , 10)]
        )
    }
);


export const getSelectedUser = createSelector(
    getUsersEntities ,
    fromRoot.getRouterState ,
    (entities, router): User => {
        // retrieve the userId param from router state and get that entity
        return router.state && entities[router.state.params.userId]
    }
 )


export const getUsersLoaded = createSelector(
    getUserState , 
    fromUsers.getUsersLoaded
);

export const getUsersLoading = createSelector(
    getUserState , 
    fromUsers.getUsersLoading
);