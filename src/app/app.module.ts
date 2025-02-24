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
import { UserSettingComponent } from './layout/shared/setting/tabs/user-setting/user-setting.component';
import { GeneralSettingComponent } from './layout/shared/setting/tabs/general-setting/general-setting.component';
import { SystemSettingComponent } from './layout/shared/setting/tabs/system-setting/system-setting.component';
import { LocaleComponent } from './layout/shared/header/locale/locale.component';
import { ButtonPannelComponent } from './components/controls/button-pannel/button-pannel.component';
import { ContactListComponent } from './layout/shared/person/contact-list/contact-list.component';
import { ContactItemComponent } from './layout/shared/person/contact-list/contact-item/contact-item.component';
import { AddressListComponent } from './layout/shared/person/address-list/address-list.component';
import { AddressItemComponent } from './layout/shared/person/address-list/address-item/address-item.component';
import { DocumentListComponent } from './layout/shared/person/document-list/document-list.component';
import { DocumentItemComponent } from './layout/shared/person/document-list/document-item/document-item.component';
import { PersonViewComponent } from './layout/shared/person/person-view/person-view.component';
import { PersonInfoViewComponent } from './layout/shared/person/person-view/person-info-view/person-info-view.component';
import { DatePipe } from '@angular/common';

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
    SystemSettingComponent,
    LocaleComponent,
    ButtonPannelComponent,
    ContactListComponent,
    ContactItemComponent,
    AddressListComponent,
    AddressItemComponent,
    DocumentListComponent,
    DocumentItemComponent,
    PersonViewComponent,
    PersonInfoViewComponent
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
  providers: [FormBuilder, Person, ModalComponent, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
