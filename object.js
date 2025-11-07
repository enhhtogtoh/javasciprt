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

// const products = [
//   { title: "Uut", price: 500, sold: 10, discount: 0.1 },
//   { title: "Sav", price: 800, sold: 5, discount: 0.2 },
// ];

//  #4. Pages * rating хамгийн их утгатай номыг ол.

// const books = [
//   { title: "Mongoliin tuuh", pages: 120, year: 2000, rating: 4.5 },
//   { title: "Gazar zui", pages: 150, year: 2010, rating: 4.8 },
// ];

// let max = books[0];
// let bestScore = books[0].pages * books[0].rating;

// for (i = 1; i < books.length; i++) {
//   const score = books[i].pages * books[i].rating;
//   if (score > bestScore) {
//     max = books[i];
//     bestScore = score;
//   }
// }
// console.log(max);

// #5. Хамгийн их дүнтэй оюутны нэрийг ол.
// const students = [
//   { name: "Bat", math: 70, english: 80, science: 90 },
//   { name: "Saraa", math: 60, english: 85, science: 95 },
//   { name: "Naran", math: 100, english: 90, science: 80 },
// ];

// let max = students[0];
// let bestScore = students[0].math + students[0].english + students[0].science;

// for (i = 0; i < students.length; i++) {
//   const total = students[i].math + students[i].english + students[i].science;
//   if (total > bestScore) {
//     max = students[i];
//     bestScore = total;
//   }
// }
// console.log(max);

//  #6. Active = true ажилтнуудын дундаж цалинг ол.
// const employees = [
//   { name: "Amgalan", salary: 1000, active: true, department: "IT" },
//   { name: "Nomin", salary: 1500, active: false, department: "HR" },
//   { name: "Bayar", salary: 1200, active: true, department: "IT" },
// ];

// let max = employees[0];

// for (i = 1; i < employees.length; i++) {
//   const total = (employees[0].salary + employees[i].salary) / 2;
//   if (employees[i].active === true) {
//     max = employees[i].active;
//     console.log(total);
//   }
// }

//  #7. Category бүрийн нийт орлогыг ол.
// const products = [
//   { title: "Uut", price: 500, sold: 10, category: "Plastic" },
//   { title: "Sav", price: 800, sold: 5, category: "Metal" },
//   { title: "Savkh", price: 600, sold: 12, category: " Plastic" },
// ];

// let max = {};

// for (i = 0; i < products.length; i++) {
//   const total = products[i];
//   const rev = total.price * total.sold;
//   if (max[total.category] === undefined) {
//     max[total.category] = rev;
//   } else {
//     max[total.category] += rev;
//   }
// }
// console.log(max);

//  #8. Нийт дүн 270-с их оюутны нэрийг ол.
// const students = [
//   { name: "Bat", math: 85, english: 90, science: 95 },
//   { name: "Saraa", math: 92, english: 88, science: 100 },
// ];

// let max = students[0];
// let bestScore = students[0].math + students[0].english + students[0].science;

// for (i = 1; i < students.length; i++) {
//   const total = students[i].math + students[i].english + students[i].science;
//   if (total > 270) {
//     max = total;
//   }
// }
// console.log(max);

//  #9. Total revenue хамгийн их номыг ол.
// const books = [
//   { title: "Mongoliin tuuh", price: 1200, sold: 10, discount: 0.1 },
//   { title: "Gazar zui", price: 1500, sold: 5, discount: 0.05 },
// ];

// let maxBooks = books[0];
// let maxRevenue = books[0].price * books[0].sold * books[0].discount;

// for (i = 1; i < books.length; i++) {
//   const total = books[i].price * books[i].sold * books[i].discount;
//   if (total > maxRevenue) {
//     maxRevenue = total;
//     maxBooks = books[i];
//   }
// }
// console.log(maxBooks);

//  #10. Department = “IT” ажилтнуудын дундаж цалинг ол.
// const employees = [
//   { name: "Amgalan", salary: 1000, bonus: 200, department: "IT" },
//   { name: "Nomin", salary: 1500, bonus: 300, department: "HR" },
//   { name: "Bayar", salary: 1200, bonus: 100, department: "IT" },
// ];

// let max = {};

// for (i = 1; i < employees.length; i++) {
//   const total = employees[i];
//   const rev = (total.salary + total.bonus) / 2;
//   if (max[total.department] === undefined) {
//     max[total.department] = rev;
//   } else {
//     rev += max[total.category];
//   }
// }
// console.log(max);

// #11. Хамгийн бага дүнтэй оюутны нэрийг ол.
// const students = [
//   { name: "Bat", math: 70, english: 80, science: 90 },
//   { name: "Saraa", math: 60, english: 85, science: 95 },
//   { name: "Naran", math: 100, english: 90, science: 80 },
// ];

// let min = students[0];
// let minStudents = students[0].math + students[0].english + students[0].science;

// for (i = 1; i < students.length; i++) {
//   const total = students[i].math + students[i].english + students[i].science;
//   if (total < minStudents) {
//     minStudents = total;
//     min = students[i];
//   }
// }
// console.log(min);

//  #11. Total revenue хамгийн бага бүтээгдэхүүнийг ол.
// const products = [
//   { title: "Uut", price: 500, sold: 10, discount: 0.1 },
//   { title: "Sav", price: 800, sold: 5, discount: 0.2 },
//   { title: "Savh", price: 600, sold: 12, discount: 0.15 },
// ];

// let min = products[0];
// let minProducts = products[0].price * products[0].sold * products[0].discount;
// let minn = {};

// for (i = 1; i < products.length; i++) {
//   const total = products[i].price * products[i].sold * products[i].discount;
//   if (total < minProducts) {
//     minProducts = total;
//     min = products[i];
//   }
// }
// console.log(min.title);

// #12. (2025 - year) * rating хамгийн их номыг ол.
// const books = [
//   { title: "Mongoliin tuuh", pages: 120, year: 2000, rating: 4.5 },
//   { title: "Gazar zui", pages: 150, year: 2010, rating: 4.8 },
//   { title: "Uls tur", pages: 200, year: 2005, rating: 4.2 },
// ];
// let max = books[0];
// let maxBooks = (2025 - books[0].year) * books[0].rating;

// for (i = 1; i < books.length; i++) {
//   const total = (2025 - books[i].year) * books[i].rating;
//   if (total > maxBooks) {
//     maxBooks = total;
//     max = books[i];
//   }
// }
// console.log(max);

// #13. Age 21-аас их оюутны дундаж дүнг ол.
// const students = [
//   { name: "Bat", age: 20, math: 70, english: 80 },
//   { name: "Saraa", age: 22, math: 60, english: 85 },
//   { name: "Naran", age: 21, math: 90, english: 95 },
// ];

// let max = students[0];
// let maxStudents = (students[0].math + students[0].english) / 2;

// for (i = 1; i < students.length; i++) {
//   const total = (students[i].math + students[i].english) / 2;
//   if (total >= 21) {
//     max = total;
//   }
//   console.log(max);
// }

// #14. Tax хассан нийт цалин хамгийн их ажилтны нэрийг ол.
const employees = [
  { name: "Amgalan", salary: 1000, bonus: 200, taxRate: 0.1 },
  { name: "Nomin", salary: 1500, bonus: 300, taxRate: 0.2 },
  { name: "Bayar", salary: 1200, bonus: 100, taxRate: 0.15 },
];

let max = employees[0];
let maxEmployees =
  employees[0].salary + employees[0].bonus - employees[0].taxRate;

for (i = 1; i < employees.length; i++) {
  const total = employees[i].salary + employees[i].bonus - employees[i].taxRate;
  if (total > maxEmployees) {
    maxEmployees = total;
    max = employees[i];
  }
  // console.log(max);
}
console.log(max.name);
