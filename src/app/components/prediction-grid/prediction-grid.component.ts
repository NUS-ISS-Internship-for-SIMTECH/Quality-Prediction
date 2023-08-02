import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { CellClickEvent } from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-prediction-grid',
  templateUrl: './prediction-grid.component.html',
  styleUrls: ['./prediction-grid.component.scss'],
})
export class PredictionGridComponent {
  @Input() workOrderData: any[] = [];
  @Output() messageToParent = new EventEmitter<string>();
  public selectableSettings!: SelectableSettings;
  public workOrderSelection: number[] = [0];

  constructor() {
    this.setSelectableSettings();
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
