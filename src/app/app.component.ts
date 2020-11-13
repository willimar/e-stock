import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  public majorVersion = 1;
  public minorVersion = 0;
  public release = 1;
  public build = 54;
  public companyName = 'Mundo Conecto';
  public appName = 'e-stock';
  public description = 'Simple system to record info about servers hosts.';
  public copyRight = 'Ⓒ Copyright 2020';
  public author = 'Willimar Augusto Rocha';
  public cityApiUrl = 'https://cityapp-api.herokuapp.com/graphql';

  fileVersion(): string {
    return `${this.majorVersion}.${this.minorVersion}.${this.release}.${this.build}`;
  }

  applicationTitle(): string {
    return `${this.companyName} - ${this.appName}`;
  }

  constructor() {

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }
}
