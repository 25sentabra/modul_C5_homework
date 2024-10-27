
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('book', book);


const result = [{
  name: list.name,
  age: Number(list.age),
  prof: list.prof,
}];
console.log('list:', list);