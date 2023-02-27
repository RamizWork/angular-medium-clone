import {AuthStateInterface} from "../types/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {singUpAction} from "./actions/sing-up.action";

const initialState: AuthStateInterface = {
  isSubmitting: false
};

const authReducer = createReducer(
  initialState,
  on(singUpAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
  }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
