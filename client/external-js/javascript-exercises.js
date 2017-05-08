import {people, sampleObject} from '../external-js/data/dataObjects';


/*
 // /!**
 //  * Created by liz on 2/6/17.
 //  *!/
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

 /!*
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
 }*!/

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

 /!*

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
 *!/

 import * as _arr from './ArrayFunctions';
 /!*

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
 *!/

 let agen = (n) => {
 let mA = [];
 for (let i = 0; i < n; i++) {
 mA.push(Math.floor(Math.random() * 1000));
 }
 return mA;
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

 let myA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 // console.log(`_arr.stringifyMyArray(myA): ${_arr.stringifyMyArray(myA)}`);
 // myArr.splice(3,5,myA.forEach((v) => v)); why not work ?
 // myArr.splice( 3, 5, _arr.stringifyMyArray(myA));

 let args = [3, 5].concat([...myA]);
 console.log(`args: ${args}`);
 myArr.splice.apply(myArr, args);
 console.log(`===============================  here i work! ==================================`);

 // let args = [3,5].concat([...myA]);
 // console.log(args);
 // myArr.splice.apply( args);
 console.log((myArr));

 // myA.forEach((v,i,arr) => console.log(v));
 // let msg = '';
 // myA.forEach(v => msg += ',' + v);

 // let myArr2 = myArr.slice();
 // console.log(myArr2);

 console.log([0, 1, 2, 3, 4, 5].reduce((acc, v) => acc += v));

 myArr.push(NaN);
 console.log(myArr);
 let myMax = myArr.reduce((acc, v) => {
 if ((typeof v == 'number') && !isNaN(v)) {
 return Math.max(acc, v);
 }
 ;
 return acc;
 }, 0);

 console.log(`max of the Array is: ${myMax}`);
 console.log(typeof NaN);


 let myFarr = [0, [1, [2, [3, [4]]]]];

 let liniarized = myFarr.reduce((acc, v) => acc.concat(v), []);
 console.log(liniarized);


 let mA = agen(100000);
 _arr.showArray(mA, 2);

 mA.push(100000);

 let max = mA.reduce((cc, v) => Math.max(cc, v), 0);
 console.log(`max: ${max}`);

 let sum = mA.reduce((accum, value) => accum += value, 0);
 console.log(`sum of all elements in array is: ${sum}`);

 let SS = 0;
 for (let i of mA) {
 SS += i;
 }
 console.log(SS);

 let min = mA.reduce((accum, vl) => Math.min(accum, vl));
 console.log(`min value in array is: ${min}`);

 let minn = mA[1];
 for (let i of mA) {
 minn = Math.min(minn, i);
 }
 console.log(`min value in array is: ${minn}`);


 console.log('add element at the end');
 mA.push(101);
 console.log(mA);

 let fin = mA.pop();
 console.log(`remove element ${fin} from the end`);
 console.log(mA);

 let st = mA.shift();
 console.log(`remove element ${st} from the start`);
 console.log(mA);

 console.log('add element at the beginning');
 mA.unshift(100);
 console.log(mA);

 console.log(`duplicating array`);
 let mB = mA.slice();

 console.log(`pushed element 1000 to mB`);
 mB.push(1000);
 console.log(`last element from mB is: ${mB[mB.length - 1]} and array length is ${mB.length}`);
 console.log(`last element from mA is: ${mA[mA.length - 1]} and array length is ${mA.length}`);

 console.log(`removed x elementss from list and added a new one`);
 console.time('apply');

 // mB.length=0;
 let minArray = Math.min.apply('', mB);
 console.timeEnd('apply');

 console.log(`(apply) min array mB is: ${minArray}`);

 console.time('reduce');
 let minRed = mA.reduce((acc, v) => Math.min(acc, v), +Infinity);
 console.timeEnd('reduce');

 let minRed1 = Math.min.apply(null, mA);
 console.log('minRed1:' + minRed1);

 console.log(`(reduce) min array mB is: ${minRed}`);

 mB.sort((v, arr) => arr[0]);
 console.log(mB);

 console.log();

 let mC = [1, 2, 3, 4, 3, 2, 1, 0, 99];
 let mJ = [0, 1, 2, 3, 4, 5];

 console.log(`mC before splice`);
 console.log(mC);


 let mm = Array.prototype.splice.apply(mC, [3, 5].concat([...mJ]));
 console.log(mC);
 console.log(`mm: ${mm}`);


 console.clear('===============');

 }

 let myNamesGen = n => {
 let oTemp = [];
 for (let i = 0; i++; i < n) {
 oTemp.push()
 }
 return oTemp;
 }

 {
 let myArray = agen(10);
 console.log(myArray);

 //min value using reduce
 let minValueReduce = myArray.reduce((acc, v) => Math.min(acc, v), +Infinity);
 console.log(`Min Value of array using reduce: ${minValueReduce}`);

 //min value using apply
 let minValueApply = Math.min.apply(null, myArray);
 console.log(`Min value of array using apply: ${minValueApply}`);

 //max value using reduce
 let maxValueReduce = myArray.reduce((acc, v) => Math.max(acc, v), -Infinity);
 console.log(`Max value of array using reduce: ${maxValueReduce}`);

 //max value using apply
 let maxValueApply = Math.max.apply(null, myArray);
 console.log(`Max value of array using apply: ${maxValueApply}`);


 let myNames = [];


 }


 console.clear();


 //Arrays declaration

 /!**
 * Function that generates a random number from 0 to max;
 * @param max {number}
 *!/
 const random = max => Math.floor(Math.random() * max);

 ArrayDeclarationBlockLabel: {
 let n = 1000;


 // ====================================================
 let a = [], value;
 for (let i = 0; i < n; i++) {
 value = random(100);
 a.push(value);
 }

 //custom display array function
 _arr.showArray(a, 2);

 // ====================================================
 let b = new Array(n);

 for (let i = 0; i < n; i++) {
 value = random(100);
 b[i] = value;
 }

 //custom display array function
 _arr.showArray(b, 2);
 }


 {
 let arr = [1, 2, 3, 4, 5];
 let arr1 = [6, 6, 6, 7, 7, 7, 6, 6, 6, 6, 6];
 _arr.showArray(arr1, 2);

 // let myRet = arr1.splice(3,3,[...arr]);
 //   let myRet1 = arr1.splice([3,3].concat([...arr]));

 // let myRet = Array.prototype.splice.apply(arr1, [3,3].concat([...arr]));
 // _arr.showArray(arr1,2);
 // _arr.showArray(arr1,2);

 let arr2 = [...arr, ...arr1];
 let arr3 =
 console.log(arr2);

 }


 /!*
 console.clear();

 const getNewJob = (obj) => {
 if (obj instanceof Object) {
 if (obj.flexibleHours && !(obj.companyCulture === 100)) {
 job.location = 'frlnc';
 } else if (obj.flexibleHours && (obj.companyCulture === 100)) {
 job.location = 'Some other company';
 }
 }
 };


 class role {
 constructor(role, location) {
 this.role = role;
 this.location = location;
 };

 sucks() {
 return true; // :))
 }
 }

 class prsn {
 constructor(name) {
 this.name = name;
 };

 isBored() {
 return true;
 }
 }

 myBlockLabel: {
 let dev = new prsn('Dev101');
 var job = new role('DEV/QA', 'TehCompany');

 //show stats prior
 console.log(`Show stats before:`);
 console.log(dev);
 console.log(job);
 console.log('\nEverything looks good... until... boom ... \n\n\n');

 if (dev.isBored() || job.sucks()) {
 getNewJob({flexibleHours: true, companyCulture: 100});
 }

 //show stats after
 console.log(`Show stats after:`);
 console.log(dev);
 console.log(job);
 }*!/


 console.clear();

 {
 const mygen = (n) => {
 let myAT = [], value;
 for (let i = 0; i < n; i++) {
 value = Math.floor(Math.random() * (-100));
 myAT.push(value);
 }
 return myAT;
 }

 let myArray = mygen(100);

 console.log(myArray);
 //
 // myArray.push(-1);
 //
 // myArray.length=0;
 // myArray.delete;

 // let minVal = myArray.reduce((acc, v) => Math.min(acc,v),+Infinity);
 // console.log(minVal);

 let arr = [1, 2, 3, 4, 5];

 let max = arr.reduce((acc, v) => Math.max(acc, v));
 console.log(max);

 let max1 = Math.max.apply(null, arr);
 console.log(max1);

 let myArray1 = myArray.concat([arr]);
 console.log(myArray1);
 }

 {
 let names = ['Andrei', 'Tudor', 'Ionel', 'Andrei', 'Lic', 'Lic', 'George', 'Szabi', 'Rudi', 'George'];
 console.log(_arr.countEncounters(names));
 console.log(_arr.countEncountersRTL(names));

 let n = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 2, 3];
 console.log(_arr.countEncounters(n));
 }

 {
 let names = ['Andrei', 'Tudor', 'Ionel', 'Andrei', 'Lic', 'Lic', 'George', 'Szabi', 'Rudi', 'George'];
 let newNames = ['Iuliu', 'Stefan', 'Lucian'];

 //concat
 console.log(names.concat(newNames));

 console.log(names.concat(newNames).indexOf('Lic'));
 console.log(names.concat(newNames).length);

 }


 const findAll = (arr, searchValue) => {
 let found = [];
 if (arr instanceof Array) {
 let fndIdx = arr.indexOf(searchValue, 0);
 while (fndIdx >= 0) {
 found.push(fndIdx);
 fndIdx = arr.indexOf(searchValue, fndIdx + 1);
 }
 }
 return found;
 };

 {
 let arr1 = [0, 1, 2, 3, 4, 3, 2, 1, 0];
 let arr = [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1];
 console.log(findAll(arr, 1)); //1,4,7,10,11,12,13
 console.log(findAll(arr, 2)); //2,5,8
 console.log(findAll(arr, 100));
 console.log(findAll(arr1, 100));

 console.log(arr.lastIndexOf(1));

 console.log(arr1.copyWithin(5, 0, 5));
 console.log(arr1.fill(1));

 let newA = new Array(100);
 console.log(newA);

 //fill
 newA.fill(1);
 console.log(newA);

 let newB = [1, 2, 3, 4, 5];
 console.log(newB);
 newB.reverse();
 console.log(newB);

 newB.sort();
 console.log(newB);
 }

 {
 let mA = [12, 12, 13, 12, 15, 16];
 const condition = (v, i) => ((v >= 12) && (i > -1));

 console.log(`all elements of the array are greater than 12 ? ${mA.every(condition)}`);
 }


 function isBigEnough(v, i, arr) {
 return v > 12;
 }


 {
 let mA = [12, 12, 13, 12, 15, 16];
 console.log(mA);
 let mB = mA.filter(isBigEnough);
 console.log(mB);

 console.log(mA.find(isBigEnough));
 console.log(mA.findIndex(isBigEnough));

 mA.forEach(function (v, i, arr) {
 console.log(`${i}: ${v}`);
 });

 let max = mA.reduce((acc, v) => Math.max(acc, v));
 console.log(max);

 mA.splice(3, 5, 1, 2, 3);
 console.log(mA);

 console.log(mA.shift());
 console.log(mA.shift());
 console.log(mA.shift());
 console.log(mA);

 mA.unshift(102);
 mA.unshift(101);
 mA.unshift(100);
 console.log(mA);

 let mAGreaterThan100 = mA.filter((v, i, arr) => v > 100);
 console.log(mAGreaterThan100);

 let greatest = mA.reduce((acc, v) => Math.max(acc, v));
 console.log(`GreatestReduce: ${greatest}`);

 let greatestMath = Math.max.apply(null, mA);
 console.log(`GreatestMath: ${greatestMath}`);
 }

 const createArray = (numberOfRecords) => {
 let localArray = [],
 i = 0,
 tempVal;
 while (i < numberOfRecords) {
 tempVal = Math.floor(Math.random() * 100);
 localArray.push(tempVal);
 i++;
 }
 return localArray;
 };


 const extendArrayNames = (arrayFN, arrayLN, noOfRecords) => {
 let tempArray = [],
 i = 0;
 if ((Array.isArray(arrayFN)) && (Array.isArray(arrayLN)) && (typeof noOfRecords == 'number')) {
 for (let i = 0; i < arrayFN.length; i++) {
 for (let j = 0; j < arrayLN.length; j++) {
 if (tempArray.length > noOfRecords) {
 return tempArray;
 }
 tempArray.push(`${arrayFN[i]} ${arrayLN[j]}`);
 }
 }
 }
 return tempArray;
 };


 {
 if (!Array.isArray1) {
 Array.isArray1 = (obj) => {
 return Object.prototype.toString.call(obj) == '[object Array]';
 }
 }
 console.log(Array.isArray1([1, 2, 3]));
 console.log(Array.isArray1(['a', 'b', 'c']));
 console.log(Array.isArray1([]));
 console.log(Array.isArray1(5));
 }


 const extendArrayNamesFN = (arrayFN) => {
 if (Array.isArray(arrayFN)) {
 return arrayFN.reduce((acc, v, i, arr) => {
 for (let idx = 0; idx < arr.length; idx++) {
 if (idx === i) continue;
 acc.push(`${v} ${arr[idx]}`);
 }
 return acc;
 }, []);
 } else {
 console.log(`Parameter received is not an array`);
 }
 return [];
 };

 {
 let myArray = createArray(100);
 console.log(myArray);

 let arrayFN = ['Lice', 'Zori', 'Andrei', 'Silviu'];
 let arrayLN = ['Kovacs', 'Popescu', 'Muresan', 'Lung'];

 let myNames = extendArrayNames(arrayFN, arrayLN, 100);
 console.log(myNames);

 let combinedFNnames = extendArrayNamesFN(arrayFN);
 _arr.showArray(arrayFN, 2);
 _arr.showArray(combinedFNnames, 2);

 ///find all names that start with S
 let filteredNames = combinedFNnames.filter((v, i, arr) => v.toString()[0] === 'S');
 console.log(filteredNames);

 let arr = createArray(100);
 console.log(arr);
 let newArray = arr.map((v, i, arr) => v * 2);
 console.log(newArray);

 //return back multiplied by 2 only the values that are greater than 50
 let newArray1 = arr.map((v, i, arr) => {
 if (v > 50) {
 return v * 2;
 }
 });
 let newArray2 = newArray1.filter((v, i, arr) => {
 if (typeof v == 'number') return v
 });
 console.log(newArray1);
 console.log(newArray2);

 let newArray3 = arr
 .map((v, i, arr) => {
 if (v > 50) {
 return v * 2
 }
 })
 .filter((v, i, arr) => {
 if (typeof v == 'number') {
 return v * 2
 }
 });
 console.log(newArray3);
 }

 const genArr = (n = 100) => {
 let tempArr = [];
 for (let i = 0; i < n; i++) {
 tempArr.push(Math.floor(Math.random() * 100));
 }
 return tempArr;
 };

 {
 let mArr = genArr(50);
 console.log(`mArr:  `);
 console.log(mArr);

 let mArr1 = new Array(10);
 mArr1.fill(1);

 mArr.splice.apply(mArr, [45, 5, ...mArr1]);
 console.log(mArr);

 let smallerThan20 = mArr.filter((v, i, arr) => {
 if (v < 20) {
 return v;
 }
 });
 console.log(smallerThan20);
 }


 const createArrayOfObjects = (n = 5) => {
 let tempArray = [],
 tempObj = {},
 tempProperty,
 tempValue;
 for (let i = 0; i < n; i++) {
 tempObj['property'] = i;
 tempObj['value'] = i ^ 2;
 tempArray.push(tempObj);
 tempObj = {};
 }
 return tempArray;
 };

 {
 let myObjectsArray = createArrayOfObjects();
 // console.log(myObjectsArray);

 let myArrRearranged = myObjectsArray.map((obj, i, arr) => {
 console.log(obj);
 // let arrObj = {};
 // if (obj instanceof Object) {
 //     try {
 //         arrObj[obj.property] = obj.value;
 //     }
 //     catch (e) {
 //         console.log(`Error: ${e.message}`);
 //     }
 // }
 return obj.value;
 });

 console.log(myArrRearranged);

 var kvArray = [{key: 1, value: 10},
 {key: 2, value: 20},
 {key: 3, value: 30}];

 // console.log(kvArray);
 }

 //TODO: look at this after analyzing call()


 {
 var str = '12345';
 // Array.prototype.map.call(str, function(x) {
 //     return x;
 // }).reverse().join('');


 let reversed = Array.prototype.map.call(str, x => x).reverse().join('');
 console.log(reversed);
 let reversed1 = Array.prototype.map.apply(str, [x => x]).reverse().join('');
 console.log(reversed1);
 // Output: '54321'
 // Bonus: use '===' to test if original string was a palindrome

 // let elArray = createArray(1000);
 // console.log(elArray.join('-'));

 }

 /!**
 * Generates from the parameter received an object having two elements:
 * sumValue - represent the sum of all values from the array.
 * myMap - represent a map object having {currentValue.name : currentValue.value} form.
 * @param arrayOfObjects {Object}
 *!/
 const getStatistics = (arrayOfObjects) => {
 return arrayOfObjects.reduce((accumulator, currentValue, index, theArray) => {

 //check if object is null or not
 if (Object.keys(currentValue).length > 0) {

 let tempName = currentValue.name || ''; // || 0 was added as a treatment for undefined and NaN values;
 let tempValue = currentValue.value || 0;  // || 0 was added as a treatment for undefined and NaN values;

 //sum values
 accumulator.sumValue += tempValue;

 //if there is the possibility to have duplicates in the initial object the handling should be done here ?
 if (accumulator.myMap.has(tempName)) console.log(`%c${index}: ${tempName} is duplicate in the object parameter!!!!`, 'background-color: red; color: white; padding: 0 5px;');

 //create a Map containing all value: name_value: value_value. For later for duplicated values last value index will be kept
 accumulator.myMap.set(tempName, tempValue);
 }

 return accumulator;

 }, {sumValue: 0, myMap: new Map()});

 };


 /!**
 * Compares two maps using mapNewthe second one as reference and returns all an array with all elementValues that exist in both and have (mapOld.New.value - mapNew.value >= filterValueDifference)
 * @param mapOld {Map}
 * @param mapNew {Map}
 * @param filterValueDifference
 * @returns {Array}
 *!/
 const retrieveNamesDiff = (mapNew, mapOld, filterValueDifference) => {
 let tempArray = [];
 mapNew.forEach((currentValue, currentKey) => {
 if (mapOld.has(currentKey)) {
 console.log(`${currentKey} : ${currentValue} - ${mapOld.get(currentKey)} >= ${filterValueDifference} : ${currentValue - mapOld.get(currentKey) >= filterValueDifference}`);
 if ((typeof currentValue === 'number') && (typeof mapOld.get(currentKey) === 'number')) {
 if (currentValue - mapOld.get(currentKey) >= filterValueDifference) {
 tempArray.push(currentKey);
 }
 }
 } else {
 console.log(`${currentKey} is not present on the old statistics!`);
 }
 });
 return tempArray;
 };


 //2 arrays de obiecte

 {
 let arrayNew = [{name: 'Boss', value: 50}
 , {name: 'Zori', value: 99}
 , {name: 'Luca', value: 99}
 , {name: 'Mircea', value: 99}
 , {name: 'Andrei', value: 99}
 , {name: 'Ionel', value: 39}
 , {name: 'Mugur', value: 99}
 , {name: 'Stefan', value: 99}
 , {name: 'Szabi', value: 99}
 , {name: 'George', value: 99}
 , {name: 'Ovidiu', value: 99}
 , {name: 'Gabriel', value: 99}
 , {name: 'Alexandru', value: 99}
 , {name: 'Ionel', value: 99}
 , {name: 'Lice', value: 10}];
 let arrayOld = [{name: 'Boss', value: 30}
 , {name: 'Lice', value: 20}
 , {name: 'Zori', value: 89}
 , {name: 'Mircea', value: 89}
 , {name: 'Andrei', value: 89}
 , {name: 'Ionel', value: 89}
 , {name: 'Mugur', value: 99}
 , {name: 'Stefan', value: 99}
 , {name: 'Szabi', value: 99}
 , {name: 'George', value: 99}
 , {name: 'Ovidiu', value: 99}
 , {name: 'Gabriel', value: 99}
 , {name: 'Alexandru', value: 99}
 , {name: 'Luca', value: 79}];

 //trebuie scos intr-un array name-urile pentru diferenta mai mare sau egala cu 10


 let myStatsNew = getStatistics(arrayNew);
 let myStatsOld = getStatistics(arrayOld);

 if (myStatsOld.size !== myStatsNew.size) {
 console.log(`there is a difference in length between old stats and new stats maps`);
 }

 console.log(`old statistics sum is: ${myStatsOld.sumValue}`);
 console.log(`New statistics sum is: ${myStatsNew.sumValue}`);

 //old stats Map
 console.log(`%cOld stats`, 'background-color: orange; color:white; padding: 0 5px;');
 console.log(myStatsOld.myMap);
 console.log(`%cNew stats`, 'background-color: green; color:white; padding: 0 5px;');
 console.log(myStatsNew.myMap);

 //find difference between the two

 let mapOld = myStatsOld.myMap;
 let mapNew = myStatsNew.myMap;


 let greaterThan10Names = retrieveNamesDiff(mapNew, mapOld, 10);



 switch (greaterThan10Names.length) {
 case 0:
 console.log(`No stats`);
 break;
 default:
 console.log(greaterThan10Names);
 break;
 }
 }*/
/*//TODO : CU COMMENTS
 /!**
 * Generates from the parameter received an object having two elements:
 * sumValue - represent the sum of all values from the array. (for values - undefined or NaN are considered 0)
 * myMap - represent a map object having {currentValue.name : currentValue.value} form. (for values - undefined or NaN are considered 0)
 * @param arrayOfObjects {Object}
 *!/
 const getStatistics = (arrayOfObjects) => {
 return arrayOfObjects.reduce((accumulator, currentValue, currentIndex) => {
 //check if object is null or not
 if (Object.keys(currentValue).length > 0) {

 // TODO: below is also possible for avoiding NaN or undefined, but in case of malformed values (e.g. '50 60') will get invalid numeric values (e.g. parseInt('50 60') == 50)
 // let tempValue = parseInt(currentValue.value || 0);  // || 0 was added as a treatment for undefined and NaN values;

 let tempName = currentValue.name;
 let tempValue = 0;
 // use 0 if value is NaN, undefined or other malformed numbers (e.g. value= '50 60')
 if (!isNaN(currentValue.value) && (typeof currentValue.value !== 'undefined')) {
 tempValue = parseInt(currentValue.value);
 }
 else {
 console.log(`%cWARNING (using 0 as value) encountered NaN, undefined or malformed value: ${tempName} -> isNaN(${currentValue.value}): ${isNaN(currentValue.value)} OR (typeof ${currentValue.value} == 'undefined) : ${typeof currentValue.value !== 'undefined'}`, 'background-color: yellow; color: red; padding: 0 5px;');
 }

 //TODO : if currentValue.name is (undefined or '') SKIP the name
 if ((tempName !== '') && (typeof tempName !== 'undefined')) {
 //sum values
 if ((tempValue >= 0) && (tempValue <= 100)) {accumulator.sumValue += tempValue};
 //checking if tempName is already present in the Map. If so, it means that it is duplicated in the parameter object. If there is the possibility to have duplicates in the initial object the handling should be done here ?
 if (accumulator.myMap.has(tempName)) console.log(`%c${currentIndex}: ${tempName} is duplicated in the object parameter!!!!`, 'background-color: red; color: white; padding: 0 5px;');
 //add to the Map object from within the accumulator: name_value: value_value. For duplicated values last processed value by forEach will be kept
 accumulator.myMap.set(tempName, tempValue);
 }
 }
 return accumulator;
 }, {sumValue: 0, myMap: new Map()});
 };

 /!**
 * Compares two maps using mapNew (the first parameter map) as reference and returns an array with all elementValues that exist in both Maps and have (mapOld.New.value - mapNew.value >= filterValueDifference)
 * @param mapOld {Map}
 * @param mapNew {Map}
 * @param filterValueDifference
 * @returns {Array}
 *!/
 const retrieveNamesDifferences = (mapNew, mapOld, filterValueDifference) => {
 let tempArray = [], oldValue;
 mapNew.forEach((currentValue, currentKey) => {
 if (mapOld.has(currentKey)) {
 // console.log(`${currentKey} : ${currentValue} - ${mapOld.get(currentKey)} >= ${filterValueDifference} : ${currentValue - mapOld.get(currentKey) >= filterValueDifference}`);

 //convert to numbers in case of strings (e.g. '5')
 currentValue = parseInt(currentValue);
 oldValue = parseInt(mapOld.get(currentKey));

 if ((typeof currentValue === 'number') && (typeof oldValue === 'number') && !(isNaN(currentValue) && !(isNaN(oldValue)))) {
 if ((currentValue - oldValue >= filterValueDifference) &&
 (currentValue >= 0) && (oldValue >= 0) &&
 (currentValue <= 100) && (oldValue <= 100) ) {
 tempArray.push(currentKey);
 }
 } else {
 console.log(`%cOne of the values is a Non numerical value : ${currentKey} : New Stats [ ${currentValue} is ${typeof currentValue}] ; Old stats [ ${mapOld.get(currentKey)} is typeof ${typeof currentValue}] `);
 }
 } else {
 console.log(`%c MISSING DATA: ${currentKey} is not present on the old statistics!`, 'background-color: yellow; color: red; padding: 0 5px;');
 }
 });
 return tempArray;
 };


 /!**
 * Cases tested: (between Case1 and Case 10 only only Case1 and Case2 need to be present in the final array)
 * 1. Name Case1: Difference between values =10 and both values are positive. Name is included in the final array.
 * 2. Name Case2: Difference between values >10 and both values are positive. Name is included in the final array.
 * 3. Name Case3: Difference between values =10 and both values are negative. Name is NOT included in the final array.
 * 4. Name Case4: Difference between values =10 and one of the values is negative. Name is NOT included in the final array.
 * 5. Name Case5: Difference between values >10 and both values are negative. Name is NOT included in the final array.
 * 6. Name Case6: Difference between values >10 and one of the values is negative. Name is NOT included in the final array.
 * 7. Name Case7: Difference between values =10 and both values are greater than 100. Name is NOT included in the final array.
 * 8. Name Case8: Difference between values >10 and both values are greater than 100. Name is NOT included in the final array.
 * 9. Name Case9: Difference between values =10 and one of the values is greater than 100. Name is NOT included in the final array.
 * 10. Name Case10: Difference between values =10 and both values are greater than 100. Name is NOT included in the final array.
 *
 * Negative scenarios tested:
 * 1. Invalid input for value '50 60' . Value used further in this case is 0.
 * 2. Value comes as a string (e.g. '  99 '). Value will be converted to a number (e.g 99)
 * 3. Value is NaN. Value used further in this case is 0.
 * 4. Name doesn't have a value set up ''. It is skipped.
 * 5. Name with value exists in the arrayNew but doesn't exist in the arrayOld. It is skipped and a message will be logged on the console.
 *
 * Notes:
 * 1. Names with negative values are included in the Maps resulting from getStatistics() (not in the sum) function but are skipped from statistics generated by retrieveNamesDifferences() function
 * 1. Names with values > 100 are included in the Maps resulting from getStatistics() (not in the sum) function but are skipped from statistics generated by retrieveNamesDifferences() function
 *!/

 MylabelProcessingArea: {
 let arrayNew = [{name: 'Case1', value: 10}
 , {name: 'Case2', value: 50}
 , {name: 'Case3', value: -10}
 , {name: 'Case4', value: 5}
 , {name: 'Case5', value: -30}
 , {name: 'Case6', value: 30}
 , {name: 'Case7', value: 130}
 , {name: 'Case8', value: 140}
 , {name: 'Case9', value: 105}
 , {name: 'Case10', value: 115}
 , {name: 'WillBeZero', value: '50 60'} //invalid input '50 60' => will be used as 0
 , {name: 'Zori', value: '  99 '} // will be used as 99
 , {name: 'Luca', value: NaN} // NaN => will be used as 0
 , {name: '', value: 99} // will be skipped
 , {name: 'Andrei', value: 99}
 , {name: 'Ionel', value: 39}
 , {name: 'Mugur', value: 10}
 , {name: 'Lice', value: 10}
 , {name: 'Ionel', value: 99}
 , {name: 'Lice', value: 10}
 , {name: 'Stefan', value: 99}
 , {name: 'Szabi', value: 99}
 , {name: 'George', value: 99}
 , {name: 'Ovidiu', value: 99}
 , {name: 'Gabriel', value: 99}
 , {name: 'Alexandru', value: 99}
 ];
 let arrayOld = [ {name: 'Case1', value: 0}
 , {name: 'Case2', value: 10}
 , {name: 'Case3', value: -20}
 , {name: 'Case4', value: -5}
 , {name: 'Case5', value: -50}
 , {name: 'Case6', value: -5}
 , {name: 'Case7', value: 120}
 , {name: 'Case8', value: 110}
 , {name: 'Case9', value: 95}
 , {name: 'Case10', value: 55}
 , {name: 'Boss', value: '1'} //will be used as numeric value
 , {name: 'Lice', value: -1}
 , {name: 'Zori', value: '-50'} //will be used as -50
 , {name: '', value: 1}
 , {name: 'Andrei', value: undefined} //NaN/undefined => will be used as 0
 , {name: 'Ionel', value: 1}
 , {name: 'Mugur'}  //undefined => will be used as 0
 , {name: 'Luca', value: 1}
 , {name: 'Stefan', value: 1}
 , {name: 'Szabi', value: 1}
 , {name: 'George', value: 1}
 , {name: 'Ovidiu', value: 1}
 , {name: 'Gabriel', value: 1}
 , {name: 'Alexandru', value: 1}
 ];

 //trebuie scos intr-un array name-urile pentru diferenta mai mare sau egala cu 10


 let myStatsNew = getStatistics(arrayNew);
 let myStatsOld = getStatistics(arrayOld);

 // if (myStatsOld.size !== myStatsNew.size) {
 //     console.log(`there is a difference in length between old stats and new stats maps!`);
 // }
 //
 // console.log(`Old statistics sum is: ${myStatsOld.sumValue}`);
 // console.log(`New statistics sum is: ${myStatsNew.sumValue}`);
 //
 // //old stats Map
 console.log(`%cOld statistics`, 'background-color: orange; color:white; padding: 0 5px;');
 console.log(myStatsOld.myMap);
 console.log(`%cNew stats`, 'background-color: green; color:white; padding: 0 5px;');
 console.log(myStatsNew.myMap);

 let greaterThan10Names = retrieveNamesDifferences(myStatsNew.myMap, myStatsOld.myMap, 10);


 switch (greaterThan10Names.length) {
 case 0:
 console.log(`No stats`);
 break;
 default:
 console.log(`Array with the new - old value differences > 10`);
 console.log(greaterThan10Names);
 break;
 }
 }*/

/*


 /!**
 * Generates from the parameter received an object having two elements:
 * sumValue - represent the sum of all values from the array. (for values - undefined or NaN are considered 0)
 * myMap - represent a map object having {currentValue.name : currentValue.value} form. (for values - undefined or NaN are considered 0)
 * @param arrayOfObjects {Object}
 *!/
 const getStatistics = (arrayOfObjects) => {
 return arrayOfObjects.reduce((accumulator, currentValue, currentIndex) => {
 if (Object.keys(currentValue).length > 0) {
 let tempName = currentValue.name;
 let tempValue = 0;
 if (!isNaN(currentValue.value) && (typeof currentValue.value !== 'undefined')) {
 tempValue = parseInt(currentValue.value);
 }
 if ((tempName !== '') && (typeof tempName !== 'undefined')) {
 if ((tempValue >= 0) && (tempValue <= 100)) { accumulator.sumValue += tempValue }
 if (accumulator.myMap.has(tempName)) {
 console.log(`%c${currentIndex}: ${tempName} is duplicated in the object parameter!!!!`, 'background-color: red; color: white; padding: 0 5px;');
 }
 accumulator.myMap.set(tempName, tempValue);
 }
 }
 return accumulator;
 }, {sumValue: 0, myMap: new Map()});
 };

 /!**
 * Compares two maps using mapNew (the first parameter map) as reference and returns an array with all elementValues that exist in both Maps and have (mapOld.New.value - mapNew.value >= filterValueDifference)
 * @param mapOld {Map}
 * @param mapNew {Map}
 * @param filterValueDifference
 * @returns {Array}
 *!/
 const retrieveNamesDifferences = (mapNew, mapOld, filterValueDifference) => {
 let tempArray = [], oldValue;
 mapNew.forEach((currentValue, currentKey) => {
 if (mapOld.has(currentKey)) {
 currentValue = parseInt(currentValue);
 oldValue = parseInt(mapOld.get(currentKey));
 if ((typeof currentValue === 'number') && (typeof oldValue === 'number') && !(isNaN(currentValue) && !(isNaN(oldValue)))) {
 if ((currentValue - oldValue >= filterValueDifference) &&
 (currentValue >= 0) && (oldValue >= 0) &&
 (currentValue <= 100) && (oldValue <= 100) ) {
 tempArray.push(currentKey);
 }
 }
 }
 });
 return tempArray;
 };


 /!**
 * Cases tested: (between Case1 and Case 10 only only Case1 and Case2 need to be present in the final array)
 * 1. Name Case1: Difference between values =10 and both values are positive. Name is included in the final array.
 * 2. Name Case2: Difference between values >10 and both values are positive. Name is included in the final array.
 * 3. Name Case3: Difference between values =10 and both values are negative. Name is NOT included in the final array.
 * 4. Name Case4: Difference between values =10 and one of the values is negative. Name is NOT included in the final array.
 * 5. Name Case5: Difference between values >10 and both values are negative. Name is NOT included in the final array.
 * 6. Name Case6: Difference between values >10 and one of the values is negative. Name is NOT included in the final array.
 * 7. Name Case7: Difference between values =10 and both values are greater than 100. Name is NOT included in the final array.
 * 8. Name Case8: Difference between values >10 and both values are greater than 100. Name is NOT included in the final array.
 * 9. Name Case9: Difference between values =10 and one of the values is greater than 100. Name is NOT included in the final array.
 * 10. Name Case10: Difference between values =10 and both values are greater than 100. Name is NOT included in the final array.
 *
 * Negative scenarios tested:
 * 1. Invalid input for value '50 60' . Value used further in this case is 0.
 * 2. Value comes as a string (e.g. '  99 '). Value will be converted to a number (e.g 99)
 * 3. Value is NaN. Value used further in this case is 0.
 * 4. Name doesn't have a value set up ''. It is skipped.
 * 5. Name with value exists in the arrayNew but doesn't exist in the arrayOld. It is skipped and a message will be logged on the console.
 *
 * Notes:
 * 1. Names with negative values are included in the Maps resulting from getStatistics() function (not in the sum) but are skipped from statistics generated by retrieveNamesDifferences() function
 * 1. Names with values > 100 are included in the Maps resulting from getStatistics() function (not in the sum) but are skipped from statistics generated by retrieveNamesDifferences() function
 *!/

 MylabelProcessingArea: {
 let arrayNew = [{name: 'Case1', value: 10}
 , {name: 'Case2', value: 50}
 , {name: 'Case3', value: -10}
 , {name: 'Case4', value: 5}
 , {name: 'Case5', value: -30}
 , {name: 'Case6', value: 30}
 , {name: 'Case7', value: 130}
 , {name: 'Case8', value: 140}
 , {name: 'Case9', value: 105}
 , {name: 'Case10', value: 115}
 , {name: 'WillBeZero', value: '50 60'} //invalid input '50 60' => will be used as 0
 , {name: 'Zori', value: '  99 '} // will be used as 99
 , {name: 'Luca', value: NaN} // NaN => will be used as 0
 , {name: '', value: 99} // will be skipped
 , {name: 'Andrei', value: 99}
 , {name: 'Ionel', value: 39}
 , {name: 'Mugur', value: 10}
 , {name: 'Lice', value: 10}
 , {name: 'Ionel', value: 99}
 , {name: 'Lice', value: 10}
 , {name: 'Stefan', value: 99}
 , {name: 'Szabi', value: 99}
 , {name: 'George', value: 99}
 , {name: 'Ovidiu', value: 99}
 , {name: 'Gabriel', value: 99}
 , {name: 'Alexandru', value: 99}
 ];
 let arrayOld = [ {name: 'Case1', value: 0}
 , {name: 'Case2', value: 10}
 , {name: 'Case3', value: -20}
 , {name: 'Case4', value: -5}
 , {name: 'Case5', value: -50}
 , {name: 'Case6', value: -5}
 , {name: 'Case7', value: 120}
 , {name: 'Case8', value: 110}
 , {name: 'Case9', value: 95}
 , {name: 'Case10', value: 55}
 , {name: 'Boss', value: '1'} //will be used as numeric value
 , {name: 'Lice', value: -1}
 , {name: 'Zori', value: '-50'} //will be used as -50
 , {name: '', value: 1}
 , {name: 'Andrei', value: undefined} //NaN/undefined => will be used as 0
 , {name: 'Ionel', value: 1}
 , {name: 'Mugur'}  //undefined => will be used as 0
 , {name: 'Luca', value: 1}
 , {name: 'Stefan', value: 1}
 , {name: 'Szabi', value: 1}
 , {name: 'George', value: 1}
 , {name: 'Ovidiu', value: 1}
 , {name: 'Gabriel', value: 1}
 , {name: 'Alexandru', value: 1}
 ];



 let myStatsNew = getStatistics(arrayNew);
 let myStatsOld = getStatistics(arrayOld);

 console.log(`%cOld statistics`, 'background-color: orange; color:white; padding: 0 5px;');
 console.log(myStatsOld.myMap);
 console.log(`%cNew stats`, 'background-color: green; color:white; padding: 0 5px;');
 console.log(myStatsNew.myMap);

 let greaterThan10Names = retrieveNamesDifferences(myStatsNew.myMap, myStatsOld.myMap, 10);

 // let


 switch (greaterThan10Names.length) {
 case 0:
 console.log(`No stats`);
 break;
 default:
 console.log(`Array with the new - old value differences > 10`);
 console.log(greaterThan10Names);
 break;
 }
 }


 {
 let a = [1,2,3,4,5];
 let b = [4,5,6,4,3,5];

 let concat = [1,2,3,4,5,4,5,6,4,3,5]

 let uniqueElements = a.concat(b).filter((v,i, arr) => arr.indexOf(v) === arr.lastIndexOf(v));
 console.log(uniqueElements);
 }
 */


// TODO: COMMENT STARTS HERE
/*

 /!**
 * Receives 2 array of objects and modifies the first one with the name matching from the second one
 * @param incomingObject [{Array of objects}]
 * @param nameMappings [{Array of objects}]
 *!/
 const processIncomingObject = (incomingObject, nameMappings) => {
 return incomingObject.map((currentValue) => {
 let tempObject = cloneObject(currentValue);
 for (let {name : projName, nicknames} of nameMappings) {
 if (nicknames.indexOf(currentValue.name) >= 0) {
 tempObject.name = projName;
 }
 }
 return tempObject;
 });
 };

 // ES6 Clone object
 const cloneObject = (obj) => {
 //ownProperties = Object.getOwnPropertyNames(obj); /// and use instead of hasOwnProperty : ownProperties.indexOf(i). According to jsperf indexOf is much slower than hasOwnProperty

 //if normal data or empty object return it as is
 if (obj === null || typeof obj !== 'object') return obj;

 //if Date

 //

 //if Array

 //if Set
 if (obj instanceof Set) {
 let tempSet = new Set();
 for (let val of obj) {
 tempSet.add(val);
 }
 return tempSet;
 }

 //if Map
 if (obj instanceof Map) {
 let tempMap = new Map();
 for (let [key, val] of obj) {
 tempMap.set(key, val);
 }
 return tempMap;
 }

 //if Object
 if (obj instanceof Object) {
 let tempObj = {};
 for (let i in obj) {
 if (obj.hasOwnProperty(i)) {
 tempObj[i] = cloneObject(obj[i]);
 }
 }
 return tempObj;
 }

 //if nothing from above matches throw error
 throw new Error('Unsupported data structure type');
 };

 const createProjectNamesObject = (numberOfSubObjects) => {
 let tempArrayOfObj = [], tempName;
 for (let i = 0; i < numberOfSubObjects; i++) {
 tempName = getRandomText(Math.floor(Math.random() * 20) + 10);

 let tempNicknames = [];
 let noOfSubNames = Math.floor(Math.random() * 20) + 1;
 for (let j = 0; j < noOfSubNames; j++) {
 tempNicknames.push(getRandomText(Math.floor(Math.random() * 2) + 3));
 }
 tempArrayOfObj.push({'name': tempName, 'nicknames': tempNicknames});
 }
 return tempArrayOfObj;
 };

 const createInputObject = (namesObject, numberOfObjects) => {
 let returnObject = [], tempName1 = '', tempDuration, tempNoOfDevs;
 for (let i = 0; i < numberOfObjects; i++) {
 let idxFromArray = getRandomNumber(0, namesObject.length - 1);
 let idxFromSubArray = getRandomNumber(0, namesObject[idxFromArray].nicknames.length - 1);
 tempName1 = namesObject[idxFromArray].nicknames[idxFromSubArray];
 tempDuration = Math.floor(Math.random() * 10) + 'y';
 tempNoOfDevs = Math.floor(Math.random() * 50);
 returnObject.push({'name': tempName1, 'duration': tempDuration, 'noOfDevs': tempNoOfDevs});
 }
 return returnObject;
 };

 const getRandomText = (n) => {
 let randomText = '';
 let allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_1234567890-';
 for (let i = 0; i < n; i++) {
 randomText += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
 }
 return randomText;
 };

 const getRandomNumber = (min, max) => {
 return (Math.floor(Math.random() * (max - min + 1)) + min);
 };

 {
 let existingProjectMappings = [{
 name: 'Perfect Project Perfect Company PN',
 nicknames: ['PP', 'PProj', 'PP1', 'PPPC', 'Perf Comp', 'PC1']
 },
 {
 name: 'Chrome PN',
 nicknames: ['SOT', 'SOTools', 'SO', 'Nemo']
 },
 {
 name: 'The Project PN',
 nicknames: ['EL', 'EP', 'EP0', 'EPFirst']
 }];
 let incomingObj = [{
 name: 'EL',
 duration: '5y',
 noOfDevs: 10
 },
 {
 name: 'PProj',
 duration: '6y',
 noOfDevs: 20
 },
 {
 name: 'Nemo',
 duration: '9y',
 noOfDevs: 40
 }];


 // let existingProjectMappings = createProjectNamesObject(100);
 console.log(`%cExisting Project Mappings`, 'background-color: yellow; color: red; padding; 0 5px;');
 console.log(existingProjectMappings);
 console.log(`=======================================================`);

 console.log(`%cIncoming Object`, 'background-color: green; color: white; padding; 0 5px;');
 console.log(incomingObj);


 // let incomingObj = createInputObject(existingProjectMappings, 50);
 // console.log(incomingObj);

 let myNewObject = processIncomingObject(incomingObj, existingProjectMappings);

 console.log(`%cBefore processing`, 'background-color:red; color: white; padding: 0 5px;');
 console.log(incomingObj);

 console.log(`%cAfter processing`, 'background-color:green; color: white; padding: 0 5px;');
 console.log(myNewObject);

 }

 const processObj = ({name, ProjectName, projName}) => {

 console.log(`name||ProjectName||projName: ${name || ProjectName || projName}`);
 console.log(`name: ${name}`);
 console.log(`ProjectName: ${ProjectName}`);
 console.log(`projName: ${projName}`);
 };

 {
 // let Obj = {
 //     name: 'Visio',
 //     ProjectName: 'The Name',
 //     projName: ''
 // };
 //
 // console.log(`typeof Obj ${typeof Obj}`);
 //
 // let Obj1 = {
 //     name: 'Microsoft',
 //     ProjectName: 'The Name'
 // };
 //
 // let Obj2 = {
 //     ProjectName: 'The Name'
 // };
 // console.log(`Obj ==============================`);
 // processObj(Obj);
 //
 // console.log(`Obj1 ==============================`);
 // processObj(Obj1);
 //
 // console.log(`Obj2 ==============================`);
 // processObj(Obj2);

 let theObject = {
 name: 'ElNino',
 myMap: '',
 mySet: '',
 date: '',
 regExp: '',
 characteristics: {
 engine: '16v',
 capacity: '5000mc',
 fuel: 'gasoline'
 },
 looks: {
 inside: {
 leather: 'yes',
 heat: 'climatronic',
 color: 'gray',
 displays: 'led'
 },
 outside: {
 front: {
 lights: {
 xenon: 'yes',
 whiteLight: true,
 },
 hood: {
 carbon: true,
 color: 'red'
 }
 },
 back: {
 lights: {
 xenon: 'yes',
 whiteLight: true,
 },
 trunk: {
 carbon: false,
 color: 'black'
 }
 }
 }
 }
 };

 let copiedObject = cloneObject(theObject);
 theObject.name = 'SHUSHU';

 console.log(`%ctheObject`, 'background-color: red; color: yellow; padding: 0 5px;');
 console.log(theObject);

 console.log(`%ccopiedObject`, 'background-color: red; color: yellow; padding: 0 5px;');
 console.log(copiedObject);


 let myMap = new Map();
 myMap.set('myKey', 'myval');
 myMap.set('myKey1', 'myval1');

 let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3];
 let mySet = new Set(myArr);

 console.log(mySet);

 console.log(myMap);

 theObject.myMap = myMap;
 theObject.mySet = mySet;
 console.log(theObject);

 let myClone = cloneObject(theObject);
 myClone.myMap.set('myKey1', 'SECONDVALUE');
 console.log(myClone);

 console.log(`HERE ==========================`);
 let myObject = Object.assign({}, theObject);
 console.log(myObject);

 }


 {
 let buffer = new ArrayBuffer(100);
 let view = new Int32Array(buffer);

 console.log(buffer);
 console.log(view);
 }

 conditionalOperatorAkaTernary: {
 // (condition) ? ifTrue: ifFalse;
 }


 {
 let boolObj = new Boolean(false);
 let boolVal = false;

 if (boolObj) {
 console.log(`BoolObj `);
 }

 console.log(boolObj);

 if (boolVal) {
 console.log(`boolval`);
 }

 let string = 'true';
 let boolean = Boolean(string);

 console.log(boolean);
 console.log(`boolObj.valueOf(): ${boolObj.valueOf()}`);

 console.log((boolVal instanceof Object) ? 'is instance of Object' : 'no it is not instance of object');
 console.log((boolObj instanceof Object) ? 'is instance of Object' : 'no it is not instance of object');
 }

 import * as angular from '@angular/core';

 {
 let theObject = {
 name: 'ElNino',
 myMap: '',
 mySet: '',
 date: '',
 regExp: '',
 characteristics: {
 engine: '16v',
 capacity: '5000mc',
 fuel: 'gasoline'
 },
 looks: {
 inside: {
 leather: 'yes',
 heat: 'climatronic',
 color: 'gray',
 displays: 'led'
 },
 outside: {
 front: {
 lights: {
 xenon: 'yes',
 whiteLight: true,
 },
 hood: {
 carbon: true,
 color: 'red'
 }
 },
 back: {
 lights: {
 xenon: 'yes',
 whiteLight: true,
 },
 trunk: {
 carbon: false,
 color: 'black'
 }
 }
 }
 }
 };



 }


 */
// TODO: COMMENT ENDS HERE
/*

 // TODO: rest parameters
 const pia = (...argus) => {
 console.log(...argus);

 };

 const stickThem = (separator) => {
 let args = Array.prototype.slice.call(arguments,1);
 console.log(args);
 return args.join(separator);
 };

 const returnArguments = (a,b) => {
 return arguments;
 };


 import {processIncommingArguments as processIncommingArguments} from './customFunctions'

 {
 console.log(sampleObject);


 processIncommingArguments( 'biscuiti', 12, 'pulamea', true, false);
 console.log(`pia`);
 pia( 'biscuiti', 12, 'pulamea', true, false);


 let sticked = stickThem(',', 'shushuline', 'buburuza');
 console.log(sticked);


 console.log(returnArguments(1,2));


 }


 */
//
// const getArrayDate = (date) => {
//     let aD = [];
//     aD.push.apply(aD,[date.getFullYear(), date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]);
//
//     console.log([date.getFullYear(), date.getMonth()+1, date.getDate()+1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]);
//
// /*    let aD1 = [];
//     Array.prototype.push.apply(aD1,[...mD]);
//     console.log(`aD1`);
//     console.log(aD1);
//
//     let aD2 = [];
//     aD2.push.call(aD2, ...mD);
//     console.log(`aD2`);
//     console.log(aD2);
//
//     let aD3 = [];
//     Array.prototype.push.call(aD3, ...mD);
//
//     console.log(`aD3`);
//     console.log(aD3);
// */
//     return (date instanceof Date) ? aD  : date;
// };
//
// dates: {
//
//     let date1 = new Date();
//     console.log(date1);
//     console.log(date1.toString());
//
//     let date2 = date1.toJSON();
//     console.log(`date2: ${date2}`);
//     console.log(`date2.toString(): ${date2.toString()}`);
//
//     let date3 = date2.toString();
//     let utcDate = new Date(date3);
//
//     console.log(utcDate);
//
//     utcDate = utcDate.toISOString();
//     console.log({date: utcDate});
//
//
//     let mD = new Date();
//     console.log(mD);
//     let aD = getArrayDate(mD);
//
//     let nD = new Date(...aD);
//     console.log(nD);
//
//     console.log(...aD);
//
//     let start = new Date();
//     let truth = (start instanceof Date) ? true : false;
//     let end = new Date();
//     console.log(end.getTime() - start.getTime() + 'ms');
//
//
//     let cd = new Date();
//
//
// }
// //
// // {
// //     var animals = [
// //         { species: 'Lion', name: 'King' },
// //         { species: 'Whale', name: 'Fail' }
// //     ];
// //
// //     for (var i = 0; i < animals.length; i++) {
// //         (function(i) {
// //             this.print = function() {
// //                 console.log('#' + i + ' ' + this.species
// //                     + ': ' + this.name);
// //             }
// //             this.print();
// //         }).call(animals[i], i);
// //     }
// // }
// const processIncomingObject = (incomingObject, nameMappings) => {
//     return incomingObject.map((currentValue) => {
//         let tempObject = cloneObject(currentValue);
//         for (let {name : projName, nicknames} of nameMappings) {
//             if (nicknames.indexOf(currentValue.name) >= 0) {
//                 tempObject.name = projName;
//             }
//         }
//         return tempObject;
//     });
// };
//
// const duration = (st) => {
//     let gDate = new Date();
//     let gMsecs = Date.now();
//     console.log(gDate);
//     console.log(gMsecs);
// };
//
//
// {
//     duration ();
//
//     let i = new Date();
//
//     let st = new Date();
//     console.log(st);
//     console.log(st.toDateString());
//
//     let aDate = new Date(1983,1,2);
//     console.log(aDate);
//
//     let newDate = Date.UTC(1983,1,2);
//     let newDateUTC = new Date(newDate);
//
//     console.log(`Date.UTC: ${newDate}`);
//     console.log(`new Date.UTC: ${newDateUTC}`);
//     console.log(`new Date(1983,1,2): ${aDate}`);
//
//
//     let anotherDate = new Date();
//     anotherDate.setUTCFullYear(1983); //year
//     anotherDate.setUTCDate(2); //day
//     anotherDate.setUTCMonth(2) //month
//     anotherDate.setUTCHours(0,0,0,0);
//
//     console.log(`anotherDate: ${anotherDate}`);
//
//     let justAnotherDate = new Date(Date.UTC(1983,2,2));
//     console.log(`justAnotherDate              : ${justAnotherDate}`);
//     console.log(`justAnotherDate.toString()   : ${justAnotherDate.toString()}`);
//     console.log(`justAnotherDate.toUTCString(): ${justAnotherDate.toUTCString()}`);
//     console.log(`justAnotherDate.toISOString(): ${justAnotherDate.toISOString()}`);
//     console.log(`========================`);
//     console.log(`aDate              : ${aDate}`);
//     console.log(`aDate.toString()   : ${aDate.toString()}`);
//     console.log(`aDate.toUTCString(): ${aDate.toUTCString()}`);
//     console.log(`aDate.toISOString(): ${aDate.toISOString()}`);
//
//
//     let newUTCDate = new Date(1983,2,2,2,0,0,0);
//     console.log(`newUTCDate: ${newUTCDate}`);
//     console.log(`newUTCDate.toString(): ${newUTCDate.toString()}`);
//     console.log(`newUTCDate.toUTCString(): ${newUTCDate.toUTCString()}`);
//     console.log(`newUTCDate.toISOString(): ${newUTCDate.toISOString()}`);
//     console.log('');
//
//     const dateString = (arr) => {
//         let tDate = new Date();
//         let tuRet = [...arr].concat([(-1)* tDate.getTimezoneOffset()/60, 0, 0]);
//         return tuRet;
//     };
//
//     let _1Date = new Date(...dateString([1983,1,2]));
//     console.log(`_1Date: ${_1Date}`);
//     console.log(`_1Date.toString(): ${_1Date.toString()}`);
//     console.log(`_1Date.toUTCString(): ${_1Date.toUTCString()}`);
//     console.log(`_1Date.toISOString(): ${_1Date.toISOString()}`);
//     console.log('');
//
//     let _3Date = new Date(...((arr) => [...arr].concat([((new Date()).getTimezoneOffset() <= 0) ? (-1*(new Date()).getTimezoneOffset()/60) : (24 - (new Date()).getTimezoneOffset()/60), 0, 0]))([1983,1,2]));
//
//     console.log(`_3Date: ${_3Date}`);
//     console.log(`_3Date.toString(): ${_3Date.toString()}`);
//     console.log(`_3Date.toUTCString(): ${_3Date.toUTCString()}`);
//     console.log(`_3Date.toISOString(): ${_3Date.toISOString()}`);
//
//     console.log('');
//
//     let _2Date = new Date();
//     console.log(`_2Date.getTimezoneOffset(): ${_2Date.getTimezoneOffset()}`);
//     let _2DateOff = [1983,2,2].concat([(-1)* _2Date.getTimezoneOffset()/60, 0, 0]);
//     let tuRet = [...[1983,2,2].concat([(-1)* _2Date.getTimezoneOffset()/60, 0, 0])];
//
//     console.log(_2DateOff);
//     console.log(tuRet);
//
//
//     let _4Date = new Date();
//
//     console.log(_4Date.toLocaleTimeString('en-US', { hour12: false }));
//     var options = { timeZone: 'UTC', timeZoneName: 'short' };
//
//     console.log(_4Date.toLocaleTimeString('en-US', { hour12: false }));
//     console.log(_4Date.toLocaleTimeString('en-US', options));
//
//
// };
//
//
// {
//     let myA = [1,4,9,16,25];
//     let myB = myA.map(Math.sqrt);
//     let myC = myA.map(Math.exp);
//     console.log(myB);
//     console.log(myC);
//     let myBA = new Float64Array(50);
//     console.log(myBA);
// }
//
//  {
//      var unboundSlice = Array.prototype.slice;
//      var slice = Function.prototype.apply.bind(unboundSlice);
//
//      let a = slice([1,2,3,4,5,6]);
//      console.log(a);
//  }
//
/*

 {

 var x = 15;

 function createVirtualValue1() {
 let x = 10;
 return new Function('return x');
 }

 function createVirtualValue2() {
 var x = 20;

 function f() {
 return x;
 }

 return f;
 }

 let f1 = createVirtualValue1();
 // console.log(f1());

 let f2 = createVirtualValue2();
 console.log(f2());
 }

 // function* noGen() {
 //     let i = 0;
 //     while (true) {
 //         yield i++;
 //     }
 // }

 import * as _arr from '../external-js/ArrayFunctions';

 /!*{
 console.time('count1');
 let myArr = [1,2,3,4,5,6,7,8,9,0];
 let res1 = _arr.stringifyMyArray(myArr);
 console.timeEnd('count1');

 console.log(`stringifyMyArray: ${res1}`);

 console.time('count2');
 let res2 = myArr.join(',');
 console.timeEnd('count2');

 console.log(`array.join: ${myArr.join(',')}`);
 }

 {
 let locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
 let options = { localeMatcher: 'lookup' };
 console.log(Intl.Collator.supportedLocalesOf(locales, options).join(', '));

 }

 *!/

 {
 let myArr1 = ['banana', 'portocala', 'bufnita'];

 let a = myArr1.filter((curVal, index) => curVal[0] === 'b');
 let b = myArr1.filter((curVal, index) => curVal.toString()[0] === 'b');
 let c = myArr1.filter((curVal, index) => curVal.charAt(0) === 'b');

 console.log(a);
 console.log(b);
 console.log(c);


 const aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

 let myArr2 = Array.from(aa, (a => a * a));
 console.log(myArr2);

 let aaa = 'buburuza';
 let myArr3 = Array.from(aaa, (a => a + String.fromCharCode(a.charCodeAt(0) + 1) ));
 console.log('bc ab st uv');
 console.log(myArr3);


 let nS = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
 let myArr4 = Array.from(nS);
 console.log(nS);
 console.log(myArr4);


 let nM = new Map([['width', 1], ['height', 10], ['depth', 15]]);
 let myArr7 = Array.from(nM, (([a, b]) => a));
 console.log(myArr7);
 //["width", "height", "depth"]


 let myArr5 = Array.from(nM);

 console.log(nM);
 console.log(myArr5);

 let nM1 = new Map([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
 let myArr6 = Array.from(nM1, (([a, b]) => a));


 console.log(nM1);
 console.log(myArr6);

 }

 //Array.isArray
 {
 console.log(`Array.isArray(null): ${Array.isArray(null)}`);
 console.log(`Array.isArray([]): ${Array.isArray([])}`);
 console.log(`Array.isArray(null): ${Array.isArray(null)}`);
 console.log(`Array.isArray('foo'): ${Array.isArray('foo')}`);
 console.log(`Array.isArray(undefined): ${Array.isArray(undefined)}`);
 console.log(`Array.isArray({a:'b'}): ${Array.isArray({a: 'b'})}`);

 }

 const myF = (...args) => {
 return Array.of.call(...args);
 };

 const myF1 = (ar) => {
 console.log(ar);
 return Array.from(ar);
 };

 const createArray = (n) => {
 let tempArray = [];
 for (let i = 1; i <= n; i++) {
 tempArray.push(Math.floor(Math.random() * 100));
 }
 return tempArray;
 };

 {
 let mya = [1, 2, 3, 4, 5, 6, 7];
 let myArray1 = createArray(1000);
 console.time('myF');
 let myNewA1 = myF(null, ...myArray1);
 console.timeEnd('myF');

 console.log(myArray1);
 console.log(myNewA1);

 console.log('%cmyF1', 'background-color:red; padding: 0 5px; color: white;');

 console.time('myF1');
 let myNewB1 = myF1(myArray1);
 console.timeEnd('myF1');

 console.log(myNewB1);


 // let myArray2 = createArray (1000);
 // console.time('myF');
 // let myNewA2 = myF(null,...myArray2);
 // console.timeEnd('myF');
 //
 // console.log(myArray2);
 // console.log(myNewA2);
 //
 // let myArray3 = createArray (10000);
 // console.time('myF');
 // let myNewA3 = myF(null,...myArray2);
 // console.timeEnd('myF');
 //
 // console.log(myArray3);
 // console.log(myNewA3);

 }


 const genArr = (n) => {
 let tA = [], rand;
 for (let i = 0; i < n; i++) {
 rand = Math.floor(Math.random() * 100);
 tA.push(rand);
 }
 return tA;
 };

 {
 let arr1 = ['a', 'b', 'c'];
 let arr2 = ['d', 'e', 'f'];

 let arrConcat = arr1.concat(arr2);

 console.log(arrConcat);

 arrConcat.push(15);

 console.time('ArrayFrom');
 let myErr = Array.from({length: 1000}, (v, i) => i);
 console.timeEnd('ArrayFrom');

 // console.log(myErr);

 // let myErr1 = Array.from({length:1000}, (v,i) => [i, null]);
 // console.log(myErr1);
 //
 // let myMap = new Map(Array.from({length:1000}, (v,i) => [`A${i}`,v]));
 // console.log(myMap);


 console.time('myGen');
 let myA = genArr(1000);
 console.timeEnd('myGen');

 console.log(myA);
 }

 //CopyWithin

 {
 let myA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 myA.copyWithin(2, 0, 2);

 console.log(myA);
 }

 //Array.entries();

 {
 let myA = [1, 2, 3, 4, 5, 6, 7];
 let it = myA.entries();

 // for (let [,val] of it) {
 //     console.log(val);
 // }
 console.log('next iterator on entries()');

 let ind, val;

 [ind, val] = it.next().value;
 console.log(val);

 }

 //Array.every()

 const validate = (v, i, theArray) => (v > 10);

 {
 let myArr = [9, 10, 11, 12, 13, 154];
 console.log(`myArr.every(validate): ${myArr.every(validate)}`);

 let myArr1 = [11, 12, 113, 144, 15];
 console.log(`myArr1.every(validate): ${myArr1.every(validate)}`);
 }


 //Array.fill()
 {
 let a = [].fill.call({length: 3}, 4);
 console.log(a);

 console.log(Array(10).fill(1));

 }

 //Array.filter

 const customFilter = v => v.length > 3;

 {
 let Arr = ['apa', 'mere', 'papanas', 'buburuza', 'cacareaza', 'nasture', 'butoi', 'coi'];
 let filteredArray = Arr.filter(customFilter);

 console.log(Arr);
 console.log(filteredArray);
 }

 //Array.find();

 const customFilterFind = v => v > 100;

 {
 let myArr = [1, 230, 233, 254, 3434, 12];
 let found = myArr.find(customFilterFind);

 console.log(found);
 }

 //Array.findIndex();
 //Array.forEach();

 const logMe = (v, i, arr) => {
 console.log(`at index ${i} value ${v} is found`);
 }

 {
 let myArr = [1, 90, 100, 200, 300, 400];
 let found = myArr.findIndex(customFilterFind);

 console.log(found);
 let sum = 0
 myArr.forEach((v, i) => {
 console.log(`at index ${i} value ${v} is present`);
 sum += v;
 });

 console.log(sum);

 console.log(`using separate function`);
 myArr.forEach(logMe);

 //Array.includes

 let myRandomArray = Array.from({length:1000}, i => Math.floor(Math.random()*100));

 console.log(myRandomArray);

 console.log(myRandomArray.includes(99));
 let index = myRandomArray.findIndex(v => v===99);
 console.log(`index at which value 99 was encountered is ${index}`);

 let test = {length:9};
 console.log(test);
 }

 {
 let a = [1,2,3,4,5,6,7,8,9,0];
 console.log(a.indexOf(9));

 let mA = Array.from({length:1000}, v => Math.round(Math.random()*100));

 console.log(mA);

 if (mA.indexOf(100) === -1) {
 console.log('elementul 100 nu exista in array');
 mA.push(101);
 } else {
 console.log(`index of 100: ${mA.indexOf(100)}`);
 }
 console.log(mA);
 }

 {
 let arr1 = [1, 2, 3, 4, 5, 6];
 let arr2 = [2, 4, 6, 8, 10, 12, 14];

 let arr = Array.from(new Set(arr1.concat(arr2)));
 console.log(`Arr with unique elements - START`);
 console.log(arr);
 console.log(`Arr with unique elements - END`);

 let arr3 = Array.from({length: 20}, v => Math.round(Math.random() * 100));
 arr3 = Array.from(new Set(arr3));

 let arrConcat = arr3.concat(arr);

 console.log(arrConcat);

 for (let i = 0; i < arr3.length; i++) {
 let firstIndex = arrConcat.indexOf(arrConcat[i]);
 let lastIndex = arrConcat.lastIndexOf(arrConcat[i]);
 if (firstIndex !== lastIndex) {
 console.log(`Element ${arrConcat[i]} is present in both arrays`);
 }
 }


 //Array.join
 let joinedString = arrConcat.join();
 console.log(joinedString);
 console.log(arrConcat.join(' + '));
 console.log(arrConcat.join(''));
 console.log(arrConcat.join(', '));

 //Array.keys()

 let a = ['a', , 'c'];

 console.log([...a.keys()]);
 console.log([...Object.keys(a)]);


 }
 */
/*

 {
 //Array.map()

 let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 console.log(myArr);

 let myArr1 = myArr.map((v, i, curArr) => {
 return v * i;
 });

 console.log(myArr1);

 let myArr2 = myArr.map(Math.sqrt);
 console.log(myArr2);

 //Array.reduce

 let myDiffs = myArr2.reduce((coll, currentValue) => {
 coll.push(currentValue);
 return coll;
 }, []);


 let myDiffs1 = myArr2.reduce((coll, currentValue) => {
 let theVal = ( coll.length > 0 ) ? currentValue - myArr2[coll.length - 1] : currentValue;
 coll.push(theVal);
 return coll;
 }, []);

 myDiffs1.shift();

 console.log(`myDiffs: ===============`);
 console.log(myDiffs);
 console.log(`myDiffs1: ===============`);
 console.log(myDiffs1);


 let myRandArray = Array.from({length: 200}, (currentValue, i) => Math.sqrt(i));
 let myDiffs2 = myRandArray.reduce((coll, currentValue, currentIndex, tehArray) => {
 let theVal = ( currentIndex > 0 ) ? currentValue - tehArray[currentIndex - 1] : currentValue;
 coll.push(theVal);
 return coll;
 }, []);

 myDiffs2.shift();
 myDiffs2.shift();

 console.log(`myDiffs2: ===============`);
 console.log(myDiffs2);


 let myAdjustedDiffs = myDiffs2.reduce((acc, v, i) => {
 acc.push(Math.floor(v * 100));
 return acc;
 }, []);

 console.log(myAdjustedDiffs);
 }

 {
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 arr.push(10);
 console.log(arr);
 arr.pop();
 console.log(arr);
 arr.shift();
 console.log(arr);
 arr.unshift(10);
 console.log(arr);

 let sumOfAll = arr.reduce((sum, v) => sum += v);
 console.log(`sumOfAll: ${sumOfAll}`);


 let sumOfAllRight = arr.reduceRight((sum, v) => sum += v);

 console.log(`sumOfAllRight: ${sumOfAllRight}`);

 console.log(arr.reverse());


 console.log(arr.slice(0, 3));
 }

 {
 let bmw = {color: 'red', wheels: 4, engine: {cilinders: 4, size: 2.2}};
 let myBmw = [bmw, 2, 'cherry condition', 'purchased 2005'];

 let myco = myBmw.slice(0, 2);

 console.log(`my bmw: ${JSON.stringify(myBmw)}`);
 console.log(`copy bmw: ${JSON.stringify(myco)}`);
 console.log(`my bmw color: ${myBmw[0].color}`);
 console.log(`copy bmw color: ${myco[0].color}`);

 myBmw[0].color = 'orange';

 console.log(`my bmw color: ${myBmw[0].color}`);
 console.log(`copy bmw color: ${myco[0].color}`);
 }

 {
 let arr = [10, 11, 12, 13, 11];

 let cond = arr.some(v => v > 13) ? 'array has values greater than 13' : 'array doesn\'t have values greater than 13';
 console.log(cond);
 }

 {
 //Array.sort

 let myRandArray = Array.from({length: 100}, v => Math.floor(Math.random() * 100));
 console.log(myRandArray);
 myRandArray.sort();
 }

 {
 // the array to be sorted
 let list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

 // temporary array holds objects with position and sort-value
 let mapped = list.map(function (el, i) {
 return {index: i, value: el.toLowerCase()};
 });

 // sorting the mapped array containing the reduced values
 mapped.sort(function (a, b) {
 return +(a.value > b.value) || +(a.value === b.value) - 1;
 });

 // container for the resulting order
 let result = mapped.map(function (el) {
 return list[el.index];
 });

 console.log(result);
 }

 //Array.splice

 {
 let myCars = ['BMW', 'Ferrari', 'Audi', 'Citroen', 'GM'];

 console.log('Before');
 console.log(myCars);
 myCars.splice(1, 0, 'Dacia');
 console.log('After');
 console.log(myCars);

 console.log('remove elements with indexes 2,3');
 myCars.splice(2, 2);
 console.log(myCars);
 //["BMW", "Dacia", "Citroen", "GM"]

 let myNewCars = ['Dacia', 'Lada', 'Trabant'];

 myCars.splice(2, 0, ...myNewCars);
 console.log('after adding my new cars');
 console.log(myCars);

 console.log(myCars.toLocaleString());

 let currentDate = Date.now();

 myCars.splice(4, 0, currentDate);

 console.log(myCars);
 console.log(myCars.toLocaleString());

 console.log(myCars.toString());

 let newCars = ['Bugatti', 'HArley'];
 myCars.unshift(...newCars);

 console.log(myCars);


 for (let a of myCars) {
 console.log(a);
 }

 let myRandArray = Array.from({length: 100}, v => Math.round(Math.random() * 1000));
 }

 /!*{
 console.log(JSON.parse('null'));
 console.log(JSON.parse('"null"'));

 JSON.parse('{}');              // {}
 JSON.parse('true');            // true
 JSON.parse('"foo"');           // "foo"
 JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
 JSON.parse('null');            // null
 }*!/

 {
 let a = [1, 2, 3, 4, 5, 6];
 // console.log(JSON.parse('[1,2,3,4,5,6]'));
 // let myStr = "{property : '1'}";
 // console.log(JSON.parse(myStr));

 let myObj = {
 name: 'Licentiu',
 profession: 'programmer wannabe',
 age: 34,
 location: {
 country: 'Romania',
 state: 'Cluj',
 City: 'Floresti',
 exactAddress: {
 streetName: 'Florilor',
 streetNumber: '88G',
 apartment: 1
 }
 },
 experience: '10y',
 experienceDomain: 'IT',
 roles: {
 role1: 'QA',
 role2: 'TL',
 role3: 'BA'
 }
 };

 console.log(myObj);
 let stringifiedObj = JSON.stringify(myObj);

 console.log(stringifiedObj);

 let myObjFromStringify = JSON.parse(stringifiedObj);
 console.log(myObjFromStringify);

 }

 const parseIt = (k, v) => {
 return typeof v === 'number' ? Math.sqrt(v) : v;
 };

 {
 let myO = '{"p": 45, "j": "el"}';
 let myParsedO = JSON.parse(myO, parseIt);
 console.log(myParsedO);
 }

 //MAP

 {
 let a = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);
 console.log(a);

 a.forEach((v, k) => {
 console.log(`Set[${k}] = ${v}`);
 });
 }

 {
 //Number
 let val = 1;
 for (let i = 1; i <= 10000; i++) {
 if ((val *= i) >= Number.MAX_SAFE_INTEGER) {
 console.log(`val: ${val} -> Number.MAX_SAFE_INTEGER depasit`);
 break;
 }
 }

 }

 {
 console.log(Number.isSafeInteger(3.0));
 console.log(Number.isSafeInteger(3));
 }

 {
 let a = '12,231415';
 let b = Number.parseFloat(a);

 console.log(b);


 if (Number.parseFloat(a).toString() === a) {
 console.log(`Conversion has been done successfully`);
 } else {
 console.log('Conversion failed...');
 }

 console.log(145.56.toExponential());

 }

 {
 let a = 1465.11111156;

 console.log(a);

 let aExp = a.toExponential();

 console.log(`aExp: ${aExp} --- typeof: ${typeof  aExp}`);

 // let b = aExp.toFixed();
 // console.log(`b: ${b}`);

 let aParsed = parseFloat(aExp);
 console.log(aParsed);

 console.log(a.toLocaleString());


 console.log(a.toPrecision(2));
 }

 import {profileTest} from '../external-js/data/dataObjects'

 {

 let myNewObj = Object.assign({}, profileTest);

 profileTest.name = 'Zori';
 profileTest.profession = 'Architect';
 profileTest.location.exactAddress.streetName = 'Muresului';

 console.log(profileTest);
 console.log(myNewObj);
 }

 {
 let o1 = new Object({a: 1, b: 0, d: 6});
 let o2 = {b: 2, c: 4};
 let o3 = {c: 3, d: 5};


 let oMerged = Object.assign(o1, o2, o3);

 console.log('o1');
 console.log(o1);

 console.log('o2');
 console.log(o2);

 console.log('o3');
 console.log(o3);
 console.log(oMerged);

 /!*    let u = o1.values.forEach(v => {
 console.log(v);
 });*!/
 }

 class CloneObj {
 constructor(fn, ln, mn) {
 this.firstname = fn;
 this.middlename = mn;
 this.lastname = ln;
 }

 fullname() {
 this.fullname = this.firstname + ' ' + this.middlename + ' ' + this.lastname;
 }
 }


 {
 let myname = new CloneObj('Licentiu', 'Kovacs', 'Mugurel');

 console.log(myname);
 myname.fullname();
 console.log(myname);
 }


 class CloneObj1 {
 constructor(obj) {
 this.cloneMe(obj);
 }

 cloneMe(obj) {
 // let tempObj = {};
 for (let prop in obj) {
 if (obj.hasOwnProperty(prop) === true) {
 if (typeof obj[prop] === 'object') {
 this.prop = this.cloneMe(obj[prop]);
 } else {
 this[prop] = obj[prop];
 }
 }
 }
 }
 }

 {
 console.log(profileTest);

 let myNewProfile = new CloneObj1(profileTest);
 console.log('myNewProfile --- START');
 console.log(myNewProfile);
 console.log('myNewProfile --- END');


 }

 const myFunc = (obj) => {

 for (let prop in obj) {
 if (obj.hasOwnProperty(prop)) {
 console.log(typeof obj[prop]);
 if (typeof obj[prop] === 'object') {
 myFunc(obj[prop]);
 } else {
 console.log(`obj[${prop}] = ${obj[prop]}`);
 }
 }
 }
 };

 {
 myFunc(profileTest);
 }

 {
 let obj = Object.create({name: 'foo'}, {
 bubu: {
 value: 'papanash',
 enumerable: false
 },
 baba: {
 value: 'buburuza',
 },
 bobo: {
 value: 'curcan',
 enumerable: true
 },
 chuchu: {
 value: 'jojo',
 enumerable: true
 }

 });

 console.log(obj);


 let objectShallowCopy = Object.assign({}, obj);
 console.log(objectShallowCopy);
 }

 {
 let obj = Object.create({foo: 1}, { // foo is on obj's prototype chain.
 bar: {
 value: 2  // bar is a non-enumerable property.
 },
 baz: {
 value: 3,
 enumerable: true  // baz is an own enumerable property.
 }
 });

 let copy = Object.assign({}, obj);
 console.log(copy); // { baz: 3 }
 }


 {
 let oO = profileTest;
 let myObj = Object.create({}, {
 prop1: {
 value: 10,
 writable: false
 },
 prop2: {
 value: 11,
 writable: true,
 enumerable: false
 },
 prop3: {
 value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
 writable: false,
 enumerable: true
 }
 });

 console.log(myObj);

 let myObj1 = {
 prop2: 15,
 prop3: [2, 3, 2, 3, 2, 3]
 };

 try {
 let myObj2 = Object.assign(myObj, myObj1);
 console.log('myObj2');
 console.log(myObj2);

 } catch (e) {
 // console.log(e);
 console.log(typeof e);
 console.log(`An error has occured: ${Object.toString(e)}`);
 }
 }

 {
 console.log(profileTest);

 Object.defineProperty(profileTest, 'theStuff', {});
 }
 */


/*class myStruct {
 constructor(a = null, b = null, c = null) {
 if (a !== null) this.setMainInfo(a);
 if (b !== null) this.setExperience(b);
 if (c !== null) this.setSpouseData(c);
 }

 setMainInfo({firstname: fn, lastname: ln, middlename: mn} = null) {
 this.firstname = fn;
 this.lastname = ln;
 this.middlename = mn;
 }

 setExperience({years: yrs, companies: comps, roles: r0l3s}) {
 this.years = yrs;

 //add to current object all companies
 this.companies = {};
 for (let companyNum in comps) {
 this.companies[companyNum] = comps[companyNum];
 }

 //add to current object all roles
 this.roles = {};
 for (let roleNum in r0l3s) {
 this.roles[roleNum] = r0l3s[roleNum];
 }
 }

 setSpouseData(spouseObj) {
 console.log(spouseObj);
 }
 }*/

import {myStruct} from '../external-js/data/dataStructures';
/*

 {
 let invited = {
 firstname: 'Licentiu',
 lastname: 'Kovacs',
 middlename: 'Mugurel'
 };
 let invitedProfile = new myStruct(invited);
 let experienceOfGuest = {
 years: 10,
 companies: {
 company1: 'Soft',
 company2: 'Hard',
 company3: undefined
 },
 roles: {
 role1: 'QA',
 role2: 'TL',
 role3: 'BA'
 }
 };

 invitedProfile.setExperience(experienceOfGuest);

 let SpouseInfo = {
 spouseFN: 'Zoriana',
 spouseLN: 'Kovacs',
 spouseMN: null,
 spouseJob: 'Software Developer',
 spouseExperienceYears: 4,
 spouseBornData: {
 country: 'Ukraine',
 city: 'L\'viv',
 year: 1983,
 month: 'August',
 day: 21
 }
 };
 invitedProfile.setSpouseData(SpouseInfo);

 console.log(invitedProfile);


 Object.freeze(experienceOfGuest);
 console.log(`Object.isFrozen: ${Object.isFrozen(experienceOfGuest)}`);

 console.log(experienceOfGuest);

 // experienceOfGuest.years = 100;
 //
 // console.log(experienceOfGuest);


 let myO = Object.create({}, {
 a: {
 value: 5,
 writable: false,
 configurable: false,
 enumerable: true
 },
 b: {
 value: 2,
 configurable: true,
 writable: true,
 enumerable: false
 }
 });

 console.log(myO);

 Object.seal(myO);
 console.log(`Object.isSealed: ${Object.isSealed(myO)}`);

 // Object.defineProperty(myO, 'b', {
 //     configurable: false,
 //     value: 'static'
 // });

 myO.b = 5;
 // myO.a = 10;

 console.clear();

 console.log(myO);

 // console.log(Object.getOwnPropertyDescriptor(myO,'a'));
 // console.log(Object.getOwnPropertyDescriptors(myO));

 for (let i in myO) {
 console.log(i);
 console.log(Object.getOwnPropertyDescriptor(myO, i));
 }

 console.log(`myO.propertyIsEnumerable('a'): ${myO.propertyIsEnumerable('a')}`);
 console.log(`myO.propertyIsEnumerable('b'): ${myO.propertyIsEnumerable('b')}`);

 var o = {
 property: function ([parameters]) {},
 get propert() {},
 set propert(value) {}
 };

 console.log(o);
 }

 {
 var obj1 = {};
 assert(Object.getPrototypeOf(obj1) === Object.prototype);

 }

 */

//PROMISES
/*
 {
 let myPro = new Promise((resolve, reject) => {
 let myVal = Math.round(Math.random() * 100);
 if ((myVal % 10) === 0 || (myVal % 2) === 0) {
 //consider it a success
 setTimeout(function () {
 resolve(myVal);
 }, 250);
 } else if (myVal % 3 === 0) {
 reject({value: `no luck! number chosen: ${myVal}`});
 } else {
 throw new EvalError(`Invalid number chosen: ${myVal}`);
 }
 });

 myPro
 .then(successMessage => {
 console.log(`Number returned: ${successMessage}`);
 return successMessage;
 })
 .then(successMessage => {
 console.log(`second then: ${successMessage}`);
 })
 .catch((err) => console.log(`err: ${err}`));

 }
 */
/*

 const processFurther1 = (obj) => {
 let requestedValue = 13;
 let greaterThan11 = obj.array.some(v => (v % requestedValue === 0));
 if (greaterThan11 === true) {
 return Object.defineProperty(obj, 'hasAtLeastAValueMultiplierByRequestedMultiplier', {
 value: true,
 enumerable: true
 });
 } else {
 throw new Error(`At least one value from the Array needs to be an integer exactly divisible by ${requestedValue}. The promise chain failed at 2nd level.`);
 }
 };

 const processFurther2 = (obj) => {
 let doesItHaveARootSquareInside = obj.array.some(v => (Math.sqrt(v) === Math.round(Math.sqrt(v))));

 if (doesItHaveARootSquareInside) {
 return Object.defineProperty(obj, 'doesItHaveARootSquareInside', {value: true, enumerable: true})
 } else {
 throw new Error(`The Array doesn't meet the minimum requirements of having inside at least one Root Square. The promise chain failed at 3rd level.`)
 }
 };

 const listResults = (obj) => {
 console.log(obj);
 };

 {
 //generate a random Array with 30 elements and random values
 let myArray = Array.from({length: 30}, v => Math.floor(Math.random() * 80) + 10);

 let myFirstPromise = new Promise((resolve, reject) => {
 let greaterThanTen = myArray.every((element) => element > 10);
 if (greaterThanTen === true) {
 resolve({
 array: myArray,
 hasAllValuesGreaterThan10: true
 });
 } else {
 throw new Error('All elements need to be greater than 10. The promise failed at creation.');

 // reject('All elements need to be greater than 10. The promise failed at creation.');
 }
 });

 myFirstPromise
 .then(processFurther1)
 .then(processFurther2)
 .then(listResults)
 //sau ce e mai jos
 // .then(success => processFurther1(success))
 // .then(success => processFurther2(success))
 // .then(success => listResults(success))
 .catch(err => {
 console.log('%c' + err, 'background-color: red; color: white; padding: 5px');
 console.log(myArray);
 });


 let a = myArray.map(Math.sqrt);
 console.log(`a`);
 console.log(a);

 }
 */

//
//
// {
//     let myArray = Array.from({length: 100}, (v, i) => i);
//     for (let obj of myArray) {
//         // console.log(obj);
//     }
// }
/*

 const logValues = input => {
 console.log(input);
 console.log(typeof input);

 if (typeof input === 'object') {
 for (let i in input) {
 console.log(`${i}: ${input[i]}`);
 }
 }
 };

 const logFailure = input => {
 console.log(`Error occured: ${input}`);
 }

 {
 let promise1 = new Promise((good, bad) => {
 let myTimeOut = Math.round(Math.random() * 5000) + 100;
 console.log('Promise 1 started');
 console.log('Timeout: ' + myTimeOut);
 setTimeout(function () {
 let myRandValue = Math.round(Math.random()*100);

 if (myRandValue % 2 === 0) {
 console.log('Promise 1 ended');
 good(Math.round(Math.random() * 100))
 } else {
 console.log('Promise 1 ended');
 bad('Promise 1 failed')
 }
 }, myTimeOut);
 });

 let promise2 = new Promise((good, bad) => {
 console.log('Promise 2 started');

 setTimeout(function () {
 let MyRand = Math.round(Math.random() * 100);

 if (MyRand % 2 === 0) {
 console.log('Promise 2 ended');
 good(1)
 } else {
 console.log('Promise 2 ended');

 bad('Promise 2 failed')
 }
 }, 15000)
 });


 Promise
 .all([promise1, promise2])
 .then(logValues)
 .catch(logFailure);
 }
 */


//REFLECT methods

function listMe(v) {
    console.log(v);

    return String.fromCharCode(v);

};

{
    let a = Reflect.apply(listMe, null, [104, 101, 108, 108, 111]);

    console.log(a);

    console.log('function.prototype.apply');
    console.log(listMe.apply(undefined, [104, 101, 108, 108, 111]));

    console.log('function.prototype.call');
    console.log(listMe.call(undefined, ...[104, 101, 108, 108, 111]));

    //
    // console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]));
    //
    // console.log('Reflect.apply(Math.sqrt, undefined, [1,2,3,4,5,6,7,8,9,0]) ');
    //
    // console.log(Reflect.apply(Math.sqrt , Math.sqrt, [1,2,3,4,5,6,7,8,9,0]));
    // console.log(Reflect.apply(Math.floor, undefined, [1,2.15,3,4,5,6,7,8,9,0]));

    let f = Function.prototype.apply.call(Math.floor, undefined, [1.75, 1.56]);
    console.log(f);

}

const function1 = obj => {
    let doesIt = obj.theArray.some(v => Math.sqrt(v) === Math.round(Math.sqrt(v)));
    return Object.defineProperty(obj, 'atLeastOnePerfectSquareExist', {
        value: doesIt,
        enumerable: true,
        writable: true
    });
    // obj;
};

const function2 = obj => {
    let sum = obj.theArray.reduce((cummul, v) => cummul += v, 0);
    console.log(`the sum is: ${sum}`);

    return Object.defineProperty(obj, 'elementsSumGreaterThan1000', {
        value: (sum > 1000),
        writable: true,
        enumerable: true
    });
};

{
    let myR = Array.from({length: 100}, v => Math.round(Math.random() * 100) + 4);

    let myPromise = new Promise((accept, reject) => {
        // consider pass if all values from the array are greater than 5, otherwise fail
        let isEveryElementGreaterThan5 = myR.every(v => v > 5);
        let toReturn = {
            theArray: myR
        };
        Object.defineProperty(toReturn, 'isEveryElementGreaterThan5', {
            value: isEveryElementGreaterThan5,
            enumerable: true,
            writable: true
        });

        if (isEveryElementGreaterThan5 === true) {
            accept(toReturn);

        } else {
            toReturn.isEveryElementGreaterThan5 = false;
            reject(toReturn);
        }
    });

    myPromise // this is executed async
        .then(success => {
            console.log('All elements from the Array are greater than 5');
            console.log(success);
            return success;
        })
        .then(success => function1(success)) // if all elements are greater than 5, proceed and verify if at least one value from the array is exactly divisible by 5
        .then(success => function2(success)) //if previous test passes proceed to next step only if the sum of all elements is greater than 1000
        .then(success => function3(success))
        .catch(err => {
            console.log('Not elements are greater than 5 -> answer: ');
            console.log(err);
        });

    console.log(myR);

    console.log(Math.sqrt(16));
}