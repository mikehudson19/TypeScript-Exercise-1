import { User } from './user';
import { Validation } from './validation';
import { Arrays } from './arrays'; 



// Validate & register user
document.getElementById('register')?.addEventListener('click', () => {
  const user: User | void = Validation.validateInputs();
}
)


// Run array methods
document.getElementById('arrays')?.addEventListener('click', () => {
  Arrays.numbersFilter();
  Arrays.stringReplace();
  Arrays.stringRemove();
  Arrays.numbersPop();
  Arrays.numbersPush();
  Arrays.numbersIndex();
  Arrays.stringSlice();
  Arrays.numbersUnshift();
  Arrays.arrayConcat();
})