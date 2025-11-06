// #1. false-г true болгох массив үүсгээрэй.
// const booleans = [false, false, true, true];

// for (i = 0; i < booleans.length; i++) {
//   if (booleans[i] === false) {
//     booleans[i] = true;
//   }
// }

// console.log(booleans);

// #2. Бүх оюутны насны нийлбэрийг ол.
// const students = [
//   { name: "Bat", age: 20 },
//   { name: "Saraa", age: 22 },
// ];
// let sum = 0;

// for (i = 0; i < students.length; i++) {
//   sum += students[i].age;
// }

// console.log(sum);

// #3. 600-с их үнэтэй бүтээгдэхүүнийг хэвлэ.
// const products = [
//   { title: "Uut", price: 500 },
//   { title: "Sav", price: 800 },
// ];

// for (i = 0; i < products.length; i++) {
//   if (products[i].price > 600) {
//     console.log(products[i].price);
//   }
// }

// #4. Бүх ажилтны нэрийг хэвлэ.
// const employees = [
//   { name: "Amgalan", department: "IT" },
//   { name: "Nomin", department: "HR" },
// ];
// let sum = 0;
// for (i = 0; i < employees.length; i++) {
//   sum = employees[i].name;
//   console.log(sum);
// }

// #5. Хамгийн их хуудастай номыг ол.
// const books = [
//   { title: "Mongoliin tuuh", pages: 150 },
//   { title: "Gazar zui", pages: 130 },
// ];

// let max = books[0];

// for (i = 0; i < books.length; i++) {
//   if (max.pages < books[i].pages) {
//     max = books[i];
//   }
// }

// console.log(max);

// #6. 90-с их оноотой оюутны нэрийг хэвлэ.
// const students = [
//   { name: "Bat", score: 85 },
//   { name: "Saraa", score: 92 },
// ];

// for (i = 0; i < students.length; i++) {
//   if (students[i].score > 90) {
//     console.log(students[i].name);
//   }
// }

// #7. stock нь 0 биш бүтээгдэхүүнийг ол.
// const products = [
//   { title: "Uut", stock: 5 },
//   { title: "Sav", stock: 0 },
// ];

// let sum = 0;

// for (i = 0; i < products.length; i++) {
//   if (products[i].stock > 0) {
//     console.log(products[i]);
//   }
// }

// #8. Бүх цалингийн нийлбэр ол.
// const employees = [
//   { name: "Amgalan", salary: 1000 },
//   { name: "Nomin", salary: 1500 },
// ];

// let sum = 0;

// for (i = 0; i < employees.length; i++) {
//   sum += employees[i].salary;
// }
// console.log("tsalingiin niilber: " + sum);

// #9. 2005 оноос хойш хэвлэгдсэн номыг ол.
// const books = [
//   { title: "Mongoliin tuuh", year: 2000 },
//   { title: "Gazar zui", year: 2010 },
// ];

// for (i = 0; i < books.length; i++) {
//   if (books[i].year > 2005) {
//     console.log(books[i]);
//   }
// }

// #10. Насны дундажийг ол.
// const students = [
//   { name: "Bat", age: 20 },
//   { name: "Saraa", age: 22 },
// ];

// let sum = 0;

// for (i = 0; i < students.length; i++) {
//   sum += students[i].age / 2;
// }
// console.log("nasnii dundaj: " + sum);

// #11. Бүх үнэ 10%-иар нэмэгдүүлсэн шинэ array үүсгэ.
// const products = [
//   { title: "Uut", price: 500 },
//   { title: "Sav", price: 800 },
// ];

// for (i = 0; i < products.length; i++) {
//   const total = (products[i].price * 10) / 100 + products[i].price;

//   products[i].price = total;
// }

// console.log(products);

//  #1. Хамгийн өндөр үндсэн дүн (math + english + science) бүхий оюутны нэрийг ол.
// const students = [
//   { name: "Bat", math: 85, english: 90, sciene: 95 },
//   { name: "Saraa", math: 92, english: 88, science: 100 },
// ];

// let topStudent = students[0];
// let topTotal = students[0].math + students[0].english + students[0].science;

// for (i = 1; i < students.length; i++) {
//   const total = students[i].math + students[i].english + students[i].science;
//   if (total > topTotal) {
//     topTotal = total;
//     topStudent = students[i];
//   }
//   console.log(topStudent.name);
// }

//  #2. Цалин + bonus - tax хамгийн их ажилтны нэрийг ол.
// const employees = [
//   { name: "Nomin", salary: 1500, bouns: 300, taxRate: 0.2 },
//   { name: "Amgalan", salary: 1000, bonus: 200, taxRate: 0.1 },
// ];

// let topEmployees = employees[0];
// let topTotal = employees[0].salary + employees[0].bonus + employees[0].taxRate;

// for (i = 1; i < employees.length; i++) {
//   const total = employees[i].salary + employees[i].bonus + employees[i].taxRate;
//   if (total > topTotal) {
//     topTotal = total;
//     topEmployees = employees[i];
//   }
//   console.log(topEmployees.name);
//   console.log(topTotal);
// }

// #3. Борлуулалтын нийт орлого (price * sold * (1 - discount)) хамгийн их бүтээгдэхүүнийг ол.
const products = [
  { title: "Uut", price: 500, sold: 10, discount: 0.1 },
  { title: "Sav", price: 800, sold: 5, discount: 0.2 },
];
