const students=[
    {id:21,name:'Topu'},
    {id:22,name:'Manna'},
    {id:27,name:'Disha'},
    {id:29,name:'Priyanka'}
];
const names= students.map(s=>s.name);
const id= students.map(s=>s.id);
const bigger=students.filter(s=>s.id>22);
const bigger1=students.find(s=>s.id>22);
console.log(names);
console.log(id);
console.log(bigger);
console.log(bigger1);
