// 1. 3 toonii ihiig ol.
let a = 5;
b = 7;
c = 6;
let max = 1;
if (max < a) {
  max = a;
}
if (max < b) {
  max = b;
}
if (max < c) {
  max = c;
}
console.log(max);
// 2. 3 toonii bagiig ol.
let aa = 500;
bb = 600;
cc = 300;
let min = aa;
if (min > aa) {
  min = aa;
}
if (min > bb) {
  min = bb;
}
if (min > cc) {
  min = cc;
}
console.log(min);
// 3. duriin dun uguhud unelgeeg hevleh. (100-A)
let dun = 100;
if (dun > 100 || dun >= 90) {
  console.log("A");
} else if (dun > 90 || dun >= 80) {
  console.log("B");
} else if (dun > 80 || dun >= 70) {
  console.log("C");
} else if (dun > 70 || dun >= 60) {
  console.log("D");
} else if (dun > 60 || dun >= 0) {
  console.log("F");
}
// 4. 2 orontoi toonii tsipruudin urjver ol. (23)
const nuum = 23;
const ones = nuum % 10;
const tens = Math.floor(nuum / 10);
const total = ones * tens;
console.log(total + " цифрүүдийн үржвэр");
// 5. 3 orontoi toonii tsipruudiin niilberiig ol. (125)
const num1 = 128;
const one = num1 % 10;
const two = Math.floor((num1 % 100) / 10);
const three = Math.floor(num1 / 100);
const total1 = one + two + three;
console.log(total1 + " цифрүүдийн нийлбэр");
// 6. jil, sariig sard shiljuul. (2jil 7sar)
const jil = 2;
const sar = 7;
const sar1 = jil * 12 + sar;
console.log(sar1 + " sar");
// 7. 4 toonii 50-s ih toonuudiin niilber. (55 15 66 89).
let too1 = 55;
too2 = 15;
too3 = 66;
too4 = 89;
let max1 = 0;
if (50 < too1) {
  max1 += too1;
}
if (50 < too2) {
  max1 += too2;
}
if (50 < too3) {
  max1 += too3;
}
if (50 < too4) {
  max1 += too4;
}
console.log(max1);
// 8. 3 toon dah tegsh toonuudiin niilberiig ol. (2, 6, 7)
let a1 = 2;
b1 = 6;
c1 = 7;
let tegsh = 0;
if (a1 % 2 === 0) {
  tegsh += a1;
}
if (b1 % 2 === 0) {
  tegsh += b1;
}
if (c1 % 2 === 0) {
  tegsh += c1;
}
console.log(tegsh);
// 9. 3 toon dah sondgoi toonuudiin urjveriig ol. (5, 3, 6)
let a2 = 5;
b2 = 3;
c2 = 6;
let sondgoi = 1;
if (a2 % 2 === 1) {
  sondgoi *= a2;
}
if (b2 % 2 === 1) {
  sondgoi *= b2;
}
if (c2 % 2 === 1) {
  sondgoi *= c2;
}
console.log(sondgoi);
// 10. undur jil shalgah. (2000: undur jil, 2001:undur jil bish)
let year = 2028;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " он нь өндөр жил");
} else {
  console.log(year + " он нь өндөр жил биш");
}
// 11. 3 toogoor talaa hiisen gurwaljing baiguulj boloh bol yes ugui bol no gej hevle. (3 4 5: yes)
let g = 3;
f = 4;
t = 5;
if (g + f > t && f + t > g && t + g > f) {
  console.log("Yes");
} else {
  console.log("No");
}
// 12. dugaar uguhud hargalzah garagiig angliar hevle.
let day = 4;
if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
}
