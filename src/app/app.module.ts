import { UserInfoComponent } from './layout/shared/person/user-info/user-info.component';
import { Person } from './models/registers/person';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/shared/footer/footer.component';
import { HeaderComponent } from './layout/shared/header/header.component';
import { MenuComponent } from './layout/shared/menu/menu.component';
import { SettingComponent } from './layout/shared/setting/setting.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { PersonComponent } from './layout/register/person/person.component';
import { AboutComponent } from './layout/help/about/about.component';
import { UserComponent } from './layout/register/user/user.component';
import { LoginComponent } from './layout/login/login.component';
import { BoxComponent } from './components/controls/box/box.component';
import { BoxErrorComponent } from './components/controls/box-error/box-error.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { GridControlComponent } from './components/controls/grid-control/grid-control.component';
import { AgGridModule } from 'ag-grid-angular';
import { InputComponent } from './components/controls/input/input.component';
import { InputCheckComponent } from './components/controls/input-check/input-check.component';
import { InputDateComponent } from './components/controls/input-date/input-date.component';
import { StandardFormComponent } from './components/controls/standard-form/standard-form.component';
import { NgSelect2Module } from 'ng-select2';
import { HttpClientModule } from '@angular/common/http';
import { InputBaseComponent } from './components/controls/input-base/input-base.component';
import { PersonInfoComponent } from './layout/shared/person/person-info/person-info.component';
import { BoxSuccessComponent } from './components/controls/box-success/box-success.component';
import { ModalComponent } from './components/controls/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { UserSettingComponent } from './components/controls/settings/user-setting/user-setting.component';
import { GeneralSettingComponent } from './components/controls/settings/general-setting/general-setting.component';
import { SystemSettingComponent } from './components/controls/settings/system-setting/system-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SettingComponent,
    HomeComponent,
    AuthenticationComponent,
    PersonComponent,
    AboutComponent,
    UserComponent,
    LoginComponent,
    BoxComponent,
    BoxErrorComponent,
    ButtonComponent,
    GridControlComponent,
    InputComponent,
    InputCheckComponent,
    InputDateComponent,
    StandardFormComponent,
    InputBaseComponent,
    PersonInfoComponent,
    UserInfoComponent,
    BoxSuccessComponent,
    ModalComponent,
    ForgotPasswordComponent,
    UserSettingComponent,
    GeneralSettingComponent,
    SystemSettingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelect2Module,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [FormBuilder, Person, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
