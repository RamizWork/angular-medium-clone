import {Injectable} from "@angular/core";
import {SingUpRequestInterface} from "../types/sing-upRequest.interface";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthResponseInterface} from "../types/authResponse.interface";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  singUp(data: SingUpRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(
        map((response: AuthResponseInterface) => response.user)
      );
  }
}
