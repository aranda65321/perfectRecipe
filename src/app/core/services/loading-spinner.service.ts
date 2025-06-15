import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private show: boolean = false;

  constructor() { }

  public showSpinner(showSpinner: boolean) {
    this.show = showSpinner;
  }

  public getShowSpinner(): boolean {
    return this.show;
  }
}

