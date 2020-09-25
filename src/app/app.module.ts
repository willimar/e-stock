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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
