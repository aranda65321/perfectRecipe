import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomainDto } from '../../domain/dto/DomainDto';
import { MenuOptionsService } from '../../services/menu-options.service';
import { MenuDto } from '../../domain/dto/MenuDto';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() domainConfiguration: DomainDto = {}
  @Input() menusParent: MenuDto[] = [];

  protected showBigHeader: boolean = false;

  constructor(private menuOptionService: MenuOptionsService) {
  }

  protected getNameSiteFirstPart(nameSite?: string) {
    if (nameSite) {
      return nameSite.split(" ")[0];
    }
    return "";
  }

  protected getNameSiteSecondPart(nameSite?: string) {
    if (nameSite) {
      return nameSite.split(" ")[1];
    }
    return "";
  }


}
