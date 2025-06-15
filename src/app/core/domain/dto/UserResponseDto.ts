import { UserDto } from "./UserDto";

export interface UserResponseDto {
  statusCode: string,
  content: UserDto[]
}
