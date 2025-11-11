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
//   const changeTheLetter = text.replaceAll("a,b,c,d", "----");
//   return changeTheLetter;
// };
// const hariu = changeLetter("a,b,c,d");
// console.log(hariu);

// #3. JavaScript хэдэн гийгүүлэгч хэдэн эгшиг байгааг тоол.
const letterConsonant = (text) => {
  const vowels = "aeiou";
  let vowelsCount = 0;
  let consonantCount = 0;

  for (i = 0; i < text.length; i++) {
    const total = text[i].toLowerCase();
  }
};
