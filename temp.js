// let obj = {
//   name: 'jaydev kalariya',
//   id: '38',
// };
// console.log(obj);
// let newobj = obj;
// newobj.id = '51';

// console.log(obj.id, ' ', newobj.id);

// //advantage of using spread operator it do deep copy
// let newobj2 = { ...obj };
// newobj2.id = '100';

// console.log(obj.id, ' ', newobj2.id);

// //REST
// const add = (arr) => {
//   console.log(arr);
// };
// let x = [1, 2, 3];
// add(x);

// let arrr = [1, 2, 3];

// for (const [i, item] of arrr.entries()) {
//   console.log(i, item);
// }

let person = {
  name: 'jaydev kalariya',
  id: '38',
  color: 'green',
  fun(namee) {
    console.log(`${namee}'s favourite color is ${this.color}`);
  },
};

let food = {
  name: 'apple',
  category: 'fruit',
  color: 'yellow',
};

// person.fun();
let newfun = person.fun;
newfun('jaydev');

newfun.call(food, 'hello');
//call method is useful for giving reference to this variable for any new object.
