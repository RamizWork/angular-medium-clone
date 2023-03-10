import {AppStateInterface} from "../../shared/types/appState.interface";
import {AuthStateInterface} from "../types/authState.interface";
import {createSelector} from "@ngrx/store";

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;
export const isSubmittingSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => authState.isSubmitting);
export const validationErrorsSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => authState.validationErrors);
