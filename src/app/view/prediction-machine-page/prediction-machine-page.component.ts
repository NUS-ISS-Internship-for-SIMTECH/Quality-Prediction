import { Component, OnInit } from '@angular/core';
import { TARGET } from 'src/app/setting/behavior.config';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { SelectableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-prediction-machine-page',
  templateUrl: './prediction-machine-page.component.html',
  styleUrls: ['./prediction-machine-page.component.scss'],
})
export class PredictionMachinePageComponent implements OnInit {
  public dashBoardTime: string | undefined;
  timer: any;
  public minYaxisRealTimeChart: number | undefined;
  public maxYaxisRealTimeChart: number | undefined;
  public dateValue: Date = new Date();
  public selectableSettings!: SelectableSettings;
  public passPrediction: number = -1;
  public totalFailPrediction: string = '';
  public isDateUpdated: boolean = true;
  public workOrderChartSeries: any[] = [
    {
      name: '% Pass Prediction',
      data: [],
      markers: {
        size: 5,
        type: 'circle',
        background: 'red',
      },
      color: 'blue',
    },
    {
      name: 'Target',
      data: [],
      markers: {
        visible: false,
      },
      color: '#000000',
    },
  ];
  public categoriesWorkOrderChart: any[] = [];
  public machineId: string | undefined;
  public workOrderSelection: number[] = [];
  public predictionResultList: any[] | undefined;

  public workOrderData: any[] = [];

  constructor(public httpService: HttpserviceService) {}

  ngOnInit(): void {
    this.httpService
      .getWorkOrder(this.dateValue.toISOString())
      .subscribe((prediction) => {
        this.predictionResultList = prediction;
        this.populateWorkOrder();
        this.calTableData();
        this.defaultUpdateIndictor();
      });
  }

  updateWorkOrderData() {
    this.httpService
      .getWorkOrder(this.dateValue.toISOString())
      .subscribe((prediction) => {
        this.predictionResultList = prediction;
        this.populateWorkOrder();
        this.calTableData();
        this.defaultUpdateIndictor();
        this.isDateUpdated = !this.isDateUpdated;
        setTimeout(() => {
          this.isDateUpdated = !this.isDateUpdated;
        }, 50);
      });
  }

  updateIndictor(message: string) {
    this.passPrediction = this.workOrderData[parseInt(message)].passPredict;
    this.totalFailPrediction =
      this.workOrderData[parseInt(message)].failTotalQty;
  }

  public onDateChange(value: Date) {
    this.updateWorkOrderData();
  }

  public defaultUpdateIndictor() {
    this.passPrediction = this.workOrderData.length
      ? this.workOrderData[0].passPredict
      : -1;
    this.totalFailPrediction = this.workOrderData.length
      ? this.workOrderData[0].failTotalQty
      : '';
  }

  public populateWorkOrder() {
    this.workOrderData = [];
    this.predictionResultList?.forEach((value) => {
      let failCnt = value.totalQty - value.predCnt;
      let failTotalQty = failCnt + ' / ' + value.totalQty;
      let passPredict =
        parseFloat(((value.predCnt / value.totalQty) * 100).toFixed(2)) + '';
      let workOrder = Object.assign(
        {},
        value,
        { failTotalQty: failTotalQty },
        { passPredict: passPredict }
      );
      this.workOrderData?.push(workOrder);
    });
  }

  public calTableData() {
    this.workOrderChartSeries[0].data = [];
    this.workOrderChartSeries[1].data = [];
    this.categoriesWorkOrderChart = [];
    this.workOrderData?.forEach((value) => {
      this.workOrderChartSeries[0].data.push(value.passPredict);
      this.workOrderChartSeries[1].data.push(TARGET);
      this.categoriesWorkOrderChart.push(value.id);
    });
    this.minYaxisRealTimeChart =
      Math.min(...this.workOrderChartSeries[0].data) - 10 > 0
        ? Math.min(...this.workOrderChartSeries[0].data) - 10
        : 0;
    this.maxYaxisRealTimeChart =
      Math.max(...this.workOrderChartSeries[0].data) + 10;
  }
}
