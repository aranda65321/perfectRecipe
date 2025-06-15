import { AfterViewInit, Component, Input } from '@angular/core';
import { MenuDto } from '../../../domain/dto/MenuDto';

@Component({
  selector: 'small-menu-item',
  templateUrl: './small-menu-item.component.html',
  styleUrl: './small-menu-item.component.css'
})
export class SmallMenuItemComponent implements AfterViewInit {

  @Input() menu!: MenuDto;
  protected menuChilds?: MenuDto[] = [];
  protected showChilds: boolean = false;
  protected showBackChildren: boolean = false;

  ngAfterViewInit(): void {
    this.menuChilds = this.menu.children;
  }

  protected mouseEnter(): void {
    this.showChilds = !this.showChilds;
  }

  protected mouseleave(): void {
    this.showChilds = false;
    this.reloadMenus();
  }

  protected mouseEnterChild() {
    this.showChilds = true;
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
    } else if (menu.children !== undefined && menu.children.length > 0) {
      this.showBackChildren = true;
      this.menuChilds = menu.children;
    }
  }

  protected reloadMenus() {
    this.showBackChildren = false;
    this.menuChilds = this.menu.children;
  }
}
