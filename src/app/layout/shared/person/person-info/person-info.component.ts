import { Statement } from './../../../../services/enums/statement.enum';
import { OperationType } from './../../../../services/enums/operation-type.enum';
import { SettingComponent } from './../../setting/setting.component';
import { Order } from './../../../../services/enums/order.enum';
import { GraphClientService } from './../../../../services/shared/graph-client.service';
import { PersonInfo } from './../../../../models/registers/person-info';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ISelect } from './../../../../services/interfaces/select';
import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../../models/registers/person';
import { FormBaseComponent } from '../../../../components/controls/form-base.component';
import { Guid } from '../../../../models/shared/guid';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: []
})
export class PersonInfoComponent extends FormBaseComponent<Person> implements OnInit {

  cities: ISelect[] = [];
  states: ISelect[] = [];

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    super();

    this.loadStates();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.pattern(/^[A-Z][a-z]+? [A-Z].{3}/)]),
      birthDay: this.formBuilder.control('', [Validators.required]),
      birthState: this.formBuilder.control('', []),
      birthCity: this.formBuilder.control('', []),
      gender: this.formBuilder.control('', [Validators.required]),
      maritalStatus: this.formBuilder.control('', [Validators.required]),
      specialNeeds: this.formBuilder.control('', []),
      nickName: this.formBuilder.control('', [])
    }, {validator: PersonInfoComponent.equalTo});
    this.service.formGroup.push(this.formGroupRules);
  }

  savePerson(form: PersonInfo): void {
    this.service.entity.personInfo.name = form.name;
    this.service.entity.personInfo.birthDay = form.birthDay;
    this.service.entity.personInfo.gender = form.gender;
    this.service.entity.personInfo.nickName = form.nickName;
    this.service.entity.personInfo.specialNeeds = typeof(form.specialNeeds) !== 'boolean' ? false : form.specialNeeds;
    this.service.entity.personInfo.maritalStatus = form.maritalStatus;
  }

  setBirthCity(value: any): void {
    this.service.entity.personInfo.birthCity = value;
  }

  setBirthState(value: any): void {
    this.service.entity.personInfo.birthState = value;
    this.cities = [];
    this.loadCities(value);
  }

  getState(): string {
    return this.service.entity.personInfo.birthState;
  }

  getStates(): any[] {
    const result = [];

    this.states.forEach(item => {
      result.push({id: item.id, text: item.text});
    });

    return result;
  }

  getCity(): Guid {
    return this.service.entity.personInfo.birthCity;
  }

  getCities(): any[] {
    const result = [];

    this.cities.forEach(item => {
      result.push({id: item.id, text: item.text});
    });

    return result;
  }

  getGenders(): any[] {
    const result = [];

    result.push({id: 1, text: "Female"});
    result.push({id: 2, text: "Male"});

    return result;
  }

  getMaritalStatus(): any[] {
    const result = [];

    result.push({id: 1, text: "Married"});
    result.push({id: 2, text: "Single"});
    result.push({id: 3, text: "Widower"});

    return result;
  }

  private loadStates(): void {
    const client = new GraphClientService(this.http);
    const body = client.appendBody('state');

    body.resultFields.push('initials');
    body.resultFields.push('name');

    body.appendArgument('name').appendOrder(Order.asc);

    client.resolve(SettingComponent.cityApiUrl);

    client.result.subscribe(content => this.stateMapper(content));
  }

  private loadCities(state: string): void {
    const client = new GraphClientService(this.http);
    const body = client.appendBody('city');

    body.resultFields.push('id');
    body.resultFields.push('name');

    body.appendArgument('uf').appendCheck(OperationType.EqualTo, Statement.And, state);
    body.appendArgument('name').appendOrder(Order.asc);

    client.resolve(SettingComponent.cityApiUrl);

    client.result.subscribe(content => this.cityMapper(content));
  }

  private stateMapper(json: any): void {
    const states: any[] = json.data.state;

    states.forEach(item => {
      const state = {
        id: item.initials,
        text: item.name
      };

      this.states.push(state);
    });
  }

  private cityMapper(json: any): void {
    if (json.data === undefined) {
      return;
    }

    const cities: any[] = json.data.city;

    cities.forEach(item => {
      const city = {
        id: item.id,
        text: item.name
      };

      this.cities.push(city);
    });
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

}
