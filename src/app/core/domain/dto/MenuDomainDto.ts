import { DomainDto } from "./DomainDto";
import { MenuDto } from "./MenuDto";

export interface MenuDomainDto {
  id: string;
  domainId: string;
  domain: DomainDto
  menu: MenuDto
}
