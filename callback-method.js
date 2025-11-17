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
// #37. Нэрсийн массив дотор “Admin” нэр байгаа эсэхийг some ашиглан шалга.
// #38. Бүтээгдэхүүнүүдийн дунд үнэгүй (price = 0) зүйл байгаа эсэх.
// #39. Оюутнуудын дунд 90-аас дээш оноо авсан хүн байгаа эсэх.
// #40. Стринг массив дотор хоосон стринг байгаа эсэх.
