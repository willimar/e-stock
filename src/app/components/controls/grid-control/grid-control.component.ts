import { GraphClientService } from './../../../services/shared/graph-client.service';
import { SettingComponent } from './../../../layout/shared/setting/setting.component';
import { IColumnDef } from './../../interfaces/icolumn-def';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-control',
  templateUrl: './grid-control.component.html',
  styleUrls: []
})
export class GridControlComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  @Input() columnDefs: IColumnDef[] = [];
  @Input() viewName: string;
  @Input() rowData: any[];
  @Input() url: string;
  @Input() step = 250;
  @Input() width: 100;
  @Input() height: number;
  @Input() viewUrl: string;

  @Output() selectionChanged = new EventEmitter();

  formGroupRules: FormGroup;
  graphClient: GraphClientService;
  page: number = 1;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.height = window.innerHeight - 90;
  }

  private clientPrepare(page: number): void {
    this.graphClient = new GraphClientService(this.http);
    const body = this.graphClient.appendBody(this.viewName);

    this.columnDefs.forEach(item => {
      body.resultFields.push(item.field);
    });

    body.queryInfo.limit = this.step;
    body.queryInfo.page = page;
    body.queryInfo.validateTocken = SettingComponent.authToken;
    body.queryInfo.systemName = SettingComponent.systemName;
    this.loadData();
  }

  onSelectionChanged(value: any): void {
    this.selectionChanged.emit(value);
  }

  responseResolve(content: any) {
    if (content.data[this.viewName] !== undefined && content.data[this.viewName].length > 0) {
      this.gridMount(content);
      this.page++;
      this.clientPrepare(this.page);
    }
  }

  exceptionResolve(error: any) {
    console.log('dando erro');
    console.log(error);
  }

  loadData() {
    this.graphClient.resolve(this.viewUrl);

    this.graphClient.result.subscribe(
      (data: any[]) => this.responseResolve(data),
      (error: any) => this.exceptionResolve(error));
  }

  private gridMount(data: any): void {
    if (this.rowData == null) {
      this.rowData = data.data[this.viewName];
    } else {
      data.data[this.viewName].forEach(item => {
        this.rowData.push(item);
      });

      this.agGrid.rowData = this.rowData;
      this.agGrid.api.setRowData(this.rowData);
    }
  }

  ngOnInit(): void {
    const grid = document.getElementById('agGrid');

    grid.style.width = `${this.width}%`;
    grid.style.height = `${this.height - 170}px`;

    this.clientPrepare(1);
  }

}
