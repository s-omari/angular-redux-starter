import { createSelector} from '@ngrx/store';


//import * as fromRoot from '../../store'
//import * as fromFeature from '../reducers';
import * as fromLayout from '../reducers/layout.reducer';


export const getLayoutState = createSelector(
    fromLayout.getLayoutState,
    (state: fromLayout.LayoutState) => state
);

export const getRightExpanded = createSelector(
    getLayoutState , 
    fromLayout.getRightExpanded
);

export const getCenterExpanded = createSelector(
    getLayoutState , 
    fromLayout.getCenterExpanded
);

export const getShowRight = createSelector(
    getLayoutState , 
    fromLayout.getShowRight
);

export const getShowLeft = createSelector(
    getLayoutState , 
    fromLayout.getShowLeft
);
export const getLeftExpanded = createSelector(
    getLayoutState , 
    fromLayout.getLeftExpanded
);

export const getShowCenter = createSelector(
    getLayoutState , 
    fromLayout.getShowCenter
);

export const getRightContent = createSelector(
    getLayoutState , 
    fromLayout.getRightContent
);