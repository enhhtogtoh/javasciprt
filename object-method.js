// Object.keys - key utga avn
// Object.value - utga avn
// Object.entries - array dotor array
// Object.freeze - utga uurciluh bolomjq bolgon
// in - jishee object dotor iim key word bnuugj asuun
// JSON.stringify - objectiiig bugdiin string bolgj huvirgan
// JSON.parse - stringiig butsaaj object bolgon

// #1. Хүний нэр, нас, хот гэсэн 3 properties объект үүсгэ.

// const properties = { name: "bat", age: 22, city: "Ub" };
// console.log(properties);

// #2. Объект дотор байгаа name шинж чанарын утгыг хэвлэ.

// const object = { name: "Bat", age: 22, city: "Ub" };
// console.log(object.name);

// #3. person.age утгыг шинэчлээд 30 болго.

// const person = { name: "Bat", age: 22, city: "UB" };
// const newObject = Object.assign({ age: 30 });
// console.log(newObject);

// #4. person объектод шинэ job шинж чанар нэмээд 'developer' гэж оноо.

// const person = { name: "Bat", age: 22 };
// const newKey = "job";
// person[newKey] = "developer";
// console.log(person);

// #5. delete ашиглан person объектын city propertyg устга.

// const person = { name: "Bat", age: 22, city: "Ub" };
// delete person.city;
// console.log(person);

// #6. Хоёр объект (user1, user2)-ийг Object.assign() ашиглан нэгтгэ.

// const user1 = { name: "Bat", city: "Ub" };
// const user2 = { name: "Saraa", age: 23 };
// const newObject = Object.assign({}, user1, user2);
// console.log(newObject);

// #7. Object.keys() ашиглан объектын бүх түлхүүрүүдийг массив болгон ав.

// const person = { name: "Bat", age: 22, city: "Ub" };
// const newObject = Object.keys(person);
// console.log(newObject);

// #8. Object.values() ашиглан бүх утгуудыг массив болгон ав.

// const person = { name: "Bat", age: 22, city: "Ub" };
// const newObject = Object.values(person);
// console.log(newObject);

// #9. Object.entries() ашиглан түлхүүр-утгын хосуудыг массив болгон ав.

// const person = { name: "Bat", age: 22, city: "Ub" };
// const newObject = Object.entries(person);
// console.log(newObject);

// #10. Объект дотор тодорхой түлхүүр ("email") байгаа эсэхийг 'email' in user хэлбэрээр шалга.

// const person = {
//   name: "Bat",
//   age: 22,
//   city: "Ub",
//   email: "bat@example.com",
// };
// if ("email" in person) {
//   console.log("email түлхүүр байна");
// } else console.log("email түлхүүр байхгүй");

// #11. for...in давталт ашиглан объектын бүх түлхүүр болон утгуудыг хэвлэ.

// const person = { name: "Bat", age: 22, city: "Ub" };
// for (let key in person) {
//   console.log(key + ":", person[key]);
// }

// #12. Object.freeze() ашиглан объектын утгыг өөрчлөх боломжгүй болгож оролдоод турш.

// const person = { name: "Bat", age: 22, city: "Ub" };
// const newObject = Object.freeze(person);
// person.age = 50;
// console.log(person);

// #13. Хоёр объектын утгуудыг spread (...) ашиглан нэг шинэ объект үүсгэ.

// const user1 = { name: "Bat", age: 22, city: "Ub" };
// const user2 = { name: "Saraa", age: 23, city: "Darkhan" };
// const copiedObject = [...Object.values(user1), ...Object.values(user2)];
// console.log(copiedObject);

// #14. Хоосон объект үүсгээд дараалан өөрийн хүссэн 3 properties g  нэм.

// const user = {};
// const firstKey = "name:";
// user[firstKey] = "Bat";
// const secondKey = "age:";
// user[secondKey] = 22;
// const thirthKey = "city:";
// user[thirthKey] = "Ub";
// console.log(user);

// #15. Нэг объектын тодорхой утгыг өөр объект руу хуулах (clone) үйлдэл хийгээрэй.

// const user = { name: "Bat", age: 22, city: "Ub" };
// const person = { ...user };
// console.log(person);

// #16. Объектын бүх түлхүүрийг length-ээр тоол.

// const user = { name: "Bat", age: 22, city: "Ub" };
// const userCount = Object.keys(user).length;

// console.log(userCount);

// #17. Object.hasOwnProperty() ашиглан user объектод password байгаа эсэхийг шалга.

// const user = { name: "Bat", age: 22, city: "Ub", password: "hhshsh112" };
// const pass = user.hasOwnProperty("password");
// console.log(pass);

// #18. JSON.stringify() ашиглан объектоо string болгон хөрвүүл.

// const user1 = { name: "Bat", age: 22, city: "Ub" };
// const string = JSON.stringify(user1);
// console.log(string);

// #19. JSON.parse() ашиглан string-ийг буцааж объект болгож хөрвүүл.

// console.log(JSON.parse(string));

// #1. Объектын бүх key-үүдийг camelCase руу хөрвүүлэх. Дотроо объект байвал тэрийг ч хөрвүүлнэ.

// const user = { first_name: "Bat", last_name: "Bold" };
// const upperCaseLetters = Object.keys(user);
// let camel = upperCaseLetters[0];

// for (i = 1; i < upperCaseLetters.length; i++) {
//   const word = upperCaseLetters[i];
//   const capitalized = word[0].toUpperCase() + word.slice(1);

//   camel += capitalized;
// }
// console.log(camel.split("_"));

// #2. Объект доторх утгуудын төрлийг тоолох. Тоо, стринг, boolean, массив, объект – тус бүр хэд байгааг тооцно.

const user = { name: "Bat", age: 22, city: "Ub" };
const num = Object.values(user);

for (i = 0; i < num.length; i++) {
  const total = num[i];

  console.log(total);
}

// #3. Объектыг Deep Freeze хийх. Object.freeze()-ийг ашигла.

// #4. Тодорхой утгатай бүх key-ийг олох. Давхар объектууд дундаас ч хайна. Жишээ: утга нь "admin" бол "role": "admin" гэх бүх key-г буцаах.

// #5. Объектын key ба value-г сольж шинэ объект үүсгэх. Жишээ: { a: 1, b: 2 } → { 1: "a", 2: "b" }
