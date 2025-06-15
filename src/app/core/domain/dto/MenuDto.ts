import { MenuParentDto } from './MenuParentDto';
export interface MenuDto {
  id?: string;
  name?: string;
  description?: string;
  creationDate?: string;
  langCode?: string;
  iconClass?: string;
  url?: string;
  type?: string;
  children?: MenuDto[];
  parent?: string;
  menuRole?: {
    id?: string
  }
}
