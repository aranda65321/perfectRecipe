import { Component, Input } from '@angular/core';
import { DomainDto } from '../../../core/domain/dto/DomainDto';
import { MenuDto } from '../../../core/domain/dto/MenuDto';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() domainConfiguration: DomainDto = {}
  @Input() menusParent: MenuDto[] = [];


  constructor() {
  }
}
