/**
 * Created by liz on 2/6/17.
 */


const bubu = () => {
    // console.log('OK');
};


bubu();

// var x = 1;
// redeclare_of_x: {
//     var x = 2;
//     console.log("var: x inside of block: " + x);
// }
// console.log('var: x outside of block: ' + x); //logs 2
//
// let y = 1;
// redeclare_of_y: {
//     let y = 2;
//     console.log('let: y inside of block: ' + y);
// }
// console.log('let: y outside of block: ' + y);
//
// const z = 1;
// redeclare_of_z: {
//     const z = 2;
//     console.log('const: z inside the block: ' + z);
// }
// console.log('const: z outside the block: ' + z);
//
// let t = 1;
//
// level1: {
//     while (y < 10) {
//         y++;
//         console.log('y in while: ' + y);
//         level2: {
//             let t = 1;
//             let u = '';
//             while (t < 100) {
//                 u += Math.round(Math.random() * 10);
//                 t++;
//                 if (y == 4 ) {
//                     // console.log (y + ''  );
//                     console.log('y == 4 -> break level 1');
//
//                     break level1;
//                 }
//             }
//             console.log(u);
//         }
//     }
// }

// function generateRandomNoCeSeImparteExactLaUnAltNrRandom() {
//     let i = 1, j = 1, rand1, rand2;
//     while (i < 1000000) {
//         rand1 = Math.round(Math.random()*1000000);
//         rand2 = Math.round(Math.random()*1000000);
//         if (rand1 % rand2 == 0) {
//             console.log (rand1 + ' % ' + rand2 + ' = 0');
//             console.log('took ' + i + ' tries...');
//             break;
//         }
//         i++;
//     }
// }
//
// const generateRandomNoCeSeImparteExactLaUnAltNrRandom = () => {
//     let i = 1, j, no = 0, no1 = 0, rand1, rand2;
//     while (i < 100000) {
//         rand1 = Math.round(Math.random()*10000);
//         rand2 = Math.round(Math.random()*10000) + 100;
//         j = rand1 % rand2;
//         if (j == 0) {
//             console.log (rand1 + ' % ' + rand2 + ' = 0');
//             console.log('took ' + i + ' tries...');
//             // break;
//         }
//         if (no == 0 ) {
//             console.log('no = 0 && j = ' + j);
//         }
//             //     // console.log('j: ' + j);
//         //     if (i >= 100) {
//         //         j = 1;
//         //         console.log('no = 0 && j = 1')
//         //     }
//         // }
//         switch (j) {
//             case 1 :
//                 if (no == 0) {
//                     console.log(rand1 + ' % ' + rand2 + ' = 1');
//                     no++;
//                 }
//             case 2 :
//                 if (no == 0) {
//                     console.log(rand1 + ' % ' + rand2 + ' = 2');
//                     no++;
//                 }
//             case 3 :
//                 if (no == 0) {
//                     console.log(rand1 + ' % ' + rand2 + ' = 2');
//                     no++;
//                 }
//             default:
//
//         }
//         if (no !== 0 ) {
//             no1++;
//             no = 0;
//         }
//         if (no1 == 100) {
//             console.log ('no1 reached 100... break executed. ')
//             break;
//         }
//         i++;
//     }
// }
//
// generateRandomNoCeSeImparteExactLaUnAltNrRandom()
//
// const myFunc = () => {
//     let a, b;
//     outer_loop: for (a=1; a<100; a++) {
//         inner_loop: for (b=1; b<100; b++) {
//             console.log(a + " : " + b);
//             if (b == 10) {
//                 break outer_loop;
//             }
//         }
//     }
//     return a * b ;
// }
//
// console.log(myFunc());
//
// block1: {
//     console.log('block1');
//     break block2;
// }
//
// block2: {
//     console.log('block2');
// }


class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.width = width;
        this.height = height;
        this.aria = () => {
            let b = this.width * this.height;
            return (b);
        }
        // this.aria = function () {
        //     let b = this.width * this.height;
        //     return (b);
        // }
        // this.ln = function() {
        //     return (this.width + this.height)
        // }
        this.length = () => {
            return (this.width + this.height)
        }
    }
}

class Square extends Polygon {
    constructor(size) {
        super(size, size);
        this.name = 'Square';
        this.len = this.width * 2;
    }
}


let a = new Polygon(100, 200);

console.groupCollapsed('Polygon class');

console.log('${a}');
console.log(a);
// console.table(a,["aria", "height", "name"]);
console.log('polygon length = ${a.length()}');
console.log('polygon length = ' + a.length());
console.log('polygon area = ${a.aria()}');
console.log('polygon area = ' + a.aria());

console.groupEnd();

console.groupCollapsed('Square class');

let b = new Square(10);
console.log('${b}');
console.log(b);
// console.table(b);
console.log('square length = ${b.length()}');
console.log('square length = ' + b.length());
console.log('square aria = ${b.aria()}');
console.log('square aria = ' + b.aria());
console.log('square len = ${b.len}');
console.log('square len = ' + b.len);

console.groupEnd();

// const myConst = 10;
// let myLet = 10;
//
// if (myConst === 10) {
//     const myConst1 = 100;
//     myLet = 11;
//     console.log(myConst1 + ' - ' + myLet);
//     if (myConst1 === 100) {
//         let i;
//         for (i = 1; i<= 100; i++) {
//             myLet++;
//             console.log(myConst1 * i + ' - ' + myLet) ;
//             if (myLet === 13) {
//                 break;
//             }
//         }
//     }
// }

// let aa = 0;
//
// for (aa=1; aa<100; aa++) {
//     if (aa===50) {
//         continue;
//     }
//     if (aa===50) {
//         console.log('this message will not appear!')
//     }
//     console.log(aa);
// }

// let aa = 0;
// while (aa < 100) {
//     aa++;
//     console.log(aa);
//
//     if ((aa % 10) == 0) {
//         continue;
//         console.log('... this should not be displayed...');
//     }
//
//     console.log();
// }

//
// const buggyCode = () => {
//     debugger;
//     let i = 0;
//     for (i=0; i<100; i++) {
//         console.log('i == ${i}');
//         debugger;
//     }
// }
//
// buggyCode();

console.groupCollapsed('switch, do/while, ...')

let u = 0;
switch (u) {
    case 1:
        console.log('this is 1');
    case 2:
        console.log('this is 2');
    default:
        console.log('this is default selection');
}

let o = 0;
let res = '';

do {
    o += 1;
    res += Math.pow(o, o) + ' - ';
} while (o < 50);

console.log(res);

let shushu = document.getElementById('shushu');
if (shushu) {
    document.getElementById('shushu').innerHTML = res;
}

console.groupEnd();

const myFunction = (cucu) => {
    console.log('myFunction');
    // let cucu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    console.log(cucu);

    for (let i = 1; i < cucu.length; cucu[i++] = Math.pow(cucu[i], cucu[i]));
    console.log(cucu);

};

// export { myFunction };
const createArray_method1 = (noOfSubArrays, columns) => {
    let result = [];
    let subarray = [];
    for (let i = 0; i < noOfSubArrays; i++) {
        for (let j = 0; j < columns; j++) {
            let randomNumber = Math.round(Math.random() * 100);
            subarray.push(randomNumber);
        }
        result.push(subarray);
        subarray = [];
    }
    return result;
}

const createArray_method2 = (noOfSubArrays, columns) => {
    let result = [];
    let subarray = [0, 0, 0, 0];

    for (let i = 0; i < noOfSubArrays; i++) {
        for (let j = 0; j < columns; j++) {
            let randomNumber = Math.round(Math.random() * 100);
            subarray[j] = randomNumber;
        }
        result.push(subarray);
    }
    return result;
}


const sumArrayValues4Columns = (jeez) => {
    let x = [0, 0, 0, 0];
    if (Array.isArray(jeez)) {
        for (let i = 0;
             (i < jeez.length) && (Array.isArray(jeez[i]));
             x[0] += jeez[i][0], x[1] += jeez[i][1], x[2] += jeez[i][2], x[3] += jeez[i][3], i++);
    }
    return x;
}


//define array or arrays
let jeez = [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [2, 3, 4, 5],
    [5, 2, 3, 6],
    [1, 2, 6, 2]];

// console.log(sumArrayValues4Columns(jeez));

pieceofcode: {
    console.group('1st Method of creating the array')

    // console.time('reinit');
    let jeez = createArray_method1(100, 4);
    // console.timeEnd('reinit');

    console.groupCollapsed('The generated Array')
    console.table(jeez);
    console.groupEnd();

    console.groupEnd();

    console.group('2nd Method of creating the array');
    // console.time('reinit1');
    let jeez1 = createArray_method2(100, 4);
    // console.timeEnd('reinit1');
    console.groupEnd()
// console.log('reinit after each loop: array generation time is: ' + (endTime-startTime));
}

console.groupCollapsed('a debugged part, collapsed');
console.log('array is: ')
// console.log(jeez);
console.table(jeez);
console.log('array length is: ' + jeez.length)

console.log(sumArrayValues4Columns(jeez));

console.groupEnd();

console.group('other stuff');

ciuciu: {
    let o = [1, 2, 43, 5];
    o.fill(0);
    console.log('o: ');
    console.log(o);
}

console.groupEnd();

let object = {};
let tempObject = {};
for (let j = 0; j < 100; j++) {
    for (let i = 0; i < 100; i++) {
        let propertyTemp = 'property' + i;
        tempObject[propertyTemp] = i;
    }
    let propertyMain = 'property' + j;
    object[propertyMain] = tempObject;
}

{
    let u = [[0, 9, 8, 7]];
    let Obj = {aa: {a: 1}};
    let Obj1 = {a: 1};

    console.groupCollapsed('object');

// console.log(object);
// console.table(object);
    console.table(u);
    console.table(Obj);
    console.table(Obj1);

    console.groupEnd();
}

console.groupCollapsed('for ... in ');

{
    // let obj = {a: 1, b: 2, c: 3};
    // for (let properti in obj) {
    //     console.log('obj.' + properti + ' = ' + obj[properti]);
    // }
    //

    let triangle = {a: 0, b: 1, c: 2};

    function coloredTriangle() {
        this.color = 'red';
        this.space = '3d';
    }

    console.log('ce dracu face asta ????????????');


    coloredTriangle.prototype = triangle;
    // triangle.prototype = coloredTriangle();
    let newObj = new coloredTriangle();
    let obj1 = new coloredTriangle();


    console.log(obj1);
    console.log(newObj);
    console.log('Object.getOwnPropertyNames returns: ');
    console.log(Object.getOwnPropertyNames(newObj));

    for (let prop in newObj) {
        if (newObj.hasOwnProperty(prop)) {
            console.log('obj.' + prop + ' = ' + newObj[prop]);
        }
    }
    console.group('all object properties including inherited ones.');
    for (let prop in newObj) {
        console.log('obj.' + prop + ' = ' + newObj[prop]);
    }
    console.groupEnd();

    console.dir('new console dir');
    for (let j in newObj) {
        console.log(newObj[j]);
    }
}

console.groupEnd();


//block handling the  for (i of iterable) instruction for each iterable data type.
console.group('for (i of iterable) {...} for each iterable using it data type')

for_variable_of_iterable: {
    //Array
    console.groupCollapsed('Iterating through an Array');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 6, 5, 4, 3, 2, 1, 0];
    let index = 0;

    for (let it of array) {
        console.log('array[' + index + '] = ' + it);
        index++;
    }
    console.dir(array);
    //or using a const if the element value is not changed inside the for
    for (const element of array) {
        console.log(element);
    }
    console.groupEnd();

    console.groupCollapsed('Iterating through a String');
    let myString = 'abcdef';
    for (let char of myString) {
        console.log(char);
    }
    console.groupEnd();

    console.group('Iterating through a Typed Array')
    let myTypedArray = new Uint8Array([0x00, 0xff, 0xed]);

    for (let value of myTypedArray) {
        console.log(value);
    }
    console.groupEnd();

    console.group('Iterating through a Map');
    let myMap = new Map([['a', 1], ['b', 2], ['c', 3], ['b', 4]]);
    console.table(myMap);
    //Method 1
    console.groupCollapsed('1st Method');
    for (let i of myMap) {
        console.log(i);
    }
    console.groupEnd();

    //Method 2
    console.group('2nd Method');

    for (let [i, j] of myMap) {
        console.log(i + ':' + j);
    }
    console.log('Map length: ' + myMap.size);
    let newMap = myMap.entries();
    console.log('My New Map is:');
    console.log(newMap);

    for (let [a, b] of newMap) {
        console.log(a + ' -> ' + b);
    }
    console.log('b = ' + myMap.get('b'));
    console.log('Has b a value ? (true/false) :' + myMap.has('b'));

    let mySampleMap = new Map();
    let keyString = 'bubulina',
        keyObj = {},
        keyFunc = function () {};
    mySampleMap.set(keyString, "This is the value associated with 'bubulina'");
    mySampleMap.set(keyObj, 'value associated with keyObj');
    mySampleMap.set(keyFunc(), 'value associated with keyFunc');

    console.log('mySampleMap.size: ' + mySampleMap.size);
    console.log(mySampleMap);

    console.log('mySampleMap.get(keyString) = ' + mySampleMap.get(keyString));
    console.log('get key for value: ' + mySampleMap.get(mySampleMap.get(keyString)));
    console.log('mySampleMap.get(keyObj) = ' + mySampleMap.get(keyObj));
    console.log('mySampleMap.get(keyFunc()) = ' + mySampleMap.get(keyFunc()));
    console.log('mySampleMap.get({}) = ' + mySampleMap.get({}));  // undefined, because keyObj !== {}
    console.log("mySampleMap.get('bubulina') = " + mySampleMap.get('bubulina'));  // undefined, because keyObj !== {} ????????
    console.log("mySampleMap.get(function() {}) = " + mySampleMap.get(function() {}));  // undefined, because keyObj !== {} ????????

    console.group('mySampleMap iterated with forEach');

    // console.time('iterate Map using forEach');
    mySampleMap.forEach(function(value, key) {
        console.log(key + ' = ' + value);
    });
    // console.timeEnd('iterate Map using forEach');

    console.groupCollapsed('iterate throught big Map using different methods and check for best performing one...');

    let Map2 = new Map();
    let f_property = '';
    let f_value ;
    for (let i = 1; i<100; i++) {
        f_property = 'property' + i;
        f_value = 'value' + i;
        Map2.set(f_property, f_value);
    }
    console.log(Map2);

    console.time('start: let u of Map2');
    console.groupCollapsed('let u of Map2')
    for (let u of Map2) {
        console.log(u);
    }
    console.groupEnd();
    console.timeEnd('start: let u of Map2');

    console.time('start: let [prop,value] of Map2');
    console.groupCollapsed('let [prop,value] of Map2');
    for (let [prop, value] of Map2) {
        console.log('["' + prop + '": "' + value + '"]');
    }
    console.groupEnd('let [prop,value] of Map2');
    console.timeEnd('start: let [prop,value] of Map2');

    console.time('forEach');
    console.groupCollapsed('start: forEach');
    Map2.forEach(function (prop, value) {
        console.log('["' + prop + '" = "' + value + '"]');
    });
    console.groupEnd('start: forEach');
    console.timeEnd('forEach');


    console.groupEnd(); // iterate through Map using different methods and check for the best performing one;
    console.groupEnd();
    console.groupEnd();
}
console.groupEnd();

console.group('array/map operators (spread, concat, unshift ...)')
array_operation_spread_operator: {
    let a = [];
    let b = [];
    for (let i = 0; i<1000; i++) {
        a.push(Math.round(Math.random() * 100));
        b.push(Math.round(Math.random() * 100));
    }
    console.dir(a);
    console.log(a);
    console.dir(b);

    let c = [a, b];
    console.log(c);
}
console.groupEnd('array/map operators (spread, concat, unshift ...)');