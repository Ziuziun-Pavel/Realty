export interface IUser {
  id: string,
  userName: string,
  userSurname: string,
  userEmail: string,
  password?: string,//TODO: remove element when backend is implemented
}
