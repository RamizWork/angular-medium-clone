import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RegisterComponent } from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {SingUpEffect} from "./store/effects/sing-up.effect";

const routes: Routes = [
  {
    path: 'sing-up', component: RegisterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([SingUpEffect])
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [AuthService]
})
export class AuthModule {

}
