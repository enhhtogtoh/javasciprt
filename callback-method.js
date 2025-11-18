//  forEach- utga butsaadaggui.
//  at - index butsaadag ghdee callback method bish buh zuil deer ashiglaj boln
//  find - 1 element butsaan value === 10 gvl 10g butsaan
// 1. Тооноос бүрдэх массивыг квадрат болгон буцаах (map)

// const numbers = [1, 2, 3];
// const numbersMap = numbers.map((value) => value * value);
// console.log(numbersMap);

// 2. Сөрөг тоонуудыг шүүх (filter)

// const numbers = [1, -3, 4, -2];
// const numbersFilter = numbers.filter((value) => value >= 0);
// console.log(numbersFilter);

// 3. Массивын нийлбэрийг олох (reduce)

// const numbers = [5, 10, 3];
// const numbersReduce = numbers.reduce((acc, value) => acc + value);
// console.log(numbersReduce);

// 4. Объектуудын массивыг нэрcийн жагсаалт болгож хувиргах

// const users = [{ name: "Bold" }, { name: "Suren" }];
// const usersMap = users.map((users) => users.name);
// console.log(usersMap);

// 5. Массив доторх үгсийн уртын нийлбэрийг ол (reduce)

// const words = ["hi", "hello", "mongolia"];
// const wordsReduce = words.reduce(
//   (acc, currentvalue) => acc + currentvalue.length,
//   0
// );
// console.log(wordsReduce);

// -------array-method-map-------

// #1. Тоон массивыг квадратласан шинэ массив болго.

// const numbers = [2, 4, 9];
// const numbersMap = numbers.map((index) => index * index);
// console.log(numbersMap);

// #2. Тоонуудыг “тэгш” эсвэл “сондгой” гэсэн стринг болгон хувирга.

// const number = [2, 4, 5];
// const numberMap = number.map((value) =>
//   value % 2 === 0 ? "tegsh" : value || value % 2 === 1 ? "sondgoi" : value
// );

// const numbers = numberMap.toLocaleString();
// console.log(numbers);

// #3. Объектын массив дотроос зөвхөн name утгуудын массив үүсгэ.

// const users = [{ name: "Bat" }, { name: "Bold" }];
// const user1 = users.map((users) => users.name);
// console.log(user1);

// #4. Наснуудын массиваас 2025 он дээр үндэслэн төрсөн жилүүдийн массив гарга.

// const ages = [22, 24, 26];
// const agesMap = ages.map((value) => 2025 - value);
// console.log(agesMap);

// #5. Стринг бүрийн эхний үсгийг том болго.

// const strings = ["aaaa", "bbbb", "cccc"];
// const stringsMap = strings.map(
//   (value) => value.charAt(0).toLocaleUpperCase() + value.slice(1)
// );
// console.log(stringsMap);

// #6. Стринг массивыг тэдгээрийн уртын массив болгон хувирга.

// const strings = ["dfdffd", "dfdfdfd"];
// const stringsMap = strings.reduce((acc, value) => acc + value.length, 0);
// console.log(stringsMap);

// #7. Бүтээгдэхүүний массив дахь бүх үнэд 10% нэмсэн шинэ массив гарга.

// const person = [
//   { name: "Bat", price: 1500 },
//   { name: "Bold", price: 2000 },
//   { name: "Saraa", price: 2500 },
// ];
// const personMap = person.map(
//   (person) => (person.price * 10) / 100 + person.price
// );
// console.log(personMap);

// #8. Тоонуудыг “₮1,200” гэх мэт форматтай мөнгөн дүнгийн стринг болго.

// const numbers = [1200, 1500, 1800];
// const result = numbers.map((value) => "₮" + value.toLocaleString());
// const strings = result.toLocaleString();
// console.log(strings);

// #9. Boolean утгуудыг “ТИЙМ” эсвэл “ҮГҮЙ” стринг болгон хувирга.

// const unen = [true, false, true];
// const converted = unen.map((value) => (value ? "ТИЙМ" : "ҮГҮЙ"));
// console.log(converted);

// #10. firstName, lastName талбартай объектуудыг “lastName, firstName” стринг болгон хувирга.

// const users = [{ firstname: "Bat" }, { lastname: "Bold" }];
// const result = users.map()

// -------array-method-filter-------

// #11. Массив дахь бүх сөрөг тоонуудыг шүүж хая.

// const numbers = [1, -2, 4, -6, 7];
// const result = numbers.filter((num) => num > 0);
// console.log(result);

// #12. Урт нь 5-аас дээш бүх стрингийг үлдээ.

// const words = ["aaaaa", "hhh", "ssssss", "gggggggg", "ff"];
// const result = words.filter((word) => word.length >= 5);
// console.log(result);

// #13. Хэрэглэгчдийн массиваас 18+ настай хэрэглэгчдийг шүүнэ.

// const users = [
//   { name: "Bat", age: 17 },
//   { name: "Bold", age: 10 },
//   { name: "Saraa", age: 20 },
// ];
// const result = users.filter((value) => value.age >= 18);
// console.log(result);

// #14. Үнэ нь 5000-аас дээш бүтээгдэхүүнүүдийг шүүнэ.

// const products = [
//   { title: "Uut", price: 4500 },
//   { title: "Sav", price: 5500 },
//   { title: "Savh", price: 5100 },
// ];
// const result = products.filter((value) => value.price > 5000);
// console.log(result);

// #15. Массив дотроос зөвхөн тэгш тоонуудыг үлдээгээрэй.

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.filter((num) => num % 2 === 0);
// console.log(result);

// #16. Оноо нь 80-аас дээш оюутнуудыг шүүнэ.

// const students = [
//   { name: "Bold", score: 81 },
//   { name: "Bat", score: 79 },
//   { name: "Saraa", score: 76 },
//   { name: "Tsetsegee", score: 98 },
// ];
// const result = students.filter((score) => score.score > 80);
// console.log(result);

// #17. “а” үсэг агуулсан бүх үгийг шүүнэ.

// const names = ["Bataa", "Saraa", "Hongoroo", "Tsetseg", "Navcaa"];
// const result = names.filter((words) => words.includes("a"));
// console.log(result);

// #18. filter ашиглан массивын давхардсан утгуудыг устга.

// const numbers = [1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 7];
// const result = numbers.filter((item, index) => numbers.indexOf(item) === index);
// console.log(result);

// #19. Үнэн (truthy) утгуудыг үлдэж, бусдыг хая.

// #20. isActive = true объектуудыг шүүнэ.

// -------array-method-reduce-------

// #21. Тоон массивын нийлбэрийг ол.

// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, num) => acc + num, 0);
// console.log(result);

// #22. Тоон массивын дунджийг reduce ашиглан ол.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, num) => acc + num / 2, 0);
// console.log(result);

// #23. Үгсийн массиваас үгийн давтамжийн объект үүсгэ.

// const words = ["apple", "banana", "grape", "apple", "banana"];
// const result = words.reduce((acc, word) => acc[word] + word, 0);
// console.log(result);

// #24. Худалдан авалтын массивын нийт үнийг ол.

// const products = [
//   { title: "Uut", price: 1500 },
//   { title: "Sav", price: 2000 },
//   { title: "Savh", price: 3000 },
// ];
// const result = products.reduce((acc, num) => acc + num.price, 0);
// console.log(result);

// #25. Массивын хамгийн том утгыг reduce ашиглан ол.

// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.reduce((acc, num) => (num > acc ? num : acc));
// console.log(result);

// #26. Массив дахь хамгийн урт стрингийг ол.

// const words = ["waawaassa", "sfasfsdf", "dfsdsfdfsdfsdfsdf", "fdfds"];
// const result = words.reduce((acc, word) => (word < acc ? word : acc));
// console.log(result);

// #27. Объектын массивыг ID-ээр нь объект болгон хувирга (id-тэй map).
// #28. Тоонуудаас нийлбэр, хамгийн их, хамгийн бага утгуудыг нэг reduce-ээр гарга.

// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// const max = numbers.reduce((acc, num) => (num > acc ? num : acc));
// console.log(max);

// const min = numbers.reduce((acc, num) => (num < acc ? num : acc));
// console.log(min);

// #29. Стринг массивыг нэг мөр болгон хооронд нь таслалтайгаар нэгтгэ.

// const string = ["computer", "phone", "tablet"];
// const result = string.reduce((acc, num) => acc + num);
// console.log(result);

// #30. Массив дахь эерэг ба сөрөг тоонуудын тоог нэг reduce дээр тоол.

// const numbers = [1, 2, 3, -5, -7, 4];
// const result = numbers.reduce((acc, num) => acc + num, 0);
// console.log(result);

// ------array-method-find-------

// #31. Массив дотроос анхны сөрөг тоог ол.

// const numbers = [2, 3, -4, 5, -8, 7, -9];
// const result = numbers.find((value) => value < 0);
// console.log(result);

// #32. Хэрэглэгчдийн массиваас email таарах хэрэглэгчийг ол.

// const users = [
//   { name: "Bat", email: "bat@example.com" },
//   {
//     name: "Bold",
//     email: "bold@example.com",
//   },
// ];
// const emailUsers = "bold@example.com";
// const result = users.find((value) => value.email === emailUsers);
// console.log(result);

// #33. Бүтээгдэхүүний массиваас id тохирох бүтээгдэхүүнийг ол.

// const products = [
//   { id: 1, name: "Keyboard", price: 30000 },
//   { id: 2, name: "Mouse", price: 15000 },
//   { id: 3, name: "Monitor", price: 250000 },
// ];
// const targetId = 1;

// const result = products.find((value) => value.id === targetId);
// console.log(result);

// #34. Урт нь 10-аас их анхны стрингийг ол.

// const array = ["hi", "javascript", "hello world", "short", "countryside"];

// const result = array.find((value) => value.length > 10);
// console.log(result);

// #35. Үнэ нь 10000-аас дээш анхны бүтээгдэхүүнийг ол.

// const products = [
//   { id: 1, title: "Book", price: 5000 },
//   { id: 2, title: "Bag", price: 12000 },
//   { id: 3, title: "Laptop", price: 250000 },
// ];

// const result = products.find((value) => value.price > 10000);
// console.log(result);

// -------array--method--some-------

// #36. Массив дотор сөрөг тоо байгаа эсэхийг шалга.

// const numbers = [1, 2, 3, 4, 5, -9];
// const result = numbers.some((value) => value < 0);
// console.log(result);

// #37. Нэрсийн массив дотор “Admin” нэр байгаа эсэхийг some ашиглан шалга.

// const names = ["admin", "operator", "creator"];
// const result = names.some((value) => value.includes("admin"));
// console.log(result);

// #38. Бүтээгдэхүүнүүдийн дунд үнэгүй (price = 0) зүйл байгаа эсэх.

// const products = [
//   { id: 1, title: "Book", price: 0 },
//   { id: 2, title: "Bag", price: 12000 },
//   { id: 3, title: "Laptop", price: 250000 },
// ];
// const result = products.map((value) => value.price);
// const result1 = result.some((value) => value === 0);
// console.log(result1);

// #39. Оюутнуудын дунд 90-аас дээш оноо авсан хүн байгаа эсэх.

// const students = [
//   { name: "Bold", score: 91 },
//   { name: "Bat", score: 79 },
//   { name: "Saraa", score: 76 },
//   { name: "Tsetsegee", score: 98 },
// ];

// const result1 = students.some((value) => value.score > 90);
// console.log(result1);

// #40. Стринг массив дотор хоосон стринг байгаа эсэх.

// const words = ["hello", "world", "js", ""];
// const result = words.some((value) => value === "");
// console.log(result);

// -------array--method--every-------

// #41. Бүх тоонууд эерэг эсэхийг шалга.

// const numbers = [2, 4, 6, 8, 10];
// const result = numbers.every((num) => num % 2 === 0);
// console.log(result);

// #42. Бүх хэрэглэгчид 18-аас дээш настай эсэх.

// const users = [
//   { name: "Bat", age: 21 },
//   { name: "Bold", age: 10 },
//   { name: "Saraa", age: 20 },
// ];
// const result = users.every((num) => num.age > 18);
// console.log(result);

// #43. Бүх бүтээгдэхүүн price талбартай эсэх.

// const products = [
//   { id: 1, title: "Book", price: 0 },
//   { id: 2, title: "Bag", price: 12000 },
//   { id: 3, title: "Laptop", price: 250000 },
// ];

// const result = products.every((value) => "price" in value);
// console.log(result);

// #44. Бүх стрингүүдийн урт 3-аас дээш эсэх.

// const words = ["hello", "world", "javascript"];
// const result = words.every((word) => word.length > 3);
// console.log(result);

// #45. Бүх boolean утга true эсэх.

// const booleans = [true, true, true];
// const result = booleans.every((word) => word === true);
// console.log(result);

// -------array--method--sort-------

// #46. Тоон массивыг өсөхөөр эрэмбэл.

// const numbers = [9, 4, 9, 32, 23, 98, 2, 8, 5];
// const result = numbers.sort((a, b) => a - b);
// console.log(result);

// #47. Стринг массивыг цагаан толгойн дарааллаар эрэмбэл.

// const words = ["banana", "orange", "apple", "grape"];
// const result = words.sort();
// console.log(result);

// #48. Объектын массивыг price-ээр нь өсөхөөр эрэмбэл.

// const cart = [
//   { name: "Book", price: 10, quantity: 2 },
//   { name: "Pen", price: 2, quantity: 5 },
//   { name: "Notebook", price: 5, quantity: 3 },
// ];
// const result = cart.sort((a, b) => a.price - b.price);
// console.log(result);

// #49. Хэрэглэгчдийг name талбараар нь A–Z дарааллаар эрэмбэл.

// const cart = [
//   { name: "Book", price: 10, quantity: 2 },
//   { name: "Pen", price: 2, quantity: 5 },
//   { name: "Notebook", price: 5, quantity: 3 },
// ];
// const result = cart.map((value) => value.name);
// const result1 = result.sort();
// console.log(result1);

// #50. Огноонуудын массивыг earliest → latest дарааллаар эрэмбэл.

// -------methods-11.18--------

// People array-аас 18 ба түүнээс дээш настай хүмүүсийн нэрийг шүүж гарга.

// const people = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 20 },
//   { name: "Jack", age: 18 },
// ];

// const result = people
//   .filter((value) => value.age >= 18)
//   .map((value) => value.name);

// console.log(result);

// Зөвхөн эерэг тоонуудаар массив үүсгэ.

// const nums = [-5, 3, -1, 7, 0];
// const result = nums.filter((value) => value > 0);
// console.log(result);

// 3 аас дээш тооны урттай элементүүдээр массив үүсгэ.

// const words = ["hi", "hello", "yo", "world"];
// const result = words.filter((word) => word.length > 3);
// console.log(result);

// Доорх array аас сондгой тоонуудыг 2 дахин ихэсгэсэн массив үүсгэ.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter((num) => num % 2 === 1);
// const result1 = result.map((num) => num * 2);
// console.log(result1);

// Pass хийсэн сурагдын firstname ийг нь upperCase болгосон array үүсгэ

// const students = [
//   { firstName: "John", lastName: "Doe", passed: true },
//   { firstName: "Jane", lastName: "Smith", passed: false },
//   { firstName: "Alice", lastName: "Jones", passed: true },
// ];

// const result = students.filter((value) => value.passed === true);
// const result1 = result.map((value) => value.firstName.toLocaleUpperCase());

// console.log(result1);

// хамгийн өндөр оноотой 3 дүнгээр нь массив үүсгэ.

// const students = [
//   { name: "A", score: 88 },
//   { name: "B", score: 95 },
//   { name: "C", score: 72 },
//   { name: "D", score: 99 },
//   { name: "E", score: 91 },
// ];
// const result = students.sort((a, b) => b.score - a.score);
// const result1 = result.slice(0, 3);
// const result2 = result1.map((value) => value.name);
// console.log(result2);

// cart дахь бүх бараануудын үнийн дүнгийн нийлбэрийг ол

// const cart = [
//   { name: "Book", price: 10, quantity: 2 },
//   { name: "Pen", price: 2, quantity: 5 },
//   { name: "Notebook", price: 5, quantity: 3 },
// ];
// const result = cart.map((num) => num.price * num.quantity);
// const result1 = result.reduce((acc, num) => acc + num, 0);
// console.log(result1);

// Өгөгдсөн string төрлийн массив дотроос хамгийн урт үгийг ол.

// const words = ["hello", "world", "typescript", "js"];
// const result = words.reduce((acc, num) =>
//   num.length > acc.length ? num : acc
// );
// console.log(result);

// Доорх массивын бүх элементүүдийн үсгийн нийлбэрийг ол

// const words = ["hi", "hello", "hey"];
// const result = words.map((num) => num.length);
// const result1 = result.reduce((acc, num) => acc + num, 0);
// console.log(result1);

// Хамгийн үнэтэй бүтээгдэхүүнийг харуул

// const products = [
//   { name: "Laptop", price: 900 },
//   { name: "Phone", price: 700 },
//   { name: "Monitor", price: 300 },
// ];
// const result = products.reduce((acc, num) =>
//   num.price > acc.price ? num : acc
// );
// console.log(result);

// бүх бүтээгдэхүүний нийлбэр үнийн дүнг ол

// const items = [
//   { name: "Chair", price: 80 },
//   { name: "Desk", price: 120 },
//   { name: "Lamp", price: 150 },
// ];
// const result = items.map((num) => num.price);
// const result1 = result.reduce((acc, num) => acc + num, 0);
// console.log(result1);

// -------llr-urt-bodlogo------

// const leaveRequests = [
//   {
//     employeeId: 1,
//     type: "annual",
//     status: "approved",
//     daysRequested: 5,
//     date: "2025-01-15",
//   },
//   {
//     employeeId: 2,
//     type: "sick",
//     status: "pending",
//     daysRequested: 2,
//     date: "2025-02-10",
//   },
//   {
//     employeeId: 3,
//     type: "annual",
//     status: "approved",
//     daysRequested: 3,
//     date: "2025-03-05",
//   },
//   {
//     employeeId: 4,
//     type: "sick",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-04-01",
//   },
//   {
//     employeeId: 1,
//     type: "unpaid",
//     status: "approved",
//     daysRequested: 4,
//     date: "2025-05-10",
//   },
//   {
//     employeeId: 2,
//     type: "annual",
//     status: "rejected",
//     daysRequested: 2,
//     date: "2025-06-15",
//   },
//   {
//     employeeId: 5,
//     type: "sick",
//     status: "approved",
//     daysRequested: 2,
//     date: "2025-07-12",
//   },
//   {
//     employeeId: 6,
//     type: "annual",
//     status: "approved",
//     daysRequested: 6,
//     date: "2025-08-22",
//   },
//   {
//     employeeId: 3,
//     type: "sick",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-09-04",
//   },
//   {
//     employeeId: 4,
//     type: "unpaid",
//     status: "pending",
//     daysRequested: 2,
//     date: "2025-10-03",
//   },
//   {
//     employeeId: 5,
//     type: "annual",
//     status: "approved",
//     daysRequested: 3,
//     date: "2025-11-14",
//   },
//   {
//     employeeId: 2,
//     type: "sick",
//     status: "approved",
//     daysRequested: 2,
//     date: "2025-12-01",
//   },
//   {
//     employeeId: 6,
//     type: "sick",
//     status: "rejected",
//     daysRequested: 1,
//     date: "2025-01-20",
//   },
//   {
//     employeeId: 3,
//     type: "annual",
//     status: "approved",
//     daysRequested: 2,
//     date: "2025-02-25",
//   },
//   {
//     employeeId: 1,
//     type: "sick",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-03-12",
//   },

//   {
//     employeeId: 1,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-01-05",
//   },
//   {
//     employeeId: 1,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-02-14",
//   },
//   {
//     employeeId: 1,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-03-18",
//   },
//   {
//     employeeId: 1,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-04-09",
//   },
//   {
//     employeeId: 1,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-05-23",
//   },
//   {
//     employeeId: 2,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-06-03",
//   },
//   {
//     employeeId: 2,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-07-16",
//   },
//   {
//     employeeId: 3,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-08-02",
//   },
//   {
//     employeeId: 4,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-09-19",
//   },
//   {
//     employeeId: 5,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-10-05",
//   },
//   {
//     employeeId: 6,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-11-09",
//   },
//   {
//     employeeId: 1,
//     type: "paid",
//     status: "approved",
//     daysRequested: 1,
//     date: "2025-12-13",
//   },
// ];
// const result = leaveRequests.filter((value) => value.status === "approved");
// const result2 = result.reduce((acc, num) => acc + num.daysRequested, 0);
// console.log(result2);

// ----------bodlogo1---------
const products = [
  {
    name: "Smartphone",
    price: 599.99,
    stock: 50,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "Laptop",
    price: 1099.99,
    stock: 30,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Headphones",
    price: 129.99,
    stock: 100,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    stock: 80,
    category: "Sports",
    brand: "Nike",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    stock: 20,
    category: "Home Appliances",
    brand: "Keurig",
  },
  {
    name: "Backpack",
    price: 39.99,
    stock: 60,
    category: "Fashion",
    brand: "Adidas",
  },
  {
    name: "Watch",
    price: 199.99,
    stock: 40,
    category: "Accessories",
    brand: "Casio",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    stock: 25,
    category: "Electronics",
    brand: "Microsoft",
  },
  {
    name: "Sunglasses",
    price: 149.99,
    stock: 70,
    category: "Fashion",
    brand: "Ray-Ban",
  },
  {
    name: "Wireless Speaker",
    price: 89.99,
    stock: 45,
    category: "Electronics",
    brand: "JBL",
  },
];

// 1. duriin category ogohod tuhain category deerh productuudiig haruul.
const result = products.filter((value) => value.category === "Electronics");
console.log(result);

// 2. productuudiin dundaj stock iig ol.
const result1 = result.reduce((acc, num) => acc + num.stock / 5, 0);
console.log(result1);

// 3. olson dundaj stockoos ih stocktoi bvteegdehuunuudiig haruul.
const result2 = result.filter((value) => value.stock >= result1);
console.log(result2);

// 4. dundajaas ih stocktoi bvteegdehuuniin niit uniig garga (Tip: price* stock)
const result3 = result2.map((value) => value.price * value.stock);
console.log(result3);
