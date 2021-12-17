// Primitives
let age: number;

age = 1;

let username: string;

username = '123';

let isWho: boolean;

isWho = true;

// More complex
let hobbies: Array<string>;
hobbies = ['asd', 'asd'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'asdas',
  age: 25,
};

let people: Person[];

// Type inference
let course: string | number = 'typescript';
course = 12345;

// Functions, parameters, etc.
function add_(a: number, b: number): number {
  return a + b;
}

function print_output(value: any): void {
  console.log(value);
}

// Generics
function insertAt<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updated = insertAt(demoArray, -1);
const strArray = insertAt(['a', 'b', 'c'], 'd');

updated[0].split('');
