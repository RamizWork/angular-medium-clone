import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {singUpAction} from "../../store/actions/sing-up.action";
import {Observable} from "rxjs";
import {AppStateInterface} from "../../../shared/types/appState.interface";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {AuthService} from "../../services/auth.service";
import {SingUpRequestInterface} from "../../types/sing-upRequest.interface";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(private authService: AuthService, private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    const request: SingUpRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(singUpAction({request}));

  }
}
