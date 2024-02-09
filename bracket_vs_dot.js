let obj = {
  firstname: 'jaydev',
  lastname: 'kalariya',
  id: '38',
};

let result = prompt('choose among the firstname,lastname or id');
console.log(obj.result); //gives undeined result
console.log(obj[result]); //gives correct result
