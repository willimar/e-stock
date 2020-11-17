import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: []
})
export class SettingComponent implements OnInit {

  public static estockApiUrl : string = 'https://e-stock-api.herokuapp.com';
  public static estockViewUrl : string = 'https://e-stock-view.herokuapp.com'; // "https://localhost:5001";//
  public static authApiUrl : string = 'https://authentic-api.herokuapp.com'; // 'http://crud-api.eastus.azurecontainer.io/api';
  public static cityApiUrl : string = 'https://cityapp-api.herokuapp.com/graphql';
  public static postalCodeApiUrl: string = 'https://postalcode-api.herokuapp.com';

  public static authToken : string = '';
  public static systemName: string = 'e-stock';
  public static logged: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
