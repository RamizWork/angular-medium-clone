import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {singUpAction, singUpFailureAction, singUpSuccessAction} from "../actions/sing-up.action";
import {catchError, map, of, switchMap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class SingUpEffect {
  singUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singUpAction),
      switchMap(({request}) => {
        return this.authService.singUp(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return singUpSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(singUpFailureAction({errors: errorResponse.error.errors}))
          })
        )
      })
    ));

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
