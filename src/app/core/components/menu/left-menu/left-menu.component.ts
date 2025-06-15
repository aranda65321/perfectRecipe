import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDto } from '../../../domain/dto/MenuDto';
import { MenuOptionsService } from '../../../services/menu-options.service';

@Component({
  selector: 'left-menu-component',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent implements OnChanges {

  @Input() menusParent: MenuDto[] = [];
  protected showSidebar: boolean = false;
  protected menus: MenuDto[] = [];
  protected showBackChildren: boolean = false;

  constructor(private menuOptionService: MenuOptionsService,
    private router: Router
  ) { }

  ngOnChanges(): void {
    this.menus = this.menusParent;
  }

  protected menuToggleEvent() {
    this.showSidebar = !this.showSidebar;
    this.menuOptionService.emitToggleMenuEvent(this.showSidebar);
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
    else if (menu.children !== undefined && menu.children.length > 0) {
      this.menus = menu.children;
      this.showBackChildren = true;
    }
  }

  protected reloadMenuParents(): void {
    this.menus = this.menusParent;
    this.showBackChildren = false;
  }
}
