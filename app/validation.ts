import { Utility } from './utility';
import { User } from './user';

export class Validation {


  static validateInputs(): User | void {

    let validatedUser: User;

    const forenames: string = Utility.getInputValue('forenames');
    const surname: string = Utility.getInputValue('surname');
    const nickname: string = Utility.getInputValue('nickname');
    const email: string = Utility.getInputValue('email');
    const password: string = Utility.getInputValue('password');
    const cPassword: string = Utility.getInputValue('cPassword');

    if (forenames.length < 1) {
      console.error('Invalid forename.');
    } else if (surname.length < 2) {
      console.error('Invalid surname.');
    } else if (email.length < 4 && !email.includes('@')) {
      console.error('Invalid email.');
    } else if (password.length < 4) {
      console.error('Invalid password.');
    } else if (password !== cPassword) {
      console.error('Password must match.');
    } else {
      validatedUser = new User(forenames, surname, nickname, email, password, cPassword);
      console.log('Validation successful.');
      return validatedUser;
    }
    
  }
}