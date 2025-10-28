// const aaa = "aaaa";
// const bbb = 123;
// // 1. цагийг минут руу шилжүүлэх.
// const hour = "60";
// console.log(hour * 2);
// console.log(hour * 12);
// console.log(hour * 2 + 30);
// // 2. тэгш "even" or сондгой "odd".
// let a = 2,
//   b = 7,
//   c = 1;
// console.log(a % 2 === 0 && "even");
// console.log(b % 2 === 1 && "odd");
// console.log(c % 2 === 1 && "odd");
// // 3. өсөх дараалал тийм "true" or үгүй "false".
// const numbers = (a, b, c) => a < b && b < c;
// console.log(numbers(1, 8, 3));
// console.log(numbers(1, 3, 8));
// // 4. хамгийн их утга.
// const ihtoo = (a, b, c) => Math.max(a, b, c);
// console.log(ihtoo(9, 4, 3));
// console.log(ihtoo(1, 7, 5));

// const bagatoo = (a, b, c) => Math.min(a, b, c);
// console.log(bagatoo(2, 3, 4));
// console.log(bagatoo(20, 30, 40));
// // 5. буурах эрэмбэ.
// const points = [40, 60, 90, 10, 30];
// points.sort(function (a, b) {
//   return b - a;
// });
// console.log(points);
// // 1. өгөгдсөн гурвалжны периметрийг ол.
// const perimetr = (a, b, c) => a + b + c;
// console.log(perimetr(3, 4, 5));
// console.log(perimetr(6, 7, 8));
// // 2. бүхэл тооны нийлбэрийг ол.
// const num = 8.7;
// console.log(parseInt(num) + 1 + 3 + 5 + 7);
// // 3. өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол.
// const talbai = (a, b, s) => (s = a * b);
// console.log(talbai(10, 5));

// const perimetrs = (a, b, p) => (p = (a + b) * 2);
// console.log(perimetrs(10, 5));
// // 4. өгөгдсөн секундыг минут секунд болго.
// const seconds = "98";
// const minut = parseInt(seconds / 60);
// const second = seconds % 60;
// console.log(minut, "мин", second, "сек");
// // 5. өгөгдсөн секундыг цаг минут секунд болго.
// const seconds1 = "1297";
// const hour1 = parseInt(seconds1 / 3600);
// const minut1 = parseInt((seconds1 % 3600) / 60);
// const sec = seconds1 % 60;
// console.log(hour1, "цаг", minut1, "мин", sec, "сек");
// // 6. өгөгдсөн минут, секундыг, секунд руу шилжүүл.
// // 7. өгөгдсөн цаг, минут, секундыг секунд руу шилжүүл.
// // 1. өгөгдсөн цагийг хоног цагт шилжүүл.
// const tsag = "38";
// const day = parseInt(tsag / 24);
// const tsag1 = tsag % 24;
// console.log(day, "хоног", tsag1, "цаг");
// // 2. өгөгдсөн 4хоног, 40цагийг цагт шилжүүл.
// let honog = 4;
// tsag2 = 40;
// const hour2 = honog * 24 + tsag2;
// console.log(hour2, "цаг");
// // 3. өгөгдсөн 106 сарыг жил сар луу шилжүүл.
// const month = "106";
// const year = parseInt(month / 12);
// const mounth = month % 12;
// console.log(year, "жил", mounth, "сар");
// // 4. өгөгдсөн 90 жил, 98 сарыг сард шилжүүл.
// let jil = 90;
// sar = 98;
// const year1 = jil * 12 + sar;
// console.log(year1, "сар");
// // 5. өгөгдсөн 4 тооны багыг ол. (9 3 2 8)
// const num1 = 9;
// const num2 = 3;
// const num3 = 2;
// const num4 = 8;
// let min = num3;
// if (min > num1) {
//   min = num1;
// }
// if (min > num2) {
//   min = num2;
// }
// if (min > num4) {
//   min = num4;
// }
// if (min > num3) {
//   min = num3;
// }
// console.log(min, "бага тоо");
// // 6. өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. (2 9 4 3)
// const numbers1 = 2;
// const numbers2 = 9;
// const numbers3 = 4;
// const numbers4 = 3;
// let minn = 1;
// if (numbers1 < 5) {
//   minn *= numbers1;
// }
// if (numbers2 < 5) {
//   minn *= numbers2;
// }
// if (numbers3 < 5) {
//   minn *= numbers3;
// }
// if (numbers4 < 5) {
//   minn *= numbers4;
// }
// console.log(minn);
// 7. өгөгдсөн 6 тооны 5-аас их тоонуудын үржвэрийг ол. (11 9 4 3 6 2)
// const too1 = 11;
// const too2 = 9;
// const too3 = 4;
// const too4 = 3;
// const too5 = 6;
// const too6 = 2;
// let max = 1;
// if (too1 > 5) {
//   max *= too1;
// }
// if (too2 > 5) {
//   max *= too2;
// }
// if (too3 > 5) {
//   max *= too3;
// }
// if (too4 > 5) {
//   max *= too4;
// }
// if (too5 > 5) {
//   max *= too5;
// }
// if (too6 > 5) {
//   max *= too6;
// }
// console.log(max);

// 1. 2 тоог оруулж ихийг нь хэвлэх.
const a = 500;
const b = 100;
let ih = 1;
if (ih < a) {
  ih = a;
}
if (ih < b) {
  ih = b;
}
console.log(ih);
// 2. тоог тэгш содгой эсэхийг шалга.
const too = 20;
if (too % 2 === 0) {
  console.log("тэгш");
}
if (too % 2 === 1) {
  console.log("сондгой");
}
// 3. 3 ширхэг тоон дундах хамгийн их/хамгийн бага утгыг хэвлэ.
const ppp1 = 21;
const ppp2 = 22;
const ppp3 = 25;
let min = ppp1;
if (min > ppp1) {
  min = ppp1;
}
if (min > ppp2) {
  min = ppp2;
}
if (min > ppp3) {
  min = ppp3;
}
let max = ppp1;
if (max < ppp1) {
  max = ppp1;
}
if (max < ppp2) {
  max = ppp2;
}
if (max < ppp3) {
  max = ppp3;
}
console.log(max + " хамгийн их нь");
console.log(min + " хамгийн бага нь");
// 4. стрингийн уртыг хэвлэх.
const string = "hello_world";
console.log(string.length);
// 5. стринг эх"ний болон сүүлчийн тэмдгийг нийлүүлэх.
const string1 = "hello_world";
console.log(string1[0] + string[10]);
// 6. стрингийг том үсэг болгож хувиргах.
const string2 = "hello_world";
console.log(string2.toUpperCase());
// 7. стринг дотор тодорхой тэмдэгт байгаа эсэхийг шалгах.
const string3 = "banana";
// 8. тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах.3-т хуваагдвал Fizz, 5-т хуваагдвал Buzz, хоёуланд нь хуваагддаг бол FizzBuzz гэж хэвлэ.
let tooo = 15;
// 9. хоёр string-ийг нэгтгэх a = Hello b = World.
const string4 = "Hello";
const string5 = "World";
const niilber = string4 + string5;
console.log(niilber);
// 10. 2 тооны дундаж.
const tsipr1 = 40;
const tsipr2 = 20;
let dundaj = (tsipr1 + tsipr2) / 2;
console.log(dundaj);
// 11. тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг".
let too1 = 12;
too2 = 15;
too3 = 0;
console.log(too1 % 2 === 0 && "эерэг");
console.log(too2 % 2 === 1 && "сөрөг");
console.log(too3 % 2 === 0 && "тэг");
// 12. тоог 10-аас их эсэхийг шалгах.
const too4 = 90;
if (too4 > 10) {
  console.log(too4 + " нь 10-с их");
}
if (too4 < 10) {
  console.log(too4 + " нь 10-с бага");
}
// 13. хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай".
let too5 = 20;
too6 = 20;
if (too5 === too6) {
  console.log("хоёр тоо тэнцүү");
} else {
  console.log("хоёр тоо ялгаатай");
}
// 14. тоог 100-аас их, 0-ээс бага эсэхийг шалгах.
let too7 = 90;
if (too7 > 100) {
  console.log("100-c их");
} else console.log("100-c бага");

if (too7 > 0) {
  console.log("0-c их");
} else console.log("0-c бага");
// 15. тоог 10%, 20% эсвэл 30% өсгөх.
const too8 = 250;
let huvi = 10;
let hariu;
if (huvi === 10) {
  hariu = too8 + too8 * 0.1;
  console.log(too8 + " тоог 10%-р нэмээд " + hariu);
}
if (huvi === 20) {
  hariu = too8 + too8 * 0.2;
  console.log(too8 + " тоог 20%-р нэмээд " + hariu);
}
if (huvi === 30) {
  hariu = too8 + too8 * 0.3;
  console.log(too8 + " тоог 30%-р нэмээд " + hariu);
}
// 16. тоог 100-аас хэтэрвэл 100 болгож хэвлэх.
let too9 = 200;
if (too9 > 100) {
  too9 = 100;
}
console.log(too9);
// 17. хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах.
let temdeg = "&";
temdeg1 = "&";
if (temdeg === temdeg1) {
  console.log("2 тэмдэг ижил");
} else {
  console.log("2 тэмдэг ялгаатай");
}
// 18. хоёр оронтой тооны цифрүүдийг сольж урвуулах.
// 19. тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх.
const too10 = 42;
// 20. 1970.01.01 -ээс яг одоог хүртэл хэдэн жил, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол.
// 21. Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэ.
let dugaar = 2;
if (dugaar === 1 || dugaar === 6) {
  console.log("Даваа гарагт явахгүй");
}
if (dugaar === 2 || dugaar === 7) {
  console.log("Мягмар гарагт явахгүй");
}
if (dugaar === 3 || dugaar === 8) {
  console.log("Лхагва гарагт явахгүй");
}
if (dugaar === 4 || dugaar === 9) {
  console.log("Пүрэв гарагт явахгүй");
}
if (dugaar === 5 || dugaar === 0) {
  console.log("Баасан гарагт явахгүй");
}
