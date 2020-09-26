import { AuthGuard } from './services/shared/auth.guard';
import { LoginComponent } from './layout/login/login.component';
import { UserComponent } from './layout/register/user/user.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AboutComponent } from './layout/help/about/about.component';
import { PersonComponent } from './layout/register/person/person.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
[
  {
    path: '',
    component: HomeComponent,
    children:
    [
      { path: '', component: HomeComponent },
      { path: 'person', component: PersonComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children:
    [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'account', component: UserComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
