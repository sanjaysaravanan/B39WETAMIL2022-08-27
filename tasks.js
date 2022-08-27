
// Object Comparison
var a = { name: 'Person 1', age: 5, id: 99, rollNo: 100 };
var b = { name: 'Person 1', id: 99, age: 5, };

let flag = true;

let iterableObj;

if (Object.keys(a).length > Object.keys(b).length) {
  iterableObj = a;
} else {
  iterableObj = b;
}

for (var key in iterableObj) {
  if (a[key] !== b[key]) {
    flag = false;
    break;
  }
}

console.log(iterableObj);

console.log(flag);