import { FormGroup } from "@angular/forms";
import { Status } from "../../models/enums/status.enum";
import { BaseModel } from "../../models/shared/base-model";
import { Guid } from "../../models/shared/guid";
import { StatusService } from "../enums/status-service.enum";

export interface IService {
  errorMessages: any[];
  messages: any[];
  formGroup: FormGroup[];
  entity: any;
  controller: string;
  domain: string;
  status: StatusService;

  exceptionResolve(e: any): void;
  openError(): void;
  openInfo(): void;
  getCollectionIndex(collection: BaseModel[], id: Guid): number;
  generateDefaultValues(value: BaseModel): void;
  getList(collection: BaseModel[], status: Status): BaseModel[];
  submit(value: any): any;
  save(value: any): void;
  setStatus(value: StatusService): void;
  addMessage(messageType: string, code: number, msg: string, isError: boolean): void;
}
