import { Component } from '@angular/core';
import { YOUR_APP_NAME } from 'src/app/setting/behavior.config';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isMenuCollapsed = true;
  isSideMenuSelected = true;
  appName = YOUR_APP_NAME;
  menuToggle(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
