import { IUser } from './IUser';

export class User implements IUser {
  forenames!: string;
  surname!: string;
  nickname?: string;
  email!: string;
  password!: string;
  cPassword!: string

  constructor(forenames: string, surname: string, nickname: string, email: string, password: string, cPassword: string) {
    this.forenames = forenames,
    this.surname = surname,
    this.nickname = nickname,
    this.email = email,
    this.password = password,
    this.cPassword = cPassword
  }
}