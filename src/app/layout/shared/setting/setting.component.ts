import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: []
})
export class SettingComponent implements OnInit {

  public static crudApiUrl = 'https://localhost:5001'; // 'http://crud-api.eastus.azurecontainer.io/api';
  public static cityApiUrl = 'https://cityapp-api.herokuapp.com/graphql';

  constructor() { }

  ngOnInit(): void {
  }

}
