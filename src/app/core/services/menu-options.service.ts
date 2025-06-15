import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuOptionsService {
  private openMenu = new Subject<boolean>();
  open$ = this.openMenu.asObservable();

  emitToggleMenuEvent(value: boolean) {
    this.openMenu.next(value);
  }

  constructor() { }
}
