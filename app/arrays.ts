
export class Arrays {

  static numbersFilter(): void {
    const numbers: number[] = [89, 5, 56, 102, 7];
    const largeNumbers: number[] = numbers.filter((num) => {
      return num > 50;
    })
    console.log(largeNumbers);
  }

  static stringReplace(): void {
    const strings: string[] = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    const splicedStrings: string[] = strings.splice(2, 2, "Cindy", "Zoe");
    console.log(strings);
  }

  static stringRemove(): void {
    const strings: string[] = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    const slicedStrings: string[] = strings.splice(3,1);
    console.log(strings);
  }

  static numbersPop(): void {
    const numbers: number[] = [89, 5, 56, 102, 7];
    numbers.pop();
    console.log(numbers);
  }

  static numbersPush(): void {
    const numbers: number[] = [89, 5, 56, 102, 7];
    numbers.push(78);
    console.log(numbers);
  }

  static numbersIndex(): void {
    const numbers: number[] = [89, 5, 56, 102, 7];
    console.log(numbers.indexOf(5));
  }

  static stringSlice() {
    const strings: string[] = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    const slicedArray: string[] = strings.slice(1, 4);
    console.log(slicedArray);
  }

  static numbersUnshift(): void {
    const numbers: number[] = [89, 5, 56, 102, 7];
    numbers.unshift(67);
    numbers.unshift(14);
    console.log(numbers);
  }

  static arrayConcat(): void {
    const numbers: number[] = [1, 2, 3];
    const strings: string[] = ["a", "b", "c"];
    const newArray = [numbers as unknown as string | number].concat(strings);
    console.log(newArray);
  }
}