import {Action} from '@ngrx/store';


export const EXPAND_RIGHT = '[Layout] Expand Right';
export const SHRINK_RIGHT = '[Layout] Shrink Right';
export const CLOSE_RIGHT = '[Layout] Close Right';

//define action creators
export class ExpandRight implements Action {
    readonly type = EXPAND_RIGHT;
}
export class ShrinkRight implements Action {
    readonly type = SHRINK_RIGHT;
}
export class CloseRight implements Action {
    readonly type = CLOSE_RIGHT;
}


export const EXPAND_LEFT = '[Layout] Expand Left';
export const SHRINK_LEFT = '[Layout] Shrink Left';
export const CLOSE_LEFT = '[Layout] Close Left';

//define action creators
export class ExpandLeft implements Action {
    readonly type = EXPAND_LEFT;
}
export class ShrinkLeft implements Action {
    readonly type = SHRINK_LEFT;
}
export class CloseLeft implements Action {
    readonly type = CLOSE_LEFT;
}



export const RIGHT_CONTENT = '[Layout] Update Right Content';

export class RightContent implements Action {
    readonly type = RIGHT_CONTENT;
    constructor(public payload: string) {}
}

//export action type
export type LayoutAction = ExpandRight | ShrinkRight | CloseRight | RightContent 
                            | ExpandLeft | ShrinkLeft | CloseLeft;