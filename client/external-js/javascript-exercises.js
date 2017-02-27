// /**
//  * Created by liz on 2/6/17.
//  */
//
//
// const bubu = () => {
//     // console.log('OK');
// };
//
//
// bubu();
//
// // var x = 1;
// // redeclare_of_x: {
// //     var x = 2;
// //     console.log("var: x inside of block: " + x);
// // }
// // console.log('var: x outside of block: ' + x); //logs 2
// //
// // let y = 1;
// // redeclare_of_y: {
// //     let y = 2;
// //     console.log('let: y inside of block: ' + y);
// // }
// // console.log('let: y outside of block: ' + y);
// //
// // const z = 1;
// // redeclare_of_z: {
// //     const z = 2;
// //     console.log('const: z inside the block: ' + z);
// // }
// // console.log('const: z outside the block: ' + z);
// //
// // let t = 1;
// //
// // level1: {
// //     while (y < 10) {
// //         y++;
// //         console.log('y in while: ' + y);
// //         level2: {
// //             let t = 1;
// //             let u = '';
// //             while (t < 100) {
// //                 u += Math.round(Math.random() * 10);
// //                 t++;
// //                 if (y == 4 ) {
// //                     // console.log (y + ''  );
// //                     console.log('y == 4 -> break level 1');
// //
// //                     break level1;
// //                 }
// //             }
// //             console.log(u);
// //         }
// //     }
// // }
//
// // function generateRandomNoCeSeImparteExactLaUnAltNrRandom() {
// //     let i = 1, j = 1, rand1, rand2;
// //     while (i < 1000000) {
// //         rand1 = Math.round(Math.random()*1000000);
// //         rand2 = Math.round(Math.random()*1000000);
// //         if (rand1 % rand2 == 0) {
// //             console.log (rand1 + ' % ' + rand2 + ' = 0');
// //             console.log('took ' + i + ' tries...');
// //             break;
// //         }
// //         i++;
// //     }
// // }
// //
// // const generateRandomNoCeSeImparteExactLaUnAltNrRandom = () => {
// //     let i = 1, j, no = 0, no1 = 0, rand1, rand2;
// //     while (i < 100000) {
// //         rand1 = Math.round(Math.random()*10000);
// //         rand2 = Math.round(Math.random()*10000) + 100;
// //         j = rand1 % rand2;
// //         if (j == 0) {
// //             console.log (rand1 + ' % ' + rand2 + ' = 0');
// //             console.log('took ' + i + ' tries...');
// //             // break;
// //         }
// //         if (no == 0 ) {
// //             console.log('no = 0 && j = ' + j);
// //         }
// //             //     // console.log('j: ' + j);
// //         //     if (i >= 100) {
// //         //         j = 1;
// //         //         console.log('no = 0 && j = 1')
// //         //     }
// //         // }
// //         switch (j) {
// //             case 1 :
// //                 if (no == 0) {
// //                     console.log(rand1 + ' % ' + rand2 + ' = 1');
// //                     no++;
// //                 }
// //             case 2 :
// //                 if (no == 0) {
// //                     console.log(rand1 + ' % ' + rand2 + ' = 2');
// //                     no++;
// //                 }
// //             case 3 :
// //                 if (no == 0) {
// //                     console.log(rand1 + ' % ' + rand2 + ' = 2');
// //                     no++;
// //                 }
// //             default:
// //
// //         }
// //         if (no !== 0 ) {
// //             no1++;
// //             no = 0;
// //         }
// //         if (no1 == 100) {
// //             console.log ('no1 reached 100... break executed. ')
// //             break;
// //         }
// //         i++;
// //     }
// // }
// //
// // generateRandomNoCeSeImparteExactLaUnAltNrRandom()
// //
// // const myFunc = () => {
// //     let a, b;
// //     outer_loop: for (a=1; a<100; a++) {
// //         inner_loop: for (b=1; b<100; b++) {
// //             console.log(a + " : " + b);
// //             if (b == 10) {
// //                 break outer_loop;
// //             }
// //         }
// //     }
// //     return a * b ;
// // }
// //
// // console.log(myFunc());
// //
// // block1: {
// //     console.log('block1');
// //     break block2;
// // }
// //
// // block2: {
// //     console.log('block2');
// // }
//
//
// class Polygon {
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.width = width;
//         this.height = height;
//         this.aria = () => {
//             let b = this.width * this.height;
//             return (b);
//         }
//         // this.aria = function () {
//         //     let b = this.width * this.height;
//         //     return (b);
//         // }
//         // this.ln = function() {
//         //     return (this.width + this.height)
//         // }
//         this.length = () => {
//             return (this.width + this.height)
//         }
//     }
// }
//
// class Square extends Polygon {
//     constructor(size) {
//         super(size, size);
//         this.name = 'Square';
//         this.len = this.width * 2;
//     }
// }
//
//
// let a = new Polygon(100, 200);
//
// console.groupCollapsed('Polygon class');
//
// console.log('${a}');
// console.log(a);
// // console.table(a,["aria", "height", "name"]);
// console.log('polygon length = ${a.length()}');
// console.log('polygon length = ' + a.length());
// console.log('polygon area = ${a.aria()}');
// console.log('polygon area = ' + a.aria());
//
// console.groupEnd();
//
// console.groupCollapsed('Square class');
//
// let b = new Square(10);
// console.log('${b}');
// console.log(b);
// // console.table(b);
// console.log('square length = ${b.length()}');
// console.log('square length = ' + b.length());
// console.log('square aria = ${b.aria()}');
// console.log('square aria = ' + b.aria());
// console.log('square len = ${b.len}');
// console.log('square len = ' + b.len);
//
// console.groupEnd();
//
// // const myConst = 10;
// // let myLet = 10;
// //
// // if (myConst === 10) {
// //     const myConst1 = 100;
// //     myLet = 11;
// //     console.log(myConst1 + ' - ' + myLet);
// //     if (myConst1 === 100) {
// //         let i;
// //         for (i = 1; i<= 100; i++) {
// //             myLet++;
// //             console.log(myConst1 * i + ' - ' + myLet) ;
// //             if (myLet === 13) {
// //                 break;
// //             }
// //         }
// //     }
// // }
//
// // let aa = 0;
// //
// // for (aa=1; aa<100; aa++) {
// //     if (aa===50) {
// //         continue;
// //     }
// //     if (aa===50) {
// //         console.log('this message will not appear!')
// //     }
// //     console.log(aa);
// // }
//
// // let aa = 0;
// // while (aa < 100) {
// //     aa++;
// //     console.log(aa);
// //
// //     if ((aa % 10) == 0) {
// //         continue;
// //         console.log('... this should not be displayed...');
// //     }
// //
// //     console.log();
// // }
//
// //
// // const buggyCode = () => {
// //     debugger;
// //     let i = 0;
// //     for (i=0; i<100; i++) {
// //         console.log('i == ${i}');
// //         debugger;
// //     }
// // }
// //
// // buggyCode();
//
// console.groupCollapsed('switch, do/while, ...')
//
// let u = 0;
// switch (u) {
//     case 1:
//         console.log('this is 1');
//     case 2:
//         console.log('this is 2');
//     default:
//         console.log('this is default selection');
// }
//
// let o = 0;
// let res = '';
//
// do {
//     o += 1;
//     res += Math.pow(o, o) + ' - ';
// } while (o < 50);
//
// console.log(res);
//
// let shushu = document.getElementById('shushu');
// if (shushu) {
//     document.getElementById('shushu').innerHTML = res;
// }
//
// console.groupEnd();
//
// const myFunction = (cucu) => {
//     console.log('myFunction');
//     // let cucu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//     console.log(cucu);
//
//     for (let i = 1; i < cucu.length; cucu[i++] = Math.pow(cucu[i], cucu[i]));
//     console.log(cucu);
//
// };
//
// // export { myFunction };
// const createArray_method1 = (noOfSubArrays, columns) => {
//     let result = [];
//     let subarray = [];
//     for (let i = 0; i < noOfSubArrays; i++) {
//         for (let j = 0; j < columns; j++) {
//             let randomNumber = Math.round(Math.random() * 100);
//             subarray.push(randomNumber);
//         }
//         result.push(subarray);
//         subarray = [];
//     }
//     return result;
// }
//
// const createArray_method2 = (noOfSubArrays, columns) => {
//     let result = [];
//     let subarray = [0, 0, 0, 0];
//
//     for (let i = 0; i < noOfSubArrays; i++) {
//         for (let j = 0; j < columns; j++) {
//             let randomNumber = Math.round(Math.random() * 100);
//             subarray[j] = randomNumber;
//         }
//         result.push(subarray);
//     }
//     return result;
// }
//
//
// const sumArrayValues4Columns = (jeez) => {
//     let x = [0, 0, 0, 0];
//     if (Array.isArray(jeez)) {
//         for (let i = 0;
//              (i < jeez.length) && (Array.isArray(jeez[i]));
//              x[0] += jeez[i][0], x[1] += jeez[i][1], x[2] += jeez[i][2], x[3] += jeez[i][3], i++);
//     }
//     return x;
// }
//
//
// //define array or arrays
// let jeez = [[1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [2, 3, 4, 5],
//     [5, 2, 3, 6],
//     [1, 2, 6, 2]];
//
// // console.log(sumArrayValues4Columns(jeez));
//
// pieceofcode: {
//     console.group('1st Method of creating the array')
//
//     // console.time('reinit');
//     let jeez = createArray_method1(100, 4);
//     // console.timeEnd('reinit');
//
//     console.groupCollapsed('The generated Array')
//     console.table(jeez);
//     console.groupEnd();
//
//     console.groupEnd();
//
//     console.group('2nd Method of creating the array');
//     // console.time('reinit1');
//     let jeez1 = createArray_method2(100, 4);
//     // console.timeEnd('reinit1');
//     console.groupEnd()
// // console.log('reinit after each loop: array generation time is: ' + (endTime-startTime));
// }
//
// console.groupCollapsed('a debugged part, collapsed');
// console.log('array is: ')
// // console.log(jeez);
// console.table(jeez);
// console.log('array length is: ' + jeez.length)
//
// console.log(sumArrayValues4Columns(jeez));
//
// console.groupEnd();
//
// console.group('other stuff');
//
// ciuciu: {
//     let o = [1, 2, 43, 5];
//     o.fill(0);
//     console.log('o: ');
//     console.log(o);
// }
//
// console.groupEnd();
//
// let object = {};
// let tempObject = {};
// for (let j = 0; j < 100; j++) {
//     for (let i = 0; i < 100; i++) {
//         let propertyTemp = 'property' + i;
//         tempObject[propertyTemp] = i;
//     }
//     let propertyMain = 'property' + j;
//     object[propertyMain] = tempObject;
// }
//
// {
//     let u = [[0, 9, 8, 7]];
//     let Obj = {aa: {a: 1}};
//     let Obj1 = {a: 1};
//
//     console.groupCollapsed('object');
//
// // console.log(object);
// // console.table(object);
//     console.table(u);
//     console.table(Obj);
//     console.table(Obj1);
//
//     console.groupEnd();
// }
//
// console.groupCollapsed('for ... in ');
//
// {
//     // let obj = {a: 1, b: 2, c: 3};
//     // for (let properti in obj) {
//     //     console.log('obj.' + properti + ' = ' + obj[properti]);
//     // }
//     //
//
//     let triangle = {a: 0, b: 1, c: 2};
//
//     function coloredTriangle() {
//         this.color = 'red';
//         this.space = '3d';
//     }
//
//     console.log('ce dracu face asta ????????????');
//
//
//     coloredTriangle.prototype = triangle;
//     // triangle.prototype = coloredTriangle();
//     let newObj = new coloredTriangle();
//     let obj1 = new coloredTriangle();
//
//
//     console.log(obj1);
//     console.log(newObj);
//     console.log('Object.getOwnPropertyNames returns: ');
//     console.log(Object.getOwnPropertyNames(newObj));
//
//     for (let prop in newObj) {
//         if (newObj.hasOwnProperty(prop)) {
//             console.log('obj.' + prop + ' = ' + newObj[prop]);
//         }
//     }
//     console.group('all object properties including inherited ones.');
//     for (let prop in newObj) {
//         console.log('obj.' + prop + ' = ' + newObj[prop]);
//     }
//     console.groupEnd();
//
//     console.dir('new console dir');
//     for (let j in newObj) {
//         console.log(newObj[j]);
//     }
// }
//
// console.groupEnd();
//
//
// //block handling the  for (i of iterable) instruction for each iterable data type.
// console.group('for (i of iterable) {...} for each iterable using it data type')
//
// for_variable_of_iterable: {
//     //Array
//     console.groupCollapsed('Iterating through an Array');
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 6, 5, 4, 3, 2, 1, 0];
//     let index = 0;
//
//     for (let it of array) {
//         console.log('array[' + index + '] = ' + it);
//         index++;
//     }
//     console.dir(array);
//     //or using a const if the element value is not changed inside the for
//     for (const element of array) {
//         console.log(element);
//     }
//     console.groupEnd();
//
//     console.groupCollapsed('Iterating through a String');
//     let myString = 'abcdef';
//     for (let char of myString) {
//         console.log(char);
//     }
//     console.groupEnd();
//
//     console.group('Iterating through a Typed Array')
//     let myTypedArray = new Uint8Array([0x00, 0xff, 0xed]);
//
//     for (let value of myTypedArray) {
//         console.log(value);
//     }
//     console.groupEnd();
//
//     console.group('Iterating through a Map');
//     let myMap = new Map([['a', 1], ['b', 2], ['c', 3], ['b', 4]]);
//     console.table(myMap);
//     //Method 1
//     console.groupCollapsed('1st Method');
//     for (let i of myMap) {
//         console.log(i);
//     }
//     console.groupEnd();
//
//     //Method 2
//     console.group('2nd Method');
//
//     for (let [i, j] of myMap) {
//         console.log(i + ':' + j);
//     }
//     console.log('Map length: ' + myMap.size);
//     let newMap = myMap.entries();
//     console.log('My New Map is:');
//     console.log(newMap);
//
//     for (let [a, b] of newMap) {
//         console.log(a + ' -> ' + b);
//     }
//     console.log('b = ' + myMap.get('b'));
//     console.log('Has b a value ? (true/false) :' + myMap.has('b'));
//
//     let mySampleMap = new Map();
//     let keyString = 'bubulina',
//         keyObj = {},
//         keyFunc = function () {};
//     mySampleMap.set(keyString, "This is the value associated with 'bubulina'");
//     mySampleMap.set(keyObj, 'value associated with keyObj');
//     mySampleMap.set(keyFunc(), 'value associated with keyFunc');
//
//     console.log('mySampleMap.size: ' + mySampleMap.size);
//     console.log(mySampleMap);
//
//     console.log('mySampleMap.get(keyString) = ' + mySampleMap.get(keyString));
//     console.log('get key for value: ' + mySampleMap.get(mySampleMap.get(keyString)));
//     console.log('mySampleMap.get(keyObj) = ' + mySampleMap.get(keyObj));
//     console.log('mySampleMap.get(keyFunc()) = ' + mySampleMap.get(keyFunc()));
//     console.log('mySampleMap.get({}) = ' + mySampleMap.get({}));  // undefined, because keyObj !== {}
//     console.log("mySampleMap.get('bubulina') = " + mySampleMap.get('bubulina'));  // undefined, because keyObj !== {} ????????
//     console.log("mySampleMap.get(function() {}) = " + mySampleMap.get(function() {}));  // undefined, because keyObj !== {} ????????
//
//     console.group('mySampleMap iterated with forEach');
//
//     // console.time('iterate Map using forEach');
//     mySampleMap.forEach(function(value, key) {
//         console.log(key + ' = ' + value);
//     });
//     // console.timeEnd('iterate Map using forEach');
//
//     console.groupCollapsed('iterate throught big Map using different methods and check for best performing one...');
//
//     let Map2 = new Map();
//     let f_property = '';
//     let f_value ;
//     for (let i = 1; i<100; i++) {
//         f_property = 'property' + i;
//         f_value = 'value' + i;
//         Map2.set(f_property, f_value);
//     }
//     console.log(Map2);
//
//     console.time('start: let u of Map2');
//     console.groupCollapsed('let u of Map2')
//     for (let u of Map2) {
//         console.log(u);
//     }
//     console.groupEnd();
//     console.timeEnd('start: let u of Map2');
//
//     console.time('start: let [prop,value] of Map2');
//     console.groupCollapsed('let [prop,value] of Map2');
//     for (let [prop, value] of Map2) {
//         console.log('["' + prop + '": "' + value + '"]');
//     }
//     console.groupEnd('let [prop,value] of Map2');
//     console.timeEnd('start: let [prop,value] of Map2');
//
//     console.time('forEach');
//     console.groupCollapsed('start: forEach');
//     Map2.forEach(function (prop, value) {
//         console.log('["' + prop + '" = "' + value + '"]');
//     });
//     console.groupEnd('start: forEach');
//     console.timeEnd('forEach');
//
//
//     console.groupEnd(); // iterate through Map using different methods and check for the best performing one;
//     console.groupEnd();
//     console.groupEnd();
// }
// console.groupEnd();
//
// console.group('array/map operators (spread, concat, unshift ...)')
// array_operation_spread_operator: {
//     let a = [];
//     let b = [];
//     for (let i = 0; i<1000; i++) {
//         a.push(['property' + i, Math.round(Math.random() * 100)]);
//         b.push(['property' + (1000 + i), Math.round(Math.random() * 100)]);
//     }
//     console.dir(a);
//     console.dir(b);
//
//     let c = [...a, ...b];
//     console.dir(c);
//
//     //create Maps from the arrays
//     let aMap = new Map(a);
//     let bMap = new Map(b);
//
//     //use spread operator to concat them to another array
//     let temp_length = a.length;
//
//     console.time('Use spread function to concatenate 2 ' + temp_length + ' elements array');
//     // debugger;
//     let c_fromMap = [...a, ...b];
//     console.timeEnd('Use spread function to concatenate 2 ' + temp_length + ' elements array');
//
//     console.time('Use concat function to concatenate 2 ' + temp_length + ' elements array');
//     // let c_fromMap = [...a, ...b];
//     let c_concat = a.concat(b);
//     console.timeEnd('Use concat function to concatenate 2 ' + temp_length + ' elements array');
//
//
//
//     console.dir(c_fromMap);
//
// }
// console.groupEnd('array/map operators (spread, concat, unshift ...)');
//

/*
 let set1 = [1,2,3];
 let set2 = [4,5,6];

 const sumThem = (a,b,c) => console.log(a+b+c);

 sumThem(...set1);

 let square = a => a*a;

 console.log(square(15));

 let planet = 'Mars';

 let string = '';

 string = `we are on a planet called ${planet} on which living is pretty difficult.`;

 console.log(string);


 const createArray = n => {
 let identifier = Math.round(Math.random() * 100);
 let temp=[];
 for (let i = 0; i < n; i++) {
 temp.push([`property-identif_${identifier}-${i}`, Math.round(Math.random() * 100)]);
 }
 return temp;
 }*/

// let a = createArray(1000000);
// let b = createArray(1000000);
// console.log(`concatenating two arrays of ${a.length} elements respectively ${b.length} elements`);
//
// {
//     let timeNowStart = Date.now();
//     let c = [...a, ...b];
//     let timeNowEnd = Date.now();
//     console.log(`using spread operator: start =${timeNowStart}; end = ${timeNowEnd};  duration: ${timeNowEnd - timeNowStart} ms`);
//     // console.log(c);
// }
// {
//     let timeNowStart = Date.now();
//     let c = a.concat(b);
//     let timeNowEnd = Date.now();
//     console.log(`using concat operator: start =${timeNowStart}; end = ${timeNowEnd};  duration: ${timeNowEnd - timeNowStart} ms`);
//     // console.log(c);
// }

import {sumTwo, sumThree, s} from './sum_functions';
import {people} from '../external-js/data/dataObjects';
// import {susu} from 'data/dataObjects';

// console.log(susu);
// console.log(`square: ${s(2)}`);
//
// console.log(people);
//
// // Object
// let {color, position} = {
//     color: "red",
//     name: "John",
//     state: 'New York',
//     position: 'CEO'
// }
//
// console.log(`color: ${color}`);
// console.log(`position: ${position}`);
//
// // function
// function generateObj(){
//     return {
//         color: "red",
//         name: "John",
//         state: "New York",
//         position: "CEO"
//     }
// }
//
// let {color:_color, position:_position} = generateObj();
//
// console.log(`color: ${_color}`);
// console.log(`position: ${_position}`);
//
// console.log('');
// //array
// let [primul,,,,,,ultimul] = ["alb", "negru", 'rosu', 'albastru', 'portocaliu', 'roz', 'lila'];
//
// console.log(`primul element din sir e: ${primul}`);
// console.log(`ultimul element din sir e: ${ultimul}`);
// console.log();
// //array of objects
//
//
// people.forEach(({firstname}) => console.log(firstname));
//
//
// let u = 1;
// people.forEach(obj => {
//     console.log (u);
//     for (let i in obj) console.log(`${i}: ${obj[i]}`);
//     u++;
// });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// logheaza eroarea regeneratorRuntime is not defined
// let  j = function* idGen() {
//     for (let j = 1; j <= 1000; j++) {
//         yield j;
//     }
// }


// let j = idGenerator();
// console.log(j.next());
// let Generator1 = ()* => {};

//
// people.forEach(
//     function (obj) {
//         Object.keys(obj).forEach(function (key) {console.log(key + ': ' + obj[key])});
//     });
//

// people.forEach(obj => Object.keys(obj).forEach(key => console.log (`${key}: ${obj[key]}`)));

// people.forEach(obj => {
//     // for (let field of obj) {
//     //     console.log(`${field}:`);
//     // }
//     console.log(obj);
//     // for (let i of obj) console.log(`${i}`)
// });
//
// let newObj = {
//     firstname : "Clinton",
//     lastName : "Ruiz",
//     address : "P.O. Box 171, 1135 Feugiat St.",
//     email : "a@a.com",
//     phone : "1-403-987-2345"
// }
//
// let createObj = n => {
//     let rezObj = {};
//     for (let i = 0; i < n; i++) {
//         let rand_obj = Math.round(Math.random()*100);
//         let rand_prop = Math.round(Math.random()*100);
//         rezObj[`prop_${rand_obj}`] = `value_${rand_prop}`;
//     }
//     return rezObj;
// }
//
// let myObj = createObj(1000);
// console.log(myObj);

// for (let i in myObj) {console.log(`${i}: ${myObj[i]}`)};

//
// console.log(newObj);
// let {firstname:fname, lastName:lname, address:add, email, phone:mobile} = newObj;
// console.log(` fname: ${fname} \n lname: ${lname} \n address: ${add} \n email: ${email} \n phone: ${mobile}`);
//
// console.log('');
//
// for (let a in newObj) console.log(`${a}: ${newObj[a]}`);

//
//
// let [,second] = people;
// console.log(second);
//
// let logEmail = ({email}) => console.log(`email is: ${email}`);
//
// logEmail(second);
//
//
//
// console.log(sumTwo(2,3));
// console.log(sumThree(5,6,3));
//
//
// const add = a => b => a + b;
// const add2 = add(2);
// console.log(add2);
// //
// // add2(1);
// console.log(add2(1));
// //
//
// {
//     let kvArray = [['key1', 'value1'],['key2', 'value2']];
//     let kv1Array = [['key3', 'value3'],['key4', 'value4']];
//     console.log(kv1Array);
//     console.log(kvArray);
//
//     let myMap = new Map(kvArray);
//     let myMap1 = new Map(kv1Array);
//
//     console.log(myMap);
//     console.log(myMap1);
//
//     let unitedARray = [...kvArray, ...kv1Array];
//     let unitedMap = new Map([...myMap, ...myMap1]);
//
//     console.log(unitedARray);
//     console.log(unitedMap);
// }

// {
// let kvArray = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
//
// let myMap = new Map(kvArray);
// // console.log(myMap.get('key2'));
// console.log(myMap);
//
// // Use the spread operator to transform a map into a 2D key-value Array.
// console.log('spread operator to transform a map into a 2d key-value array');
// console.log([...myMap]);
//
// console.log('using functions on Maps');
// console.log('myMap.entries');
// console.log([...myMap.entries()]);
//
// console.log('myMap.get');
// console.log(myMap.get('key1'));
//
// console.log('myMap.delete, removes second key');
// if (myMap.delete('key2')) console.log(myMap);
//
// console.log('myMap.get');
// console.log(`${myMap.has('key2')}`);

// function* fibonacci() { // a generator function
//     let [prev, curr] = [1, 1];
//     while (true) {
//         [prev, curr] = [curr, prev + curr];
//         yield curr;
//     }
// }
//
// for (let n of fibonacci()) {
//     console.log(n);
//     // truncate the sequence at 1000
//     if (n >= 1000) {
//         break;
//     }
// }
// let string = 'abcd';
// for (let i of string) {console.log(i)};
// for (let i in string) {console.log(string[i])};
// }

// console.log('======================');
// console.log(document);

/*

window.onload = addElementsToJsTricks;


function addElementsToJsTricks() {
    // console.log(window.document);
    // console.log(`inside getThem() function`);
    let list = document.getElementById('jstricks');
    console.log(list);
    console.log(``);

    for (let i = 0; i < 33; i++) {
        let elem = document.createElement('a');
        elem.style.cssText = 'list-style-type: none; cursor: pointer;';
        // elem.setAttribute('href', 'http://www.google.com');
        // elem.setAttribute('target', '_new');
        elem.setAttribute('class', 'li-style');
        elem.appendChild(document.createTextNode(`this is item ${i}`));

        elem.onclick = function (ev) {
            console.log(`clicked on element ${i} + ${ev.toString()}`);
        };
        list.appendChild(elem);
    }
}

// let aaa = () => {
//     var xx = 1;
//     let yy = 1;
//     console.log(this.xx);
//     console.log(this.yy);
// }
//
// aaa();

var MyConstructor;

{
    // let myScope = Object.create(null); // has no prototype
    let myScope = {};

    //prototype;
    MyConstructor = function MyConstructor() {
        this.publicName = 'Andrew Public';
        myScope.secretName = 'Lorenzo secret';
    }

    //add a method to prototype
    MyConstructor.prototype.showPublic = function () {
        console.log(`this is the public name: %c${this.publicName}`, 'padding: 0 5px; background: lightgreen; color: darkgreen;');
    }

    MyConstructor.prototype.showSecret = function () {
        console.log(`this is the secret name: %c${myScope.secretName}`, 'padding: 0 5px; background: red; color: white;');
    }

    console.log(` %cmyScope for this block is:`, 'background: #f432fc; color: white; padding: 0 5px;');
    console.log(myScope);
}

let myConstr = new MyConstructor();

myConstr.showPublic();
myConstr.showSecret();

// class MyClass2
//     calculate(a) {
//         return a + 1;
//     }
// }
//
// class MyClass {
//     constructor(MyClass2) {
//         this.MyClass2 = MyClass2
//     }
//
//     myMethod() {
//
//     }
// }
import {setValuesConcat, createRandomMap} from './customFunctions';
import {functionReturn as noReturn} from './customFunctions';
import {magic as leMagique, gimmeTypeOf as gimme} from './customFunctions';


{
    let mySeriousMap = createRandomMap(1000);
    console.log(mySeriousMap);

    let sumOfAllValues = setValuesConcat(mySeriousMap);
    console.log(`sumOfAllValues: ${sumOfAllValues}`);

    let asdf = {a: 1, b: 5};
    let sumOfAllValues1 = setValuesConcat(asdf);
    console.log(`sumOfAllValues: ${sumOfAllValues1}`);


}

{

    let u = 10;
    console.log(u);
    noReturn();
    let myVar = leMagique();
    console.log('myVar:');
    console.log(myVar);
    // console.log(myVar());

    let myArr = [1, 2, 3, 4, 5, 6, 7];
    let myS = new Set(myArr);
    let myArr1 = [['a', 1], ['b', 2]];
    let myM = new Map(myArr1);

    console.log('Input Number - returned by function :' + gimme(u));
    console.log('Input Function - returned by function: ' + gimme(myVar));
    console.log('Input Set - returned by function: ' + gimme(myS));
    console.log('Input Map - returned by function: ' + gimme(myM));

}


// {
//     console.log('test break missing');
//     var foo = 0;
//     switch (foo) {
//         case -1:
//             console.log('negative 1');
//             break;
//         case 0: // foo is 0 so criteria met here so this block will run
//             console.log(0);
//         case 1:
//             console.log(1);// no break statement in 'case 1:' so this case will run as well
//         case 2:
//             console.log(2);// no break statement in 'case 2:' so this case will run as well
//         default:
//             console.log('default');// no break statement in 'default:' so this case will run as well
//     }
// }

import {pickAnimals as chooseArk} from './customFunctions';

{
    let animal = ['Bear', 'Eagle', 'Snake', 'Wolf', 'Monkey', 'Dinosaur', 'Alien', 'Human', 'Other'];

    for (let i of animal) {
        console.log(chooseArk(i));
    }
}

import {congrats as congrat} from './customFunctions';

{
    let congratsList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    for (let i of congratsList) {
        console.log(congrat(i));
    }
}

// import {erroring as errorItOut} from './customFunctions';
//
// {
//     let o = false, e;
//
//     //first level
//     try {
//
//         errorItOut();
//
//         console.log('lvl 1: this is me!    ');
//     }
//     catch (e) {
//         console.error(`lvl 1: Error: ${e.message}`);
//     }
//
// }


// import {errorCode as throwErrorTypes} from './customFunctions';
//
// {
//     let didItThrowError = false;
//     try {
//         // throwErrorTypes(1);
//         throwErrorTypes(2);
//         // throwErrorTypes(3);
//     }
//     catch (err) {
//         if (err instanceof TypeError) console.error(`Type error (1) was encountered: ${err.message}`);
//         if (err instanceof RangeError) console.error(`Range error (2) was encountered: ${err.message}`);
//         if (err instanceof EvalError) console.error(`Eval error (3) was encountered: ${err.message}`);
//         didItThrowError = true;
//     }
//     finally {
//         if (didItThrowError) console.info('Finally: Rolling back everything');
//     }
// }

import {varVsLet} from './customFunctions';

{
    // varVsLet();
}

{
    var a = 'A';
    var b = a;

    console.log(`a: ${a} - b: ${b}`);

    var x, y = x = 'A';

    console.log(`x: ${x} - y: ${y}`);
}

import {createElements} from './customFunctions';

{
    window.onload = createElements;
}

import {createSet as _createSet} from './customFunctions';

{
    let mySet = _createSet();

    console.log(mySet);
}

//ARRAY
*/

import * as _arr from './ArrayFunctions';

{
    //create Array
    let myColors = ['White','Red','Pink','Orange','Yellow','Blue','Light Blue','Light Gray','Gray','Dark Gray','Marine','Mugurish','Stinkish'];
    let myNumbering = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th'];

    console.log (`myArr.length: ${myColors.length}`);

    for (let i = 0; i < myColors.length; i++) {
        console.log(`At position ${i} in the array is the element: ${myColors[i]}`);
    }

    myColors.forEach((value, index, array) => {
        console.log(`At position ${index} in the array is the element: ${value}`);
    });


    myColors.push('Orangish', 'DARKISH');

    myColors.forEach((value, index) => console.log(`at position ${index} of the array is ${value}`));

    console.log('===============');
    let lastColor = myColors.pop();
    console.info(`removed last element ${lastColor} from the array by using console.pop()`);

    myColors.forEach((value, index) => console.log(`at position ${index} from the array is ${myColors[index]}`));

    let firstColor = myColors.shift();
    console.info(`removed first element ${firstColor.toUpperCase()} of the array with myColors.shift`);

    myColors.forEach((value, index) => console.info(`at index ${index} in the array is ${value.toUpperCase()}`));
    let secondColor = myColors.shift();

    myColors.forEach((v, i) => console.log(`at pos ${i} in the array is %c${v.toUpperCase()}`, 'background-color: red; color: white; padding: 0 5px; font-weight: bold;'));

    let oneofLast = myColors.pop();
    console.info(`removed element %c${oneofLast.toUpperCase()}%c from last position of the array`, 'background-color: yellow; padding: 0 5px; color: red;', 'background-color: transparent');

    myColors.forEach((v, i) => console.info(`at position ${i} in the array is %c${v.toUpperCase()}`, 'background-color: orange; color: white; padding: 0 10px;'));

    let newLength = myColors.unshift('FirstColor');
    console.info(`Added a new element at the beginning of the array. New Array length is ${newLength}`);
    myColors.forEach((v, i) => console.info(`at position ${i} in the array is [ %c${v}%c ]`, 'background-color: red; color: white; padding: 0 10px;', 'background-color: transparent;'));

    let newLength1 = myColors.push('TheColor');

    myColors.forEach((v, i) => console.info(`index ${i} has value ${v}`));

    //slice
    let C = myNumbering.splice(1,1);
    console.log(`removed color at position 1 ${C[0]} from array `);
    console.log(C);

    myNumbering.forEach((v,i) => console.log(`index ${i}: value ${v}`));

    _arr.showArray(C);

    let C1 = myNumbering.splice(1,5);

    _arr.showArray(myNumbering);


    newLength1 = myNumbering.push('14th');
    console.log('new length, after adding a new element is: ' + newLength1);
    _arr.showArray(myNumbering);


    newLength1 = myNumbering.push('1st');
    console.log(``);

}

{
    let myNumbers = [0,1,2,3,4,5,6,7,8,9];
    _arr.showArray(myNumbers);
    let temp1 = 10;
    myNumbers.push(temp1);
    console.log(`added number ${temp1} to the end of the array...`);
    _arr.showArray(myNumbers);
    let last = myNumbers.pop();
    console.log(`Eliminate last element of the array: ${last}`);
    console.log(myNumbers);
    let first = myNumbers.shift();
    console.log(`Eliminate the first element of the array ${first}`);
    console.log(myNumbers);
    let newLength = myNumbers.unshift(-5,-4,-3,-2,-1,0);
    console.log(`Add at the beginning of the Array. New Array length ${newLength}`);
    console.log(myNumbers);
    _arr.sumArray(myNumbers);
    //eliminate last element from Array
    last = myNumbers.pop();
    console.log(`Removed last element from the Array: ${last}`);
    //recalculate sum of all elements of the Array
    _arr.sumArray(myNumbers);
    newLength = myNumbers.push(99);
    console.log(`Added at the end of the Array a new value`);
    console.log(myNumbers);
    _arr.sumArray(myNumbers);
    console.log(`Removed first element of the Array`);
    myNumbers.shift();
    console.log(myNumbers);
    _arr.sumArray(myNumbers);
    console.log(`removing 7th element of the array with value ${myNumbers.splice(6,1)}`);
    console.log(myNumbers);
    _arr.sumArray(myNumbers);
    console.log(`removing sub Array starting from position 2, a number of 5 elements`);
    let myRemovedSubArray = myNumbers.splice(3,5);
    _arr.showArray(myNumbers,2);
    _arr.showArray(myRemovedSubArray,2);

    let myNewArray = _arr.createNumericArray(100);
    _arr.showArray(myNewArray,2);
    console.log(myNewArray.length);

    console.time('duplicateThroughReassignation');
    let myNewArray1 = myNewArray;
    console.timeEnd('duplicateThroughReassignation');
    console.log(myNewArray.length);


    _arr.showArray(myNewArray1,2);


    console.time('duplicateUsingSlice');
    let myNewArray2 = myNewArray.slice();
    console.timeEnd('duplicateUsingSlice');
    _arr.showArray(myNewArray2,2);

    console.time('duplicateUsingSpread');
    let myNewArray3 = [...myNewArray];
    console.timeEnd('duplicateUsingSpread');
    console.log(`myNewArray[0]: ${myNewArray[0]}`);
    myNewArray3[0]++;
    console.log(`myNewArray3[0]++: ${myNewArray3[0]}`);
    console.log(`myNewArray[0]: ${myNewArray[0]}`);
    _arr.showArray(myNewArray,2);
    _arr.showArray(myNewArray3,2);




    //create new Array
    // console.time('new array[1000*1000]');
    // let Array1 = new Array(1000 * 1000);
    //
    // for (let oo = 0; oo < 1000*1000; oo++) {
    //     Array1[oo] = Math.floor(Math.random()*100);
    // }
    // console.timeEnd('new array[1000*1000]');
    //
    // console.log(Array1);
    //

    let myA = [1,2,3,4,5,6,7,8,9];
    let myB = myA; //shallow copy ?

    // console.log('myA[0]: ' + myA[0]); // myA[0] = 1
    // myB[0]++; //  myB[0] = 2
    // console.log('myB[0]: ' + myB[0]); // myB[0] = 2
    // console.log('myA[0]: ' + myA[0]); // myA[0] = 2 !!!!!!!

    let myC = myA.slice(0);
    _arr.showArray(myA,2);
    _arr.showArray(myC,2);

    myA.length=1;
    _arr.showArray(myA,2);
    console.log(`Array size: ${myA.length}`);
    myA.length=9;
    _arr.showArray(myA,2)


console.clear();

}

{
    let myArr = _arr.createNumericArray(30);
    console.log(myArr);

    let newLen = myArr.push(101);
    console.log(myArr);

    console.log('remove element');
    let removedElem = myArr.pop();

    console.log(`Element removed from the end is ${removedElem}`);
    console.log(myArr);

    console.log(`remove element from the start of the array`);

    let arrayFirstRemovedElement = myArr.shift();
    console.log(arrayFirstRemovedElement);
    console.log(myArr);
    console.log(`Array length: ${myArr.length}`);
    let newLen1 = myArr.unshift(100);
    console.log(`Array length after unshift - added element 100 at beginning of array: ${myArr.length}`);
    console.log(myArr);

    let myArr1 = [...myArr].reverse();
    console.log(`myArr: `);
    console.log(myArr);

    console.log(`myArr1: `);
    console.log(myArr1);


    let tr = myArr.includes(100);
    console.log(tr);

    let myA = [1,2,3,4,5,6,7,8,9];

    console.log(`_arr.stringifyMyArray(myA): ${_arr.stringifyMyArray(myA)}`);
    // myArr.splice(3,5,myA.forEach((v) => v)); why not work ?
    myArr.splice( 3, 5, _arr.stringifyMyArray(myA));
    console.log((myArr));

    myA.forEach((v,i,arr) => console.log(v));
    let msg = '';
    console.log(myA.forEach(v => msg += ',' + v));

    let myArr2 = myArr.slice();
    console.log(myArr2);

}