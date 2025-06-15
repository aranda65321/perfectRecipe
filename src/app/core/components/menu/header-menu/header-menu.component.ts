import { Component, Input } from '@angular/core';
import { MenuDto } from '../../../domain/dto/MenuDto';
import { MenuOptionsService } from '../../../services/menu-options.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-menu-component',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  @Input() menusParent: MenuDto[] = [];

  constructor(
    private router: Router
  ) {
  }


  protected hasChilds(menu: MenuDto): boolean {
    if (menu !== undefined && menu.children !== undefined && menu.children.length > 0) {
      return true;
    }
    return false;
  }

  protected eventClickMenu(menu: MenuDto): void {
    if (menu.url !== undefined && menu.url !== "") {
      window.location.href = `${menu.url}`;
    }
  }

}
