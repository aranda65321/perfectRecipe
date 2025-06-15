import { Component } from '@angular/core';
import { DomainConfigurationService } from '../core/services/domain-configuration.service';
import { MenuService } from '../core/services/menu.service';
import { DomainDto } from '../core/domain/dto/DomainDto';
import { MenuDto } from '../core/domain/dto/MenuDto';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  protected domainConfiguration: DomainDto = {};
  protected menus: MenuDto[] = [];

  constructor(
    private domainConfigurationService: DomainConfigurationService,
    private menuService: MenuService) {
    this.loadNavbarConfigs();
  }

  private async loadNavbarConfigs() {
    this.domainConfiguration = await this.domainConfigurationService.getDomainConfiguration();
    this.menus = await this.menuService.findMenusByDomainId(this.domainConfiguration.id);
  }
}
