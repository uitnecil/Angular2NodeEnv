/**
 * Created by liz on 2/24/17.
 */

/**
 * Displays an array between two text lines with background color random chosen from a list. It also has 2 options for displaying (1 = customized per element 2 = standard console.log
 * @param arr {Array}
 * @param displayType {[0,1]}
 */
export const showArray = (arr, displayType = 1) => {
    let colors = ['blue', 'green', 'red', 'magenta', 'orange', 'black'];
    let randomColorIndex = Math.floor(Math.random() * (colors.length - 1));

    console.info(`%cshowArray displaying array START (ARRAY Length: ${arr.length}):`, `background-color: ${colors[randomColorIndex]}; color: white; padding: 0 10px;`);
    if (Array.isArray(arr)) {
        if (displayType == 1) arr.forEach((value, index) => console.log(`index ${index}: ${value}`));
        else if ((displayType === 2) || (displayType !== 2 )) console.log(arr);
    }
    console.info(`%cshowArray displaying array END`, `background-color: ${colors[randomColorIndex]}; color: white; padding: 0 10px;`);

};

/**
 * Calculates the sum of all array elements
 * @param arr {Array}
 * @returns {number}
 */
export const sumArray = (arr) => {
    let tempSum = 0;
    arr.forEach((v, i) => tempSum += v);
    console.log(`Sum of all array elements is: ${tempSum}`);
    return tempSum;
};

/**
 * Generates an Array with random numbers (by default 100 elements)
 * @param n {number}
 * @returns {Array}
 */
export const createNumericArray = (n = 100) => {
    let tempArr = [];
    let i = 0;
    let tempVal = 0;
    while (i < n) {
        tempVal = Math.floor(Math.random() * n * 100);
        tempArr.push(tempVal);
        i++;
    }
    return tempArr;
};


/**
 * Creates a comma separated string with all elements of the Array
 * @param arr {Array}
 * @returns {string}
 */
export const stringifyMyArray = (arr) => {
    let str = '';
    if (Array.isArray(arr)) {
        arr.forEach((v, i, mArr) => {
            if (i !== 0) str += ',';
            str += v;
            console.log(str);
        });
    }
    return str;
};

/**
 * returns the max value between a and b passed as parameters
 * @param a {Number}
 * @param b {Number}
 */
export const getMax = (a, b) => Math.max(a, b);

/**
 * Function returns an object containing the number of encounters for each element in the array passed as argument {name:encounters...}. It goes through the Array from Left to Right.
 * @param arr {Array}
 */
export const countEncounters = (arr) => {
    return arr.reduce((names, currentValue) => {
        if (currentValue in names) {
            names[currentValue]++;
        } else {
            names[currentValue] = 1;
        }
        return names;
    }, {});
};

/**
 * Function returns an object containing the number of encounters for each element in the array passed as argument {name:encounters...}. It goes through the Array from Right to Left.
 * @param theArray
 * @returns {*}
 */
export const countEncountersRTL = (theArray) => {
    return theArray.reduceRight( (theNames, curr) => {
        if (curr in theNames) {
            theNames[curr]++;
        } else {
            theNames[curr] = 1;
        }
        return theNames;
    },{});
};