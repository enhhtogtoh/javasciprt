// #1. өгөгдсөн гурвалжны периметрийг ол.
// const trianglePerimetr = (a, b, c) => {
//   return a + b + c;
// };

// #2. 1,3,5,7,8.7 бүхэл тооны нийлбэр ол.
// const numbersFunction = (a, b, c, d, e) => {
//   return a + b + c + d + parseInt(e);
// };

// #3. өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол.
// const perimeterAndSquare = (a, b) => {
//   const perimeter = (a + b) * 2;
//   const square = a * b;
//   return { perimeter, square };
// };

// #4. өгөгдсөн 98 секундыг минут секунд болго.
// const minutAndSecond = (a) => {
//   const minut = parseInt(a / 60);
//   const second = a % 60;
//   return { minut, second };
// };

// #5. өгөгдсөн 1297 секундыг цаг минут секунд болго.
// const hourMinutSecond = (seconds) => {
//   const hour = parseInt(seconds / 3600);
//   const minut = parseInt((seconds % 3600) / 60);
//   const sec = seconds % 60;
//   return { hour, minut, sec };
// };

// #6. өгөгдсөн 875минут, 88секундыг, секунд руу шилжүүл.
// const minutSecond = (minut, second) => {
//   const seconds = minut * 60 + second;
//   return seconds;
// };

// #7. өгөгдсөн 83цаг, 84минут, 85секундыг секунд руу шилжүүл.
// const second = (hour, minut, second) => {
//   const seconds = hour * 24 * 60 + second;
//   return seconds;
// };

// #8. өгөгдсөн 38 цагийг хоног цагт шилжүүл.
// const dayHour = (hours) => {
//   const day = parseInt(hours / 24);
//   const hour = hours % 24;
//   return { day, hour };
// };

// #9. өгөгдсөн 4хоног, 40цагийг цагт шилжүүл.
// const dayAndHour = (day, hour) => {
//   const hours = day * 24 + hour;
//   return hours;
// };

// #10. өгөгдсөн 90жил, 98сарыг сард шилжүүл.
// const yearOfmonth = (year, month) => {
//   const months = year * 12 + month;
//   return months;
// };

// #11. өгөгдсөн 106 сарыг жил сар руу шилжүүл.
// const months = (year) => {
//   const years = parseInt(year / 12);
//   const month = year % 12;
//   return { years, month };
// };

// #12. өгөгдсөн 4 тооны багыг ол.
// const numbers = (a, b, c, d) => {
//   const minNumbers = Math.min(a, b, c, d);
//   return minNumbers;
// };

// #13. өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол.
// const numbers = (a, b, c, d) => {
//   let mins = 1;
//   if (a < 5) {
//     mins *= a;
//   }
//   if (b < 5) {
//     mins *= b;
//   }
//   if (c < 5) {
//     mins *= c;
//   }
//   if (d < 5) {
//     mins *= d;
//   }
//   return mins;
// };

// #14. өгөгдсөн 4 тооны 5-аас их тоонуудын үржвэрийг ол.
// const numbers = (a, b, c, d) => {
//   let max = 1;
//   if (a > 5) {
//     max *= a;
//   }
//   if (b > 5) {
//     max *= b;
//   }
//   if (c > 5) {
//     max *= c;
//   }
//   if (d > 5) {
//     max *= d;
//   }
//   return max;
// };

// #1. 2 тоог оруулж ихийг нь хэвлэх.
// const numbers = (a, b) => {
//   const maxNumber = Math.max(a, b);
//   return maxNumber;
// };

// #2. тоог тэгш сондгой шалгах.
// const evenOdd = (a) => {
//   return a % 2 === 0;
// };

// #3. 3 ширхэг тоон дундах хамгийн их/хамгийн бага
// const numbers = (a, b, c) => {
//   const maxNumber = Math.max(a, b, c);
//   const minNumber = Math.min(a, b, c);
//   return { maxNumber, minNumber };
// };

// #4. Стрингийн уртыг хэвлэх
// const string = (a) => {
//   const stringLong = a.length;
//   return stringLong;
// };

// #5. Стринг эхний болон сүүлчийн тэмдгийг нийлүүлэх
// const string = (a) => {
//   const stringPlus = a[0] + a[a.length - 1];
//   return stringPlus;
// };

// #6. Стрингийг том үсэг болгож хувиргах
// const letter = (a) => {
//   const bigLetter = a.toUpperCase();
//   return bigLetter;
// };

// #7. Стринг дотор тодорхой тэмдэгт байгаа эсэхийг шалгах.

// #8. Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz, хоюуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ
// const number = (a) => {
//   const fizz = a % 3 === 0;
//   const buzz = a % 5 === 0;
//   const fizzbuzz = a % 3 === 0 || a % 5 === 0;
//   return { fizz, buzz, fizzbuzz };
// };

// #9. Хоёр string-ийг нэгтгэх a = Hello b = World
// const strings = (a, b) => {
//   return a + b;
// };

// #10. 2 тооны дундаж
// const numbersAverage = (a, b) => {
//   return (a + b) / 2;
// };

// #11. Тоо эерэг эсвэл сөрөг эсэхийг шалгах
// const number = (a) => {
//   return a % 2 === 0;
// };

// #12. Тоог 10-аас их эсэхийг шалгах
// const number = (a) => {
//   return a > 10;
// };

// #13. Хоёр тоо тэнцүү эсэхийг шалгах
// const numbers = (a, b) => {
//   return a === b;
// };

// #14. Тоог 100-аас бага, 0-аас их эсэхийг шалгах
// const number = (a) => {
//   return a > 0 && a < 100;
// };

// #15. Тоог 10%, 20% эсвэл 30% өсгөх
// const number = (a) => {
//   const tenPercent = a + a * 0.1;
//   const twentyPercent = a + a * 0.2;
//   const thirtyPercent = a + a * 0.3;
//   return { tenPercent, twentyPercent, thirtyPercent };
// };

// #16. Тоог 100-аас хэтэрвэл 100 болгож хэвлэх
// const number = (a) => {
//   if (a > 100) {
//     return 100;
//   } else {
//     return a;
//   }
// };

// #17. Хоёр тэмдэгт ижил эсэхийг шалгах
// const symbol = (a, b) => {
//   return a === b;
// };

// #18.Хоёр оронтой тооны цифрүүдийг сольж урвуулах
// const number = (num) => {
//   const endNum = Math.floor(num / 10);
//   const frontNum = num % 10;
//   const result = frontNum * 10 + endNum;
//   return result;
// };

// #19. Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх
// const number = (num) => {
//   return num < 0 ? -num : num;
// };

// #20. 1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол.
const millsecond = (a) => {
  const now = new Date();
  const start = new Date("1970.01.01T00:00:00");
  const nowStart = now - start;
  //   const newDate =
};
console.log(new Date());

// #21. Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ.
// const weekend = (day) => {
//   if (day === 1 || day === 6) return "Monday-д явахгүй";
//   if (day === 2 || day === 7) return "Tuesday-д явахгүй";
//   if (day === 3 || day === 8) return "Wednesday-д явахгүй";
//   if (day === 4 || day === 9) return "Thursday-д явахгүй";
//   if (day === 5 || day === 0) return "Friday-д явахгүй";
// };
