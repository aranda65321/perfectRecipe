import { Component, Input } from '@angular/core';
import { MenuDto } from '../../../domain/dto/MenuDto';

@Component({
  selector: 'left-small-menu',
  templateUrl: './left-small-menu.component.html',
  styleUrl: './left-small-menu.component.css'
})
export class LeftSmallMenuComponent {

  @Input() show: boolean = false;
  @Input() menus: MenuDto[] = [];

}
