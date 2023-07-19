import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { PanelBarExpandMode } from '@progress/kendo-angular-layout';
import { config } from 'src/app/setting/sidebar.config';
import { APP_OPTIONS } from 'src/app/setting/behavior.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('toggleSidebar', [
      state('collapsed, void', style({ transform: 'translateX(-100%)' })),
      state('expanded', style({ transform: 'translateX(0)' })),
      transition('collapsed <=> expanded', [animate(200), animate(200)]),
    ]),
  ],
})
export class SidebarComponent {
  menuGroups = config;
  isPanelItemCollapsedByDefault: boolean;
  expandMode: PanelBarExpandMode = 0;
  constructor() {
    this.isPanelItemCollapsedByDefault =
      APP_OPTIONS.sidemenu.panelItemCollapsedByDefault;
  }

  showFirstPanelItems(index: number): any {
    if (!this.isPanelItemCollapsedByDefault && index === 0) {
      return true;
    }
    return;
  }
}
