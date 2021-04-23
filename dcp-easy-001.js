// Given a list of numbers and a number k, return whether any 
// two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const dcp1 = (ary, k) => {
    let differenceAry = [];
    for (let i = 0; i < ary.length; i++) {
        let currNum = ary[i];
        let difference = k - currNum;
        if (differenceAry.includes(difference)) {
            return true;
        } else {
            differenceAry.push(currNum);
        }
    }
    return false;
}


console.log(dcp1([10, 15, 3, 7], 17) === true);
console.log(dcp1([10, 15, 30, 7], 40) === true);
console.log(dcp1([10, 14, 30, 6], 40) === true);