import { Role } from './role.rs';

export interface IUser {
  id: string,
  userName: string,
  userSurname: string,
  userEmail: string,
  role?: Role,
  password?: string, //TODO: remove element when backend is implemented
}
