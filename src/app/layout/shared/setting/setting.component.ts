import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: []
})
export class SettingComponent implements OnInit {

  public static crudApiUrl : string = "";
  public static authApiUrl : string = 'https://authentic-api.herokuapp.com'; // 'http://crud-api.eastus.azurecontainer.io/api';
  public static cityApiUrl : string = 'https://cityapp-api.herokuapp.com/graphql';
  public static postalCodeApiUrl: string = 'https://postalcode-api.herokuapp.com';
  public static authToken : string = '';
  public static logged: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
