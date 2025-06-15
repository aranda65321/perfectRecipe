import { MenuDto } from "./MenuDto";

export interface MenusDomainResponseDto {
  statusCode: string,
  content: MenuDto[]
}
