import { Order } from './../enums/order.enum';
import { Statement } from './../enums/statement.enum';
import { OperationType } from './../enums/operation-type.enum';

export interface ICheck {
  operation: OperationType;
  connector: Statement;
  order: Order;
  value: any;
}
