import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from './core/services/loading-spinner.service';
import { Domain } from 'domain';
import { DomainConfigurationService } from './core/services/domain-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() {
  }

}

