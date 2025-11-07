// console.log("aaa");
// let array = [];

// for (i = 0; i < 5; i++) {
//   let star = "*";
//   for (j = 0; j < 4; j++) {
//     star += `${i + j} *`;
//   }
//   console.log(star);
// }

// #1. Массив дахь бүх тоонуудыг хоёр хоёроор нь үржүүлж, шинэ массивт хадгал.
// const numbers = [2, 3, 4];
// let newArray = [];

// for (i = 0; i < numbers.length; i++) {
//   for (j = i + 1; j < numbers.length; j++) {
//     newArray.push(numbers[i] * numbers[j]);
//   }
// }
// console.log(newArray);

// #2. Массив дахь давтагдсан тоонуудыг олж, тус бүрийн хэдэн удаа гарч ирсэн болохыг тооц. Жишээ: [1,2,2,3,3,3] → {2:2, 3:3}
// const numbers = [1, 2, 2, 3, 3, 3];

// for (i = 0; i < numbers.length; i++) {
//   for (j = i + 1; j <= numbers.length; j++) {
//     if (numbers[i] == numbers[j]) {
//       console.log(numbers[i] + ":", numbers[j]);
//     }
//   }
// }

// #3. Хоёр массивын дунд адилхан элементүүдийг ол. Жишээ: [1,2,3,4] ба [3,4,5,6] → [3,4]
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// let result = [];

// for (i = 0; i < a.length; i++) {
//   for (j = 0; j < b.length; j++) {
//     if (a[i] == b[j]) {
//       result.push(a[i]);
//     }
//   }
// }
// console.log(result);

// #4. Өгөгдсөн тооноос хамаарч од(*)-оор гурвалжин хэвлэ. 4
// *
// **
// ***
// ****

// let number = 4;

// for (i = 1; i <= number; i++) {
//   let line = "";
//   for (j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// #5. Хоёр үг нь ижил үсгийн бүрдэлтэй (анаграмм) эсэхийг шалга. Жишээ: "listen" ба "silent" → true

// const anagram = "listen";
// const anagram1 = "silent";
// let isAnagram = false;

// if (anagram.length !== anagram1.length) {
//   isAnagram = false;
// } else {
//   for (let i = 0; i < anagram.length; i++) {
//     for (j = 0; j < anagram1.length; j++) {
//       if (anagram[i] === anagram1[j]) {
//         isAnagram = true;
//         break;
//       }
//     }
//     if (!isAnagram) {
//       break;
//     }
//   }
// }
// console.log(isAnagram);

// #6. Массив доторх хоёр элементийн нийлбэр нь өгөгдсөн target тоотой тэнцүү хосуудыг ол.

// #7. Mассивыг өсөхөөр эрэмбэл Жишээ: [5,2,8,1] → [1,2,5,8]

// #8. Массив дахь хоёр тооны ялгавар k-тай тэнцүү хосуудыг тоол. Жишээ: [1,5,3,4,2], k=2 → 3

// #9. 1-ээс 10 хүртэлх үржвэрийн хүснэгт хэвлэ.

// #10. Өгөгдсөн string доторх давтагдсан үсгүүдийг ол. Жишээ: "programming" → ['r','g','m']

// #11. Set ашиглалгүйгээр массив доторх давхардсан элементүүдийг арилгах. Жишээ: [1,2,2,3,4,4,5] → [1,2,3,4,5]

// #12. Хоёр ангийн оюутнуудын дүнг харьцуулж, аль нь өндөр оноотойг илэрхийл. Жишээ: classA=[80,90,70], classB=[85,85,75] → [B,A,B]

// #13. Хоёр string-ийг double loop ашиглан substring эсэхийг шалга (includes ашиглахгүй). Жишээ: "hello world", "world" → true

// #14. Хоёр массивын бүх элементүүдийн нийлбэрийг 2D массив хэлбэрээр гарга. Жишээ: [1,2] ба [3,4] → [[4,5],[5,6]]

// #15. Хоёр string-ийн адилхан үсэг хэдэн ширхэг байгаа болохыг тооц. Жишээ: "apple", "peach" → 3 (p, e, a)
