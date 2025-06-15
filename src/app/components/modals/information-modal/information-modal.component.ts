import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InformationModal } from '../../../core/domain/beans/InformationModal';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrl: './information-modal.component.css'
})
export class InformationModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InformationModal,
    private dialogRef: MatDialogRef<InformationModalComponent>) {

  }

  protected closeModal(): void {
    this.dialogRef.close();
  }

}
