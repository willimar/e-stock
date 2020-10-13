import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBaseComponent } from '../../components/controls/form-base.component';
import { SettingComponent } from '../../layout/shared/setting/setting.component';
import { Address } from '../../models/registers/address';
import { OperationType } from '../enums/operation-type.enum';
import { Statement } from '../enums/statement.enum';
import { GraphClientService } from './graph-client.service';

@Injectable({
  providedIn: 'root'
})
export class PostalCodeService {

  constructor(private graphQl: GraphClientService) { }

  loadAddress(cep: string): any{

    const address: Address = new Address();
    const isBrazilianCode = FormBaseComponent.postalCodeFormat.test(cep);

    if(isBrazilianCode){
      this.graphQl.body = [];
      const body = this.graphQl.appendBody('address');

      body.resultFields.push('city {name}');
      body.resultFields.push('district');
      body.resultFields.push('streetName');
      body.resultFields.push('postalCode');

      body.appendArgument('postalCode').appendCheck( OperationType.EqualTo, Statement.And, cep );

      this.graphQl.resolve(`${SettingComponent.postalCodeApiUrl}/graphql`);

      return this.graphQl.result;
    }
}
}
