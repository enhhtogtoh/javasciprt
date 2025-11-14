// #1. "JavaScript"; svvliin characteriin indexiig ol.
// const findLastIndex = (text) => {
//   const result = text.length - 1;
//   return result;
// };

// #2. "A"; ascii table deerh codiig ol.
// const asciiTable = (text) => {
//   const result = text.charCodeAt(0);
//   return result;
// };

// #3. "JavaScript"; Script gedeg vgiig salgaj aw
// const findLastWord = (text) => {
//   const lengthOfLastWord = text.split("Java");
//   return lengthOfLastWord;
// };

// #4. "I like cats"; cats gdeg ugiig dogs oor solino uu.
// const changeWord = (text) => {
//   const changeTheWord = text.replace("cats", "dogs");
//   return changeTheWord;
// };

// #5. "wow wow wow"; wow gdeg ugiig haha bolgoj solino uu.
// const changeWord = (text) => {
//   const changeTheWord = text.replaceAll("wow", "haha");
//   return changeTheWord;
// };

// #6. "apple,banana,orange"; , aar ni salgana uu.
// const symbol = (text) => {
//   const changeTheSymbol = text.split(",");
//   return changeTheSymbol;
// };

// #7. "sumiya@gmail.com"; email esehiig shalga.
// const checkEmail = (email) => {
//   const hasAt = email.includes("@");

//   const hasDot = email.includes(".");

//   const atIndex = email.indexOf("@");
//   const dotIndex = email.lastIndexOf(".");

//   if (hasAt && hasDot && atIndex < dotIndex) {
//     return "Зөв имэйл хаяг байна";
//   } else {
//     return "Буруу имэйл хаяг байна";
//   }
// };

// #8. "haha"; 5 udaa dawtaj shine string uusge.
// const word = (text) => {
//   const changeTheWord = text.repeat(5);
//   return changeTheWord;
// };

// #9. "apple ++++ banana  ++++apple"; msg ees  "apple banana apple" gsen string vvsge.
// const changeString = (text) => {
//   const changeTheString = text.split("++++");
//   return changeTheString;
// };

// #10. "javascript"; ehnii usgiin UpperCase bolgo.
// const uppercaseWord = (text) => {
//   const changeTheUppercaseLetter = text[0].toUpperCase() + text.slice(1);
//   return changeTheUppercaseLetter;
// };

// #1. "Javascript is fun" дотор "fun" үгийн байршлын index-г ол.
// const lastWordIndex = (text) => {
//   const lastIndex = text.split("Javascript is");
//   return lastIndex;
// };
// const result = lastWordIndex("Javascript is fun");
// console.log(result);

// #2. "a,b,c,d" → бүх , ийг  - тэмдэгтээр солино
// const changeLetter = (text) => {
//   const changeTheLetter = text.replaceAll(",", "-");

//   return changeTheLetter;
// };
// const hariu = changeLetter("a,b,c,d");
// console.log(hariu);

// #3. JavaScript хэдэн гийгүүлэгч хэдэн эгшиг байгааг тоол.
// const letterConsonant = (text) => {
//   const vowels = "aeiou";
//   let egshig = 0;
//   let giiguulegc = 0;

//   for (i = 0; i < text.length; i++) {
//     const total = text[i].toLowerCase();
//     if (vowels.includes(total)) {
//       egshig++;
//     } else if (/[a-z]/.test(total)) {
//       giiguulegc++;
//     }
//   }
//   return { egshig, giiguulegc };
// };
// const hariu = letterConsonant("Javascript");
// console.log(hariu);

// #4. "1234567890" сүүлийн 4 оос бусад тоог нь * оор орлуул
// const numbers = (num) => {
//   const str = num.toString();
//   const str1 = str.slice(-4);
//   const pro = "*".repeat(str.length - 4) + str1;
//   return pro;
// };
// const hariu = numbers(1234567890);
// console.log(hariu);

// #5. Өгүүлбэр доторх хамгийн урт үгийг ол.
// const words = (text) => {};

// #1. Доорх үгсийг урвуу болгох. Эхний болон сүүлийн үгийг өөрчлөхгүй. Жишээ: Оролт: "Javascript бол үнэхээр сонирхолтой хэл", Гаралт: "Javascript лоб рээхнеүн йотлохронис хэл"

// const reverseWord = (str) => {
//   const splitted = str.split(" ");
//   const words = splitted.slice(1, 4);

//   for (let i = 0; i < words.length; i++) {
//     const newWord = words[i].split("").reverse().join("");
//     words[i] = newWord;
//   }

//   const newWords = words.join(" ");

//   return `${splitted.shift()} ${newWords} ${splitted.pop()}`;
// };
// const hariu = reverseWord("Javascript bol uneheer sonirholtoi hel");
// console.log(hariu);

// #2. Өгүүлбэр дэх давтагдахгүй үгсүүдийг тоолох (том жижиг ялгахгүй). Зөвхөн a-z үсгийг тоолно. Жишээ: Оролт: "Sain uu?", Гаралт: 4

// const countUniqueLetters = (str) => {
//   let counter = 0;
//   const uniqueLetters = {};

//   for (let char of str) {
//     const seenLetter = uniqueLetters[char];

//     if (char >= "a" && char <= "z") {
//       if (!seenLetter) {
//         uniqueLetters[char] = 1;
//         counter++;
//       } else {
//         delete uniqueLetters[char];
//         counter--;
//       }
//     }
//   }
// //   console.log(uniqueLetters);
//   return counter;
// };
// const hariu = countUniqueLetters("sain uu");
// console.log(hariu);

// #3. Давхардсан үсгүүдийг арилгаж дарааллыг хадгалах. Оролт: "aabbccddeeff", Гаралт: "abcdef"

// const removeDuplicates = (str) => {
//   let result = "";
//   let remove = {};

//   for (i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (remove[char]) {
//       remove[char]++;
//     } else {
//       remove[char] = 1;
//       result = result + char;
//     }
//   }
//   return result;
// };
// const hariu = removeDuplicates("aabbccddeeff");
// console.log(hariu);

// #4. kebab-case → camelCase болгох. Оролт: "hello-world-example", Гаралт: "helloWorldExample"

// const countLetters = (str) => {
//   const splitted = str.split("-");
//   let camel = splitted[0];

//   for (i = 1; i < splitted.length; i++) {
//     const word = splitted[i];
//     const capitalized = word[0].toUpperCase() + word.slice(1);

//     camel += capitalized;
//   }
//   return camel;
// };
// const hariu = countLetters("hello-world-example");
// console.log(hariu);

// #5. Урт нь 4-өөс их бол дундах үсгүүдийг “*” болгох. Эхний 2 ба сүүлийн 2 үлдэнэ. Оролт: "mongolia", Гаралт: "mo****ia"

// const hideMiddle = (str) => {
//   if (str.length <= 4) return str;

//   const firstTwoLetters = str.slice(0, 2);
//   const lastTwoLetters = str.slice(-2);

//   const starts = "*".repeat(str.length - 4);

//   return firstTwoLetters + starts + lastTwoLetters;
// };
// const hariu = hideMiddle("mongolia");
// console.log(hariu);
