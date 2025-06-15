import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingSpinnerService } from '../../services/loading-spinner.service';

@Component({
  selector: 'spinner-default',
  templateUrl: './spinners.component.html',
  styleUrl: './spinners.component.css'
})
export class SpinnersComponent {

  constructor(private loadingSpinnerService: LoadingSpinnerService) {
  }

  protected showSpinner(): boolean {
    return this.loadingSpinnerService.getShowSpinner();
  }

}
