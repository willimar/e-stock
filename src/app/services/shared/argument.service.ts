import { Order } from './../enums/order.enum';
import { Statement } from './../enums/statement.enum';
import { OperationType } from './../enums/operation-type.enum';
import { ICheck } from './../interfaces/check';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {

  public checks: ICheck[] = [];

    constructor(public name: string) {
    }

    public appendCheck(oper: OperationType, conect: Statement, val: any): ArgumentService {

      const check: ICheck = {
        operation: oper,
        connector: conect,
        value: val,
        order: Order.none
      };

      this.checks.push(check);

      return this;
    }

    public appendOrder(sort: Order): ArgumentService {
      const check: ICheck = {
        order: sort,
        connector: Statement.And,
        operation: OperationType.EqualTo,
        value: null
      };

      this.checks.push(check);

      return this;
    }
}
