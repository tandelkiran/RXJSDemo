import "./style.css";
import { from, fromEvent } from "rxjs";
import { map, filter, find } from "rxjs/operators";
import { repeatWhen, mapTo, startWith } from "rxjs/operators";

// Using number [MAP]
console.log("******** Example 1 (MAP) ********");
const source$ = from([1, 2, 3, 4, 5]);
const filterEvenData = source$.pipe(map(val => val + 10));
const subscribe1 = filterEvenData.subscribe(val => console.log(val));

// Using object - map name
console.log("******** Example 2 (MAP) ********");
const person$ = from([
  { name: "Kiran", age: 20 },
  { name: "Abhishek", age: 19 },
  { name: "Mitul", age: 18 },
  { name: "Ronak", age: 17 }
]);
const example2 = person$.pipe(map(({ name }) => name));
const subscribe2 = example2.subscribe(val => console.log(val));

// Even Number [Filter]
console.log("******** Example 3 (FILTER) ********");
const numbers = from([1, 2, 3, 4, 5, 6, 7, 8]);
const filterData = numbers.pipe(filter(num => num % 2 === 0));
const subscribe3 = filterData.subscribe(val =>
  console.log(`Even number: ${val}`)
);

// Using Object - Age Filter [Filter]
console.log("******** Example 4 (FILTER) ********");
const user$ = from([{ name: "Joe", age: 31 }, { name: "Bob", age: 25 }]);
const filterAgeData = user$.pipe(filter(person => person.age >= 30));
const subscribe4 = filterAgeData.subscribe(val =>
  console.log(`Over 30: ${val.name}`)
);

// Using Numbers [Find]
console.log("******** Example 5 (Find) ********");
const observable = from([2, 30, 22, 5, 60, 1]);

observable.pipe(find(x => x > 10));

const subscription = observable.subscribe(
    (value) => console.log(value)
);

subscription.unsubscribe();

// [Find]
// console.log("******** Example 6 (Find) ********");
// const status = document.getElementById("status");
// const clicks$ = fromEvent(document, "click");
// clicks$
//   .pipe(
//     find((event: any) => event.target.id === "box"),
//     mapTo("Found!"),
//     startWith("Find me!"),
//     repeatWhen(() =>
//       clicks$.pipe(filter((event: any) => event.target.id !== "box"))
//     )
//   )
//   .subscribe(message => (status.innerHTML = message));
