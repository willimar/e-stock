import { Order } from './../enums/order.enum';
import { ArgumentService } from './argument.service';
import { IQueryInfo } from './../interfaces/query-info';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  public queryInfo: IQueryInfo = { limit: 0, page: 0 };
  public arguments: ArgumentService[] = [];
  public resultFields: string[] = [];

    public appendArgument(name: string): ArgumentService {
        const argument: ArgumentService = new ArgumentService(name);
        this.arguments.push(argument);

        return argument;
    }

    public constructor(public name: string) { }

    public toString(): string {
        let body = '@entity(queryInfo:{limit: @limit, page: @page}@arguments){@fieldList}';
        const args: string = this.getArguments();

        body = body.replace('@entity', this.getName(this.name));
        body = body.replace('@limit', this.queryInfo.limit.toString());
        body = body.replace('@page', this.queryInfo.page.toString());
        body = body.replace('@arguments', this.isNullOrWhiteSpace(args) ? '' : `,${args}`);
        body = body.replace('@fieldList', this.resultFields.join(','));

        return body;
    }

    private getArguments(): string {
        const arg = '@name:[@agumentList]';
        const result: string[] = [];

        this.arguments.forEach(item => {
          let argumentItem: string = arg;
          argumentItem = argumentItem.replace('@name', this.getName(item.name));
          argumentItem = argumentItem.replace('@agumentList', this.getChecks(item));

          result.push(argumentItem);
        });

        return result.join(',');
    }

    private getChecks(argument: ArgumentService): string
    {
        const operation = '{operation: @operation, connector: @connector, value: @value}';
        const order = '{order: @order}';
        const result: string[] = [];

        argument.checks.forEach(item => {
          let checkList: string = item.order === Order.none ? operation : order;

          checkList = checkList.replace('@operation', item.operation.toString());
          checkList = checkList.replace('@connector', item.connector.toString());
          checkList = checkList.replace('@value', this.getValue(item.value));
          checkList = checkList.replace('@order', item.order.toString());

          result.push(checkList);
        });

        return result.join(',');
    }

    private getValue(value: any): string {
      if (typeof(value) === 'string') {
        return `\\"${value}\\"`;
      } else if (value instanceof Date) {
        const pipe = new DatePipe('en-US');
        const now: Date = value;
        const myFormattedDate = pipe.transform(now, 'short');
        // 'yyyy-MM-dd HH:mm:ss'
        return `\\"${myFormattedDate}\\"`;
      } else {
        return `${value}`;
      }
    }

    private getName(name: string): string {
        return name[0].toLowerCase() + name.substring(1);
    }

    private isNullOrWhiteSpace(str: any): any {
      return str === null || str.match(/^ *$/) !== null;
    }
}
