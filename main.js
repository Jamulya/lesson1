console.log('Hello World!');
// var a = 10;
// console.log(a);

// ES-5
var a = 10;
// console.log(a);

// ES-6
const b = 5;
let c = 6;
// console.log(b);
// console.log(c);

// const & let
const l = 10;
let y = 20;
// console.log(l-1);
// console.log(y+1);

// Типы данных
  const number = 10;//number
  console.log(typeof number);

  const string = "Hello";//text//string
  console.log(typeof string);

  const boolTrue = true//true 1
  console.log(boolTrue);
  const boolFalse = false;//false
  console.log(boolFalse);

  const obj = {key: 'value'}//object
  console.log(typeof obj);

  const mass = [1,2,3, {key: 'value'}, '']//array
  console.log(typeof mass);

  //////////////////////////////////////////////
//object
  const object = 
  {
    key: "value",
    name: "Jack",
    age: 18
  }
  console.log(object);
  console.log(object.name, object.age);

  const user = 
  {
    login: "Jack",
    password: "1111111",
    username: "jack_01",
    followers:
     [
     {
        username: "Anna",
        description: "nail master"
    },
    {
        username: "Irina",
        description: "traveler"
    },
    ],
    follows: [
        {
            username: "Anna",
            description: "nail master"
        },
        {
            username: "Irina",
            description: "traveler"
        },
    ],
    avatar: "image",
  }

  console.log(user);
  console.log("username:" + user.username);
  console.log("followers:" + user.followers.length);
  console.log("follows:" + user.follows.length);


  //array
  const array = [1,2,3, {key: "value"}, "string", true, [1,2,3]]
  console.log(array);

  const arr = [1,2,3,4,5];
  console.log(arr[2]);

  // Операторы
  const num1 = 12;
  const num2 = 10;

  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(2*(num1 + num2) - num1);


  //if...else
//   const numbers = prompt('Введите число: ');

//   if (numbers < 20) {
//     console.log("num < 20");
//   }else {
//     console.log('num > 20');
//   }

// if (numbers <= 20) {
//     console.log('num < or = 20');
// }else if (numbers == 100) {
//     console.log('num = 100');
// }else {
//     console.log('num > 20');
// }

// if ( numbers <= 20) {
//     console.log("num <= 20");
// }else if (Number(numbers) === 100) {
//     console.log("num = 100");
// }else if (Number(numbers) !== 100){
//     console.log("num !== 100");
// }else {
//     console.log('num > 20');
// }

// const year = prompt('В каком году был создан Js? ');
// if (year < 1995) {
//     alert("Это слишком рано")
// }else if (year > 1995){
//     alert( "это поздно")
// }else {
//     alert('верно!')
// }

//switch/care
let num = 2 + 2;
switch (num) {
    case 3:
        alert('Маловато');
        break;
    case 3:
        alert('в точку') ;
        break;
    case 5:
        alert(' Перебор');
        break;
    default:
        alert("Нет таких значений");
}

let arg = prompt("введите число?");
switch (arg) {
    case '0':
    case '1':
        alert(' один или ноль');
        break;
    case '2':
         alert('Два');
         break;
    case 3:
         alert( "Никогда не выполнится")
         break;
        default:
            alert('Неизвестное значение')
}







