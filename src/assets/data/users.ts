import { IUser } from '../../app/core/models/user';
import { Role } from '../../app/core/models/role.rs';

export const regUsers:  Array<IUser> =  [
  {
    id: 'admin1',
    userName: 'Admin',
    userSurname: 'Admin',
    userEmail: 'admisitrator1@gmail.com',
    role: Role.Admin,
    password: '12345678',
  },
];


