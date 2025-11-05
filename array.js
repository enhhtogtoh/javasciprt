// #1. ["🥩", "🌾", "🥔", "🥕", "🥬"] array iin length iig ol.
// const friuts = ["🥩", "🌾", "🥔", "🥕", "🥬"];
// console.log(friuts.length);

// #2. 10 urttai number array uusge.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.length);

// #3. 5 urttai string array uusge.
// const strings = ["", "", "", "", ""];
// console.log(strings.length);

// #4. Массивын эхний ба сүүлийн элементийг харуул. [1,2,3,4,5,6,7]
// const massive = [1, 2, 3, 4, 5, 6, 7];
// console.log(massive[0], massive[6]);

// #5. Тодорхой элемент массив дотор байгаа эсэхийг шалга. (string array, ['ford', "toyota", "mercedes", " chevrolet ", "tesla", "byd"])
// const stringArray = ["ford", "toyota", "mercedes", "chevrolet", "tesla", "byd"];
// let text = "byd";
// for (i = 0; i < stringArray.length; i++) {
//   //   console.log(stringArray[i]);
//   if (stringArray[i] === text) {
//     console.log("YES", text);
//   } else {
//     console.log("NO");
//   }
// }

// #6. Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let max = numberArray[0];
// for (i = 1; i < numberArray.length; i++) {
//   if (numberArray[i] > max) {
//     max = numberArray[i];
//   }
// }
// console.log("хамгийн их тоо: " + max);

// #7. Массив дахь хамгийн бага тоог ол. (number array, [1,2,3,4,5,6,7])
// const numberArray = [1, 2, 3, 4, 5, 6, 7];
// let min = numberArray[0];
// for (i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] < min) {
//     min = numberArray[i];
//   }
// }
// console.log("хамгийн бага тоо: " + min);

// #8. Зөвхөн тэгш тоонуудыг шүүн гарга. (number array, [1,2,3,4,5,6,7])
// const numberArray = [1, 2, 3, 4, 5, 6, 7];
// for (i = 1; i < numberArray.length; i++) {
//   if (i % 2 === 0) {
//     console.log("тэгш тоо: " + [i]);
//   }
// }

// #9. Тодорхой тоо массив дотор хэдэн удаа орсныг тоол. (number array, [ 2,3 , 1,6,7,10,11,2] , 2 )
// const numberArray = [2, 3, 1, 6, 7, 10, 11, 2];
// // console.log(numberArray.length);

// let num = 0;
// for (i = 0; i < numberArray.length; i++) {
//   if (numberArray[i].includes(2)) {
//     num++;
//   }
// }
// console.log(num);

// #10. Бүх тоонуудыг 2 дахин үржүүлсэн шинэ массив үүсгэ. (number array, [1,2,3,4,5,6,7])
// const productArray = [1, 2, 3, 4, 5, 6, 7];
// let length = productArray.length;
// for (i = 0; i < length; i++) {
//   productArray[i] *= 2;
//   console.log(productArray[i]);
// }

// #11. Бүх үгсийг том үсгээр (uppercase) болго. ([a, b, c, d, e ,f])
// const useg = ["a", "b", "c", "d", "e", "f"];
// let string = useg[0];
// for (i = 0; i < useg.length; i++) {
//   if (useg[i] >= string) {
//     string = useg[i];
//     console.log(string.toUpperCase());
//   }
// }

// #12. Бүх үгсийг жижиг үсгээр (lowercase) болго. ([A,B,C,D,E,T,Y,I,O,F])
// const useg = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// let string = useg[0];
// for (i = 0; i < useg.length; i++) {
//   if (useg[i] >= string) {
//     string = useg[i];
//     console.log(string.toLowerCase());
//   }
// }

// #1. “a” үсэг агуулсан үгсийн тоо ["apple", "pear", "grape", "kiwi"]
// const words = ["apple", "pear", "grape", "kiwi"];
// let sum = 0;
// for (x = 0; x < words.length; x++) {
//   if (words[x].includes("a")) {
//     sum++;
//   }
// }
// console.log(sum);

// #2. Эхний үгтэй ижил урттай бүх үгийг буцаа. ["hi", "to", "see", "me", "go"] -> ["hi", "to", "me", "go"]
// const words = ["hi", "to", "see", "me", "go"];
// let firstword = words[0].length;
// let sum = [];
// let j = 0;
// for (x = 1; x < words.length; x++) {
//   if (words[x].length === firstword) {
//     sum[j] = words[x];
//     j++;
//   }
// }
// console.log(sum);

// #3. Массив дахь хамгийн урт үгийг ол. ["apple", "banana", "kiwi"]
// const words = ["apple", "banana", "kiwi"];
// let max = words[0];

// for (let x = 1; x < words.length; x++) {
//   if (words[x].length > max.length) {
//     max = words[x];
//   }
// }
// console.log(max);

// #4. Массив дотор байгаа "" буюу хоосон string-ийг хас. ["hi", "", "world", "", "js"]
// const words = ["hi", "", "world", "", "js"];
// let sum = [];
// let j = 0;
// for (x = 0; x < words.length; x++) {
//   if (words[x] !== "") {
//     sum[j] = words[x];
//     j++;
//   }
// }
// console.log(sum);

// #5. Шинэ массив үүсгээд элементийг урвуу дарааллаар байрлуул. [1, 2, 3, 4]
// const numbers = [1, 2, 3, 4];
// let num = [];
// let j = 0;
// for (x = numbers.length - 1; x >= 0; x--) {
//   num[j] = numbers[x];
//   x++;
// }
// console.log(num);
