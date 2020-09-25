import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent implements OnInit {

  version: string;
  copyRight: string;
  title: string;

  constructor(private appComponent: AppComponent) {
    this.version = this.appComponent.fileVersion();
    this.copyRight = this.appComponent.copyRight;
    this.title = this.appComponent.applicationTitle();
  }

  ngOnInit(): void {
  }

}
