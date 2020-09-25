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

  @Output() selectionChanged = new EventEmitter();

  formGroupRules: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.height = window.innerHeight;
  }

  private clientPrepare(page: number): void {
    const graphClient = new GraphClientService(this.http);
    const body = graphClient.appendBody(this.viewName);

    this.columnDefs.forEach(item => {
      body.resultFields.push(item.field);
    });

    body.queryInfo.limit = this.step;
    body.queryInfo.page = page;

    graphClient.resolve(`${SettingComponent.crudApiUrl}/graphql`);

    graphClient.result.subscribe(content => {
      if (content.data[this.viewName] !== null && content.data[this.viewName].length > 0) {
        this.gridMount(content);
        this.clientPrepare(page + 1);
      }
    });
  }

  onSelectionChanged(value: any): void {
    this.selectionChanged.emit(value);
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
