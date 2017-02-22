/**
 * Created by liz on 2/21/17.
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

export let createRandomMap = (n = 100) => {
    let tempProp = '',
        tempValue = 0,
        myTempMap = new Map();
    for (let i = 1; i < n; i++) {
        tempProp = `property${i}`;
        tempValue = Math.round(Math.random()*100);
        myTempMap.set(tempProp, tempValue);
    }
    return myTempMap;
};

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

export let magic = (x = 10) => {
    return (x) => x*1337;
};

export let gimmeTypeOf = (parameter) => {
    console.log(`infunction: parameter instanceof Map: ${parameter instanceof Map}`);
    console.log(`infunction: parameter instanceof Set: ${parameter instanceof Set}`);
    console.log(`infunction: parameter instanceof Object: ${parameter instanceof Object}`);
    // switch (parameter) {
    //     case (typeof parameter == "undefined"):
    //         return 'undefined';
    //     case ((parameter instanceof Map) == true):
    //         return 'Map';
    //     case (parameter instanceof Set):
    //         return 'Set';
    //     case (parameter instanceof Object):
    //         return 'Object';
    //     default:
    //         return typeof parameter;
    // }
    if (typeof parameter == "undefined") {
        return 'undefined';
    } else if (parameter instanceof Map) {
        return 'Map';
    } else if (parameter instanceof Set) {
        return 'Set';
    } else if (parameter instanceof Object) {
        return 'Object';
    // } else if (parameter instanceof function) {
    //     return 'Function';
    } else {
        return typeof parameter;
    }
};