import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelect2Module } from 'ng-select2';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

import { BoxComponent } from 'angular-admin-lte/lib/box/box.component';

import { FooterComponent } from 'angular-admin-lte/lib/layout/footer/footer.component';
import { HeaderComponent } from 'angular-admin-lte/lib/layout/header/header.component';
import { MenuComponentHtml } from './locales/translations/layout/shared/menu.component.html';
import { SettingComponent } from './layout/shared/setting/setting.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { PersonComponent } from './layout/register/person/person.component';
import { UserComponent } from './layout/register/user/user.component';
import { LoginComponent } from './layout/login/login.component';
import { PersonInfoComponent } from './layout/register/shared/person/person-info/person-info.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { UserInfoComponent } from './layout/register/shared/person/user-info/user-info.component';
import { ContactListComponent } from './layout/register/shared/person/contact-list/contact-list.component';
import { AddressListComponent } from './layout/register/shared/person/address-list/address-list.component';
import { DocumentListComponent } from './layout/register/shared/person/document-list/document-list.component';
import { PersonViewComponent } from './layout/register/shared/person/person-view/person-view.component';

import { Person } from './models/registers/person';

import {ContactItemComponent} from './layout/register/shared/person/contact-list/contact-item/contact-item.component';
import {AddressItemComponent} from './layout/register/shared/person/address-item/address-item.component';
import {DocumentItemComponent} from './layout/register/shared/person/document-list/document-item/document-item.component';
import {PersonInfoViewComponent} from './layout/register/shared/person/person-view/person-info-view/person-info-view.component';
import {ButtonPannelComponent} from './components/controls/button-pannel/button-pannel.component';
import {BoxErrorComponent} from './components/controls/box-error/box-error.component';
import {GridControlComponent} from './components/controls/grid-control/grid-control.component';
import {InputComponent} from './components/controls/input/input.component';
import {InputCheckComponent} from './components/controls/input-check/input-check.component';
import {InputDateComponent} from './components/controls/input-date/input-date.component';
import {StandardFormComponent} from './components/controls/standard-form/standard-form.component';
import {InputBaseComponent} from './components/controls/input-base/input-base.component';
import {BoxSuccessComponent} from './components/controls/box-success/box-success.component';
import {ModalComponent} from './components/controls/modal/modal.component';
import {UserSettingComponent} from './layout/shared/setting/tabs/user-setting/user-setting.component';
import {GeneralSettingComponent} from './layout/shared/setting/tabs/general-setting/general-setting.component';
import {SystemSettingComponent} from './layout/shared/setting/tabs/system-setting/system-setting.component';
import {LocaleComponent} from './layout/shared/header/locale/locale.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponentHtml,
    SettingComponent,
    HomeComponent,
    AuthenticationComponent,
    PersonComponent,
    UserComponent,
    LoginComponent,
    PersonInfoComponent,
    UserInfoComponent,
    ForgotPasswordComponent,
    ContactListComponent,
    AddressListComponent,
    DocumentListComponent,
    PersonViewComponent,
    BoxComponent,
    ContactItemComponent,
    AddressItemComponent,
    DocumentItemComponent,
    PersonInfoViewComponent,
    ButtonPannelComponent,
    GeneralSettingComponent,
    SystemSettingComponent,
    BoxErrorComponent,
    GridControlComponent,
    InputComponent,
    InputCheckComponent,
    InputDateComponent,
    StandardFormComponent,
    InputBaseComponent,
    BoxSuccessComponent,
    ModalComponent,
    UserSettingComponent,
    LocaleComponent
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
