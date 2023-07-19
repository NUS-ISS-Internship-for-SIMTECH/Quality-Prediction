import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-custom-sample',
  templateUrl: './indicator-custom-sample.component.html',
  styleUrls: ['./indicator-custom-sample.component.scss'],
})
export class IndicatorCustomSampleComponent {
  @Input() name: string | undefined;
  @Input() group: string | undefined;
  @Input() callout: string | undefined;
  @Input() details: string[] | undefined;
  @Input() size: string | undefined;
  @Input() status: 'success' | 'warning' | 'error' | undefined;
}
