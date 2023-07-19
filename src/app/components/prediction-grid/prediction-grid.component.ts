import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { CellClickEvent } from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-prediction-grid',
  templateUrl: './prediction-grid.component.html',
  styleUrls: ['./prediction-grid.component.scss'],
})
export class PredictionGridComponent implements OnInit {
  @Input() workOrderData: any[] = [];
  @Output() messageToParent = new EventEmitter<string>();
  public selectableSettings!: SelectableSettings;
  public workOrderSelection: number[] = [-1];

  constructor() {
    this.setSelectableSettings();
  }
  ngOnInit(): void {
    console.log('11111');
  }
  public setSelectableSettings(): void {
    this.selectableSettings = {
      mode: 'single',
      drag: 'false',
    } as any;
  }

  public workOrderClickHandler(args: CellClickEvent): void {
    this.messageToParent.emit(this.workOrderSelection[0].toString());
  }
}
