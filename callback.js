// #1. greet(name, callback) — “Hello, [name]!” гэж хэвлээд дараа нь callback-ийг дууд.

// const greet = (name, callback) => {
//   console.log(`Hello, ${name}!`);
//   callback();
// };
// const printHello = () => {
//   console.log("Hello1111");
// };
// greet("James", printHello);

// #2. add(a, b, callback) — 2 тоог нийлүүлээд үр дүнг callback-р буцаа.

// const secondFunction = (a, b, callback) => {
//   const templateString = `${a}, ${b}`;
//   callback(templateString);
// };
// const print = (text) => {
//   console.log(text);
// };
// secondFunction(1, 2, print);

// #3. calculateSquare(num, callback) — тооны квадратыг тооцоод callback-д дамжуул.

// const calculateSquare = (num, callback) => {
//   const templateString = `${num}`;
//   const hariu = templateString * num;
//   callback(hariu);
// };
// const print = (text) => {
//   console.log(text);
// };
// calculateSquare(5, print);

// #4. sayGoodbye(callback) — “Goodbye!” гэж хэвлээд дараа нь callback-г ажиллуул.

// const sayGoodbye = (text1, callback) => {
//   const templateString = `${text1}`;
//   callback(templateString);
// };
// const print = (text) => {
//   console.log(text);
// };
// sayGoodbye("GoodBye!", print);

// #5. displaySum(a, b, callback) — нийлбэрийг тооцоод callback ашиглан хэвлэ.

// const displaySum = (a, b, callback) => {
//   const templateString = `${a + b}`;
//   callback(templateString);
// };
// const print = (text) => {
//   console.log(text);
// };
// displaySum(10, 3, print);

// #6. checkEven(num, callback) — тоо тэгш эсэхийг шалгаад үр дүнг callback-д өг.

// const checkEven = (num, callback) => {
//   const nums = `${num % 2 === 0}`;
//   callback(nums);
// };
// const print = (text) => {
//   console.log(text);
// };
// checkEven(11, print);

// #7. showAlert(callback) — confirm("Continue?") true бол callback-г ажиллуул.

// const showAlert = (callback) => {
//   const templateString = `${"Continue?" === "Continue?"}`;
//   callback(templateString);
// };
// const print = (text) => {
//   console.log(text);
// };
// showAlert(print);

// #8. repeatThreeTimes(callback) — callback-г 3 удаа ажиллуул.

// const repeatThreeTimes = (callback) => {
//   callback();
//   callback();
//   callback();
// };
// const print = (text) => {
//   console.log("callback");
// };
// repeatThreeTimes(print);

// #9. printArray(arr, callback) — массивын элемент бүрт callback-г ажиллуул.

// const printArray = (arr, callback) => {
//   const templateString = `${[arr]}`;
//   for (i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };
// const print = (num) => {
//   console.log(num);
// };
// printArray([5, 4, 3, 2, 1], print);

// #10. getLength(str, callback) — string-ийн уртыг callback-р буцаа.

// const getLength = (str, callback) => {
//   const templateString = `${str.length}`;
//   callback(templateString);
// };
// const print = (text) => {
//   console.log(text);
// };
// getLength("Callback", print);

// #11. toUpperCase(str, callback) — үгийг том үсэг болгон callback-д өг.

// const toUpperCase = (str, callback) => {
//   const templateString = `${str.toUpperCase()}`;
//   callback(templateString);
// };
// const print = (text) => {
//   console.log(text);
// };
// toUpperCase("callback", print);

// #12. randomNumber(callback) — 1–10 хооронд санамсаргүй тоо гаргаад callback-д өг.

// const randomNumber = (callback) => {
//   const random = Math.floor(Math.random() * 10) + 1;
//   callback(random);
// };
// const print = (num) => {
//   console.log(num);
// };
// randomNumber(print);

// #13. checkPositive(num, callback) — тоо эерэг эсэхийг шалгаад callback-д функцээр хэвлэ.

// const checkPositive = (num, callback) => {
//   const eyreg = `${num % 2 === 0 && "true"}`;
//   const surug = `${num % 2 === 1 && "false"}`;
//   callback(eyreg, surug);
// };
// const print = (num) => {
//   console.log(num);
// };
// checkPositive(12, print);

// #14. checkStringLength(str, callback) — урт нь 5-аас урт эсэхийг callback-д функцээр хэвлэ.

// const checkStringLength = (str, callback) => {
//   if (str.length >= 5) {
//     console.log("Long");
//   }
//   if (str.length < 5) {
//     console.log("Short");
//   }
//   callback();
// };
// const print = (text) => {
//   console.log();
// };
// checkStringLength("sdsss", print);

// #15. checkStartsWith(str, char, callback) — string тухайн үсгээр эхэлж байгаа эсэхийг callback-д функцээр хэвлэ.

// const checkStartsWith = (str, char, callback) => {
//   const templateString = `${str}`;
//   const templateString1 = `${str[0].includes(char)}`;
//   console.log(templateString, templateString1);
// };
// const print = (num) => {
//   console.log(num);
// };
// checkStartsWith("callback", "c", print);

// #16. checkLogin(username, password, callback) — зөв хэрэглэгчийг шалгаад callback-д функцээр true false хэвлэ.

// const checkLogin = (username, password, callback) => {
//   const userName = "Enhhtogtoh";
//   const passWord = "123444@";
//   if (username === userName) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if (password === passWord) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   callback(userName, passWord);
// };
// const print = (msg) => {
//   console.log();
// };
// checkLogin("Enhhtogtoh", "123444@", print);

// #17. isAdult(age, callback) — нас 18-аас дээш бол true-г callback-д өг.

// const isAdult = (age, callback) => {
//   const templateString = `${age >= 18}`;
//   callback(templateString);
// };
// const print = (num) => {
//   console.log(num);
// };
// isAdult(20, print);

// #18. checkNumberType(num, callback) — тоо сондгой эсвэл тэгш гэдгийг callback-д өг.

// const checkNumberType = (num, callback) => {
//   const tegsh = `${num % 2 === 0}`;
//   const sondgoi = `${num % 2 === 1}`;
//   callback(tegsh, sondgoi);
// };
// const print = (num) => {
//   console.log(num);
// };
// checkNumberType(5, print);

// #19. printEach(arr, callback) — массивын элемент бүрт callback-г ажиллуул.

// const printEach = (arr, callback) => {
//   const templateString = `${[arr]}`;
//   for (i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };
// const print = (num) => {
//   console.log(num);
// };
// printEach([5, 4, 3, 2, 1], print);

// #20. repeatNTimes(n, callback) — callback-г n удаа ажиллуул.

// const repeatNTimes = (n, callback) => {
//   const templateString = `${n}`;
//   for (i = 0; i < n; i++) {
//     callback();
//   }
// };
// const print = () => {
//   console.log("Hello");
// };
// repeatNTimes(4, print);

// #21. countToFive(callback) — 1-ээс 5 хүртэл тоо хэвлээд дараа нь callback-г дуудаж “Done” гэж хэл.

// const countToFive = (callback) => {
//   for (i = 1; i <= 5; i++) {
//     console.log(i);
//   }
//   callback("Done");
// };
// const print = (msg) => {
//   console.log(msg);
// };
// countToFive(print);

// #22. sumArray(arr, callback) — нийлбэрийг тооцоод callback-д дамжуул.

// const sumArray = (arr, callback) => {
//   const templateString = `${arr + arr}`;
//   callback(templateString);
// };
// const print = (num) => {
//   console.log(num, "Niilber");
// };
// sumArray(4, print);
