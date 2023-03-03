import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: Boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
