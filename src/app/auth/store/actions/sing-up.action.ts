import {createAction, props} from '@ngrx/store';
import {ActionType} from "../actionType";
import {SingUpRequestInterface} from "../../types/sing-upRequest.interface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

export const singUpAction = createAction(ActionType.REGISTER, props<{ request: SingUpRequestInterface }>());
export const singUpSuccessAction = createAction(ActionType.REGISTER_SUCCESS, props<{ currentUser: CurrentUserInterface }>());
export const singUpFailureAction = createAction(ActionType.REGISTER_FAILURE);
