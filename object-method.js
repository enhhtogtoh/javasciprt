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
// console.log(properties.name);

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

const person = { name: "Bat", age: 22, city: "Ub" };
for (let key in person) {
  console.log(key);
}

// #12. Object.freeze() ашиглан объектын утгыг өөрчлөх боломжгүй болгож оролдоод турш.
// #13. Хоёр объектын утгуудыг spread (...) ашиглан нэг шинэ объект үүсгэ.
// #14. Хоосон объект үүсгээд дараалан өөрийн хүссэн 3 properties g  нэм.
// #15. Нэг объектын тодорхой утгыг өөр объект руу хуулах (clone) үйлдэл хийгээрэй.
// #16. Объектын бүх түлхүүрийг length-ээр тоол.
// #17. Object.hasOwnProperty() ашиглан user объектод password байгаа эсэхийг шалга.
// #18. JSON.stringify() ашиглан объектоо string болгон хөрвүүл.
// #19. JSON.parse() ашиглан string-ийг буцааж объект болгож хөрвүүл.
