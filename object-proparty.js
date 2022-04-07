

const student = [
    { id: 1, name:"metul"},
    { id: 2, name:"romel"},
    { id: 3, name:"rakib"},
    { id: 4, name:"sakib"},
    { id: 5, name:"razal"},
    { id: 6, name:"gagal"}
]
// const student2 = [];
// for(let  i = 0; i<student.length;i++){
//     const element = student[i];
//     student2.push(element.name);

// }
// console.log(student2);

const result = student.map(s => s.name);
console.log(result);