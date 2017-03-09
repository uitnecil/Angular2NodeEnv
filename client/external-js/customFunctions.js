/**
 * Created by liz on 2/21/17.
 */


/**
 * Returns the sum of all values of a Map. (assuming values are numbers)
 * @param myMap
 * @returns {*}
 */
export let setValuesConcat = (myMap) => {
    let concatValue = 0;
    if (myMap instanceof Map) {
        myMap.forEach((value, property) => concatValue += value);
        return concatValue;
    } else {
        return 'error - no Map';
    }
};


/**
 * Creates a random map and returns it.
 * @param n {number}
 * @returns {Map<any, any>|Map}
 */
export let createRandomMap = (n = 100) => {
    let tempProp = '',
        tempValue = 0,
        myTempMap = new Map();
    for (let i = 1; i < n; i++) {
        tempProp = `property${i}`;
        tempValue = Math.round(Math.random() * 100);
        myTempMap.set(tempProp, tempValue);
    }
    return myTempMap;
};


/**
 *
 */
export let functionReturn = () => {
    let i = 0;
    for (i; i < 1000; i++) {
        if (i === 5) {
            return;
        }
        console.log(`value of i: ${i}`);
    }
    console.log('on break it doesn\'t even reach here...');
};


/**
 * Returns the number multiplied by 1337;
 * @param x {number = 10}
 * @returns {function(*): number}
 */
export let magic = (x = 10) => {
    return (x) => x * 1337;
};


/**
 *
 * @param parameter {Object / number / string}
 * @returns {string}
 */
export let gimmeTypeOf = (parameter) => {
    if (typeof parameter == "undefined") {
        return 'undefined';
    } else if (parameter instanceof Map) {
        return 'Map';
    } else if (parameter instanceof Set) {
        return 'Set';
    } else if (parameter instanceof Function) {
        return 'Function';
    } else if (parameter instanceof Object) {
        return 'Object';
    } else {
        //in this case, the parameter is of primitive data type
        return typeof parameter;
    }
};

/**
 *
 * @param animal {string}
 * @returns {string}
 */
export let pickAnimals = (animal) => {
    switch (animal) {
        case 'Bear':
        case 'Eagle':
        case 'Snake':
        case 'Wolf':
        case 'Monkey':
            // console.log(`${animal} goes into Noe's ark`);
            return `${animal} goes into Noe's ark`;
        // break;
        case 'Dinosaur':
        case 'Alien':
        default:
            // console.log(`${animal} remains on Earth`);
            return `${animal} remains on Earth`;
        // break;
    }
};

/**
 *
 * @param no {number}
 * @returns {string}
 */
export let congrats = (no) => {
    let output = '';
    switch (no) {
        case 10:
            output += 'As I said, ';
        case 9:
            output += 'Welcome';
        case 8:
            output += 'to the 1st anniversary';
        case 7:
            output += 'of number' + no;
            return output;
            break;
        case 1:
            output += 'whaaaat ?';
        default:
            return 'choose a number from 7 to 10';
    }
}

/**
 * Function just throws an error in the finally tag which should complicate debugging.
 */
export let erroring = () => {
    //second level
    try {
        throw new TypeError('Exception at lvl 2');
    }
    catch (err) {
        console.error(`lvl 2: Caught: ${err.message}`);
        o = true;
        throw err;
    }
    finally {
        if (o) {
            console.log('lvl 2: finally: an error was logged');
        }
        return;
    }
}


/**
 * Throws 3 types of errors based on n value {1,2,3}
 * @param n {number}
 */
export let errorCode = (n) => {
    switch (n) {
        case 1:
            throw new TypeError('Type Error');
            break;
        case 2:
            throw new RangeError('Range Error');
            break;
        case 3:
            throw new EvalError('Eval Error');
            break;
        default:
        //nothing here
    }
}


export let varVsLet = () => {
    var j = 10;
    let i = 10;

    letTheShitHappen: {
        try {
            console.log(`scope for j: ${this.j}`);
            console.log(`scope for i: ${this.i}`);

        }
        catch (e) {
            console.info('The following error was caught:');
            console.error(e);
        }
    }
}

export let createElements = () => {
    var list = document.getElementById('list');

    for (let i = 1; i <= 5; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode('Item ' + i));

        item.onclick = function () {
            console.log('Item ' + i + ' is clicked.');
        };
        list.appendChild(item);
    }

    // to achieve the same effect with 'var'
    // you've to create a different context
    // using a closure to preserve the value
    for (var i = 1; i <= 5; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode('Item ' + i));

        (function (i) {
            item.onclick = function () {
                console.log('Item ' + i + ' is clicked.');
            };
        })(i);
        list.appendChild(item);
    }

    for (var i = 1; i <= 5; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode('Item ' + i));

        // (function (i) {
            item.onclick = function (ev) {
                console.log('Item ' + i + ' is clicked.');
            };
        // })(i);
        list.appendChild(item);
    }

}


export let createSet = (n = 100) => {
    let tempSet = new Set(),
        tempSubSet = new Set(),
        tempValue,
        i = 0 ,
        subsetDuplicates = 0,
        subsetValueDuplicates;
    while (i < n) {
        let j = 0;
        subsetValueDuplicates = 0;
        tempSubSet.clear();
        while (j < n) {
            tempValue = Math.round(Math.random()*300);
            while (tempSubSet.has(tempValue)) {
                tempValue = Math.round(Math.random()*300);
                subsetValueDuplicates++;
            }
            tempSubSet.add(tempValue);
            j++;
        }
        console.log(`number of duplicate elements in a subset that were prevented is ${subsetValueDuplicates}`);



        if (tempSet.has(tempSubSet)) {
            console.log(`duplicate set ? `);
            console.log(tempSubSet);
            subsetDuplicates++;
        } else {
            tempSet.add(tempSubSet);
        }
            // console.log(tempSubSet);

        i++;
    }

    console.log(`number of duplicate sets that were prevented is ${subsetDuplicates}`);
    return tempSet;
};



export const processIncommingArguments = () => {
    let myArgs = Array.from(arguments);
    for (let i = 0; i < myArgs.length; i++) {
        let temp = (myArgs[i] instanceof Object) ? myArgs[i].constructor.toString() : typeof myArgs[i] ;
        console.log(temp);
    }
    console.log(myArgs);

    console.log(`args`);
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
    console.log(`======================`);
};