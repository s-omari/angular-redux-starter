import * as fromLayout from "../actions/layout.action";


import { ActionReducerMap , createFeatureSelector} from '@ngrx/store';
//import {  } from '@ngrx/store';


export interface LayoutState {
    rightExpanded : boolean;
    showRight : boolean;
    centerExpanded : boolean;
    showCenter : boolean;
    rightContent : string;
    showLeft: boolean;
    leftExpanded: boolean;
}

export const initialState: LayoutState = {
    rightExpanded : false,
    showRight : false,
    centerExpanded : true,
    showCenter : true,
    rightContent: '',
    showLeft: true,
    leftExpanded: true,
};



export function reducer(
    state = initialState,
    action: fromLayout.LayoutAction
) : LayoutState {

    switch(action.type) {
        case fromLayout.EXPAND_RIGHT: {
            return {
                ...state ,
                rightExpanded : true,
               showRight : true,

                centerExpanded : false,
                showCenter : false,
            }
        }
        case fromLayout.SHRINK_RIGHT: {
            return {
                ...state ,
                rightExpanded : false,
                showRight : true,

                centerExpanded : false,
                showCenter : true,
            }
        }
        case fromLayout.CLOSE_RIGHT: {
            return {
                ... state,
                rightExpanded : false,
                showRight : false,

                centerExpanded : true,
                showCenter : true,
            }
        }
        case fromLayout.RIGHT_CONTENT: {
            const rightContent = action.payload;
            return {
                ...state,
                rightContent: rightContent,

            }
        }

        case fromLayout.EXPAND_LEFT: {
            return {
                ...state ,
                leftExpanded : true,
               showLeft : true,

            }
        }
        case fromLayout.SHRINK_LEFT: {
            return {
                ...state ,
                leftExpanded : false,
                showLeft : true,

            }
        }
        case fromLayout.CLOSE_LEFT: {
            return {
                ... state,
                leftExpanded : false,
                showLeft : false,

            }
        }

    }
    return state;
}


// Export some levels of state using selectors

export const getShowCenter  = (state: LayoutState) => state.showCenter;
export const getShowRight = (state: LayoutState) => state.showRight;
export const getRightExpanded = (state: LayoutState) => state.rightExpanded;
export const getCenterExpanded = (state: LayoutState) => state.centerExpanded;
export const getRightContent = (state: LayoutState) => state.rightContent;


export const getShowLeft = (state: LayoutState) => state.showLeft;
export const getLeftExpanded = (state: LayoutState) => state.leftExpanded;




export const getLayoutState = createFeatureSelector<LayoutState>('layout'); 