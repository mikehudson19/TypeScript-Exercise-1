export class Utility {

  static getInputValue(elementId: string): string {
    const userInput: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId)!;
    return userInput.value;

  };
  }
