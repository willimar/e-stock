import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Translate } from '../../../locales/translate';
import { AboutComponentHtml } from '../../../locales/translations/layout/help/about/about.component.html';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {

  copyRight: string;
  author: string;
  title: string;
  version: string;

  translate: Translate = new Translate(new AboutComponentHtml());

  constructor(private appComponent: AppComponent) {
    this.copyRight = this.appComponent.copyRight;
    this.author = this.appComponent.author;
    this.title = this.appComponent.applicationTitle();
    this.version = this.appComponent.fileVersion();
  }

  ngOnInit(): void {
  }

}
