import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Translate } from '../../../../../locales/translate';
import { Guid } from '../../../../../models/shared/guid';
import { OperationType } from '../../../../../services/enums/operation-type.enum';
import { Statement } from '../../../../../services/enums/statement.enum';
import { IService } from '../../../../../services/interfaces/iservice-interface';
import { GraphClientService } from '../../../../../services/shared/graph-client.service';
import { SettingComponent } from '../../../setting/setting.component';

@Component({
  selector: 'app-person-info-view',
  templateUrl: './person-info-view.component.html',
  styleUrls: []
})
export class PersonInfoViewComponent implements OnInit {

  @Input() service: IService;
  @Input() translate: Translate;

  cityName: string;
  cityId: Guid;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getCity(): string {
    this.loadCity();
    return this.cityName;
  }

  loadCity(): void {
    if (this.service.entity.personInfo.birthCity === undefined || this.service.entity.personInfo.birthCity === '') {
      this.cityName = '';
      return;
    }

    if (this.service.entity.personInfo.birthCity === this.cityId) {
      return;
    }

    const client = new GraphClientService(this.http);
    const body = client.appendBody('city');

    body.resultFields.push('id');
    body.resultFields.push('name');

    body.appendArgument('id').appendCheck(OperationType.EqualTo, Statement.And, this.service.entity.personInfo.birthCity);

    client.resolve(SettingComponent.cityApiUrl);

    client.result.subscribe(content => this.mapper(content));
  }

  private mapper(json: any): void {
    const states: any[] = json.data.city;

    states.forEach(item => {
      const city = {
        id: item.initials,
        text: item.name
      };

      this.cityName = `${city.text}, `;
      this.cityId = this.service.entity.personInfo.birthCity;
    });
  }

}
