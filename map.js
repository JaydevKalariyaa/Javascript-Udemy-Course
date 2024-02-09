const obj = [
  {
    id: 1,
    name: 'jaydev kalariya',
  },
  {
    id: 2,
    name: 'kushang jariwala',
  },
  {
    id: 3,
    name: 'jatin agrawal',
  },
  {
    id: 4,
    name: 'devangiri goswami',
  },
  {
    id: 5,
    name: 'vishal prajapati',
  },
];
console.log(obj);

obj.map((val) => {
  val.username = val.name
    .toLowerCase()
    .split(' ')
    .map((val2) => val2[0])
    .join('');
});
console.log(obj);

let arr = [1, 500, -2, 6, 100];

const val = arr.reduce((acc, val) => {
  if (acc < val) return val;
  else return acc;
}, arr[0]);
console.log(val);
