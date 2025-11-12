// push - araas utga nemne
// pop - araas utga hasna
// shift - urdaas utga hasna
// unshift - urdaas utga nemne
// concat - 2 array niiluuln
// includes - utga aguulj bga eseh
// indexOf - heddeh index deer bgag zaan
// lastIndexOf - hamgiin suuliin index
// join - array negtgedeg
// slice - array tasalj avn heddeh indexees ehlehiig zaan
// splice - utga solin ustagna nemne gsn 3 utgatai (1,0,22)
// Array.isArray - array mun esehiig shalgan
// Array.from - array uusgej boln

// #1. Өөрийн дуртай 5 жимсний жагсаалт үүсгээд, хамгийн эхний болон хамгийн сүүлийн жимсийг хэвлэ.

// const friuts = ["apple", "banana", "watermelon", "lemon", "orange"];
// const firstAndLast = friuts.splice(1, 3);
// // console.log(lastFriuts, firstFriuts);
// console.log(friuts);

// #2. ['apple', 'banana'] массивын төгсгөлд 'mango' нэм.

// const friuts = ["apple", "banana"];
// const lastFriuts = friuts.push("mango");
// console.log(friuts);

// #3. [1, 2, 3, 4] массиваас сүүлийн элементийг pop() ашиглан устга.

// const numbers = [1, 2, 3, 4];
// const lastIndex = numbers.pop();
// console.log(numbers);

// #4. [10, 20, 30] массивын эхэнд 5 нэм.

// const numbers = [10, 20, 30];
// const firstNum = numbers.unshift(5);
// console.log(numbers);

// #5. [100, 200, 300] массиваас эхний элементийг shift() ашиглан устга.

// const numbers = [100, 200, 300];
// const firstNumDelete = numbers.shift(0);
// console.log(numbers);

// #6. [1, 2, 3] ба [4, 5, 6] массивуудыг нэгтгэж шинэ массив үүсгэ.

// const array = [1, 2, 3];
// const array1 = [4, 5, 6];
// const arrayPlusArray = array.concat(array1);
// console.log(arrayPlusArray);

// #7. ['apple', 'banana', 'orange'] массив дотор 'banana' байгаа эсэхийг шалга.

// const friuts = ["apple", "banana", "orange"];
// const friutInclude = friuts.includes("banana");
// console.log(friutInclude);

// #8. ['cat', 'dog', 'bird'] массив дотор 'dog' хэддэх индекст байгааг ол.

// const animals = ["cat", "dog", "bird"];
// const indexAnimal = animals.indexOf("dog");
// console.log(indexAnimal);

// #9. ['I', 'love', 'JavaScript'] массивыг join() ашиглан нэг мөр болгон холбож хэвлэ.

// const words = ["I", "love", "Javascript"];
// const changeTheMassive = words.join(" ");
// console.log(changeTheMassive);

// #10. [10, 20, 30, 40, 50] массиваас эхний 3 элементийг slice() ашиглан аваад шинэ массив үүсгэ.

// const numbers = [10, 20, 30, 40, 50];
// const newArray = [];
// const cutNum = numbers.slice(0, 3);
// // newArray.push(cutNum);
// // console.log(newArray);
// console.log(cutNum);

// #11. [1, 2, 3, 4] массиваас хоёр дахь элементийг splice() ашиглан устга.

// const numbers = [1, 2, 3, 4];
// const cutIndex = numbers.splice(1, 1);
// console.log(numbers);

// #12. [1, 2, 3, 4, 5] массивыг reverse() ашиглан урвуугаар эргүүл.

// const numbers = [1, 2, 3, 4, 5];
// const reverseNum = numbers.reverse();
// console.log(numbers);

// #13. ['banana', 'apple', 'cherry'] массивыг sort() ашиглан үсгийн дарааллаар эрэмбэл.

// const friuts = ["banana", "apple", "cherry"];
// const sortFriut = friuts.sort();
// console.log(friuts);

// #14. Өгөгдсөн хувьсагч массив мөн эсэхийг Array.isArray() ашиглан шалга.

// const numbers = [1, 2, 3, 4, 5];
// const yesArray = Array.isArray(numbers);
// console.log(yesArray);

// #15. ['red', 'blue', 'green'] массивын нийт уртыг хэвлэ.

// const colors = ["red", "blue", "green"];
// const lengthMassive = colors.length;
// console.log(lengthMassive);

// #16. [10, 20, 30] массивын дундах элемент (20)-ийг 25 болгож солино уу.

// const numbers = [10, 20, 30];
// const changeTheNum = numbers.splice(1, 1, 25);
// console.log(numbers);

// #17. ['HTML', 'CSS'] ба ['JavaScript', 'React'] массивуудыг нэгтгээд нийт хэдэн элементтэй болохыг хэвлэ.

// const scripts = ["HTML", "CSS"];
// const scripts1 = ["Javascript", "React"];
// const array = scripts.concat(scripts1);
// const arrayIndexOf = array.length;
// console.log(array, arrayIndexOf);

// #18. [1, 2, 3, 4, 5] массиваас сүүлийн 2 элементийг splice() ашиглан устга.

// const numbers = [1, 2, 3, 4, 5];
// const deleteNum = numbers.splice(3, 4);
// console.log(numbers);

// #19. [5, 10, 15, 20] массиваас гурав дахь элементийг splice() ашиглан хас.

// const numbers = [5, 10, 15, 20];
// const deleteNum = numbers.splice(2, 1);
// console.log(numbers);

// #20. [100, 200, 300] массиваас 200 байгаа эсэхийг шалгаад, байвал “байна”, байхгүй бол “байхгүй” гэж хэвлэ.

// const numbers = [100, 200, 300];
// if (numbers.includes(200)) {
//   console.log("baina");
// } else {
//   console.log("baihgui");
// }
