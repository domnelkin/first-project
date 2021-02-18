"use strict";

/* let hui = 16;
console.log(hui);

const pisun = 'maliy';
console.log(pisun);

const obj = {
    name: 'Mas',
    weight: 120,
    pisun: 10
};
console.log(obj.pisun);

let arr = [1, 5, 7, 9];
console.log(arr[0]); */

/* const answers = [];

answers[0] = prompt('Ти блять де?', '');
answers[1] = prompt('Ну макс ти заєбав?', '');
answers[2] = prompt('Тебе ще довго чекати?', '');
 
document.write(answers);  */

// Интерполяция
/* const category = 'mimimi';
 
console.log(`https://mail.google.com/mail/${category}/5` ); */
  
// ++incr(префикс, try use in console), incr++(постфикс, number don`t change in console)
/* let incr = 10,
    decr = 10;

     incr++,   
    decr--;

console.log(incr);
console.log(decr);     */  

// остаток от числа
// console.log(5%3);

// == - равенство, === - строгое раввенство (number to number)
/* console.log(2*2 === 7);
console.log(4*2 === '8');
console.log(4*2 == '8'); */


// логические операторы && - и (if true only work, to work when both or more mearning true, all meanings true), || - или

/* const isChecked = true,
      isClose =  true;

console.log(isChecked && isClose);     */

/* const isCheckMark = true,
      isNotCheckMark =  false;

console.log(isCheckMark || isNotCheckMark);  */
// example: галочка на странице есть или нет

// оператор отрицания (is true - false, is false - true)
/* 
const isChecked = false,
      isClose =  false;

console.log(isChecked && !isClose);  */

/* const numberoffilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalmovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 */
 /* if (4 === 9)  {
     console.log('Ok!');
 } else  {
     console.log('error');
 } */

 //const num = 50;

/*  if (num < 49)  {
     console.log('Error');
 } else if (num > 100)  {
     console.log('Много');
 } else {
     console.log('Ok!');
 }

 // тернарный (условный) оператор - потому что 3 аргумента участвуют, удинственный ткой оператор в js

 (num === 50) ? console.log('Ok!') : console.log('Error');  */ 

 //строгое соответствие, breack останавливает процесс чтения остальный кейсов

 /* switch (num)  {
     case 49:
         console.log('Неверно!');
         break;
     case 100:
        console.log('Неверно!');
        break;
     case 50:
        console.log('верно!');
        break;   
     default:
        console.log('Не в этот раз!');
        break; 
 } */
/* let num = 50;
 while (num < 55)  {
     console.log(num);
     num++;
 }

do  {
    console.log(num);
     num++;
}
while (num < 55);

for (let i = 1; i < 8; i++)  {
    console.log(i);
}
 */
//breack - останавливает, continue - пропускает, но не прирывает 

/* for (let i = 1; i < 10; i++)  {
    if (i === 6)  {
       // break;
       continue;
    }
    console.log(i);
} */
  
// функция - один из спопобов оптимизации кода

/* let num = 30;

//локальная переменная. потому что существует только в функции
//можно использовать глобальную переменную в функции  num = 20
function messageOne (text)  {
     console.log(text);
     let num = 20; 
     console.log(num);
}
messageOne('Hello World!');
console.log(num);

function calc(a, b)  {
     return (a + b);
}

console.log(calc(9, 2));
console.log(calc(7, 5));
console.log(calc(34, 89));

const logger = function() {
    console.log('Hello!');
};
logger(); 

const calc = (a, b) => {
    console.log('1');
    return a + b; 
} */

