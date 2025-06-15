import { TreeNode } from 'primeng/api';
import { MenuDto } from '../dto/MenuDto';
export interface MenuTree {
  key?: string,
  label?: string,
  data?: string,
  icon?: string,
  children?: MenuTree[],
  expanded?: boolean
}

export function convertToMenuTree(menus?: MenuDto[]): MenuTree[] {
  let menusTree: MenuTree[] = [];
  if (menus) {
    menus.forEach(menu => {
      menusTree.push({
        key: menu.id,
        label: menu.name,
        data: menu.description,
        children: convertToMenuTree(menu.children),
        icon: menu.iconClass,
        expanded: true
      });
    });
  }
  return menusTree;
}
