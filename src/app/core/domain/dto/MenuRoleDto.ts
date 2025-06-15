import { MenuDto } from "./MenuDto";
import { RoleDto } from "./RoleDto";

export interface MenuRoleDto {
  id?: string,
  name?: string,
  menus?: MenuDto[],
  menuRoles?: MenuRoleDto[],
  role?: RoleDto,
  menu?: MenuDto
}
